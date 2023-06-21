import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/utils/cn";
import { BsThreeDots } from "react-icons/bs";

export const StrategyInvestCard = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          View Details
        </a>
      ),
    },
    {
      key: "2",
      danger: true,
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Exit Strategy
        </a>
      ),
    },
  ];

  const router = useRouter();

  return (
    <div className="w-full rounded-3xl bg-gradient-custom-90.76deg p-10 text-white">
      <div>
        <p className="text-lg font-light leading-[21.6px]">
          Currently Invested
        </p>
        <p className="mt-3 text-2xl font-semibold tracking-[0.3px]">$999.989</p>
      </div>
      <div className="mt-6">
        <p className="text-sm font-light leading-[21.6px]">
          Your returns till date
        </p>
        <p className="mt-3 text-lg font-semibold tracking-[0.3px]">28.08%</p>
      </div>
      <div className="mt-4 flex w-full items-center space-x-6">
        <Button className="w-full" onClick={() => router.push("/strategy")}>
          Invest
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild onClick={(e) => e.preventDefault()}>
            <button className="transition-all hover:scale-105 active:scale-95">
              <BsThreeDots className="h-8 w-8" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">
              Exit Strategy
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
