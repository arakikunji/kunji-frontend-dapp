import Image from "next/image";
import StrategyLogo from "@/assets/svg/StrategyLogo.svg";

import { LineChart } from "../../charts/LineChart";
import { StrategyAbout } from "./StrategyAbout";
import { AreaChart } from "../../charts/AreaChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/utils/cn";
import { useRouter } from "next/router";

export const StrategyDetails = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  const router = useRouter();

  const items = [
    {
      key: "1",
      label: "Chart",
      children: (
        <div className="flex w-full flex-col items-center space-y-6">
          <div className="w-full">
            <AreaChart />
          </div>
          <div className="flex w-full items-center space-x-4">
            {["1D", "1W", "1M", "6M", "YTD", "1Y"].map((X, i) => (
              <div
                key={i}
                className={cn(
                  i === 3 && "pointer-events-none bg-[#2054A5]",
                  "w-16 cursor-pointer rounded-xl px-4 py-1 text-center hover:bg-[#2054A5]/20"
                )}
              >
                {X}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "About",
      children: <StrategyAbout />,
    },
  ];

  return (
    <div className="flex h-full flex-col justify-center space-y-6">
      <p
        className="cursor-pointer text-lg font-bold"
        onClick={() => router.push("/strategy/1")}
      >
        Arbitrage Opportunities and Balanced Strategy
      </p>
      <div className="flex items-center gap-4">
        <Image alt="strategy_logo" src={StrategyLogo} />
        <p className="text-sm">Kunji Asset Management Team</p>
      </div>
      <Tabs className="w-full" defaultValue={items[0]?.label}>
        <TabsList className="flex w-full justify-start rounded-none border-b">
          {items.map((item) => (
            <TabsTrigger value={item.label} key={item.key}>
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {items.map((item) => (
          <TabsContent key={item.key} value={item.label}>
            {item.children}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
