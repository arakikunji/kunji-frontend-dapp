import Image from "next/image";
import Logo from "@/assets/svg/Logo.svg";
import Setting from "@/assets/svg/Setting.svg";
import Link from "next/link";
import { capitialize } from "../utils/capitialize";
import { useRouter } from "next/router";
import { Button } from "./ui/button";
import { Settings } from "lucide-react";
import { cn } from "@/utils/cn";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface IRouteNames {
  name: string;
  path: string;
}

const routeNames: Array<IRouteNames> = [
  {
    name: "dashboard",
    path: "/",
  },
  {
    name: "strategy",
    path: "/strategy",
  },
  {
    name: "governance",
    path: "/governance",
  },
  {
    name: "staking",
    path: "/staking",
  },
  {
    name: "referral",
    path: "/referral",
  },
  {
    name: "rewards",
    path: "/rewards",
  },
];

const Routes = () => {
  const router = useRouter();

  return (
    <div className="flex gap-8">
      {routeNames.map((routeName, i) => (
        <Link
          key={i}
          href={routeName.path}
          className={cn(
            router.pathname === routeName.path
              ? "font-semibold text-white"
              : "text-[#666363] hover:text-white/50",
            "text-lg transition-all duration-300"
          )}
        >
          {capitialize(routeName.name)}
        </Link>
      ))}
    </div>
  );
};

const OptionSettings = () => {
  return (
    <div className="flex items-center space-x-4">
      <ConnectButton showBalance={false} />
      <Settings className="transform cursor-pointer text-white transition hover:text-opacity-75 active:scale-95" />
    </div>
  );
};

export const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 mx-auto flex h-32 w-full items-center justify-center border-b-[0.5px] border-[#9C9C9C] bg-[#070912] px-[72px] backdrop-blur transition-all">
      <div className="flex w-full items-center gap-8">
        <Link href={`/`}>
          <Image src={Logo} alt="logo" width={42} height={42} />
        </Link>
        <div className="flex w-full items-center justify-between">
          <Routes />
          <OptionSettings />
        </div>
      </div>
    </div>
  );
};
