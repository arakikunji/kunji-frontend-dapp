import { NextPage } from "next";
import { Information } from "@/components/core/StrategyComponent/StrategyDetailsTabs";
import { StrategyResults } from "@/components/core/StrategyComponent/StrategyResults";
import { StrategyInvestCard } from "@/components/core/InvestComponent/StrategyInvestCard";
import MainLayout from "@/layouts/main-layout";

const Details: NextPage = () => {
  return (
    <MainLayout>
      <div className="mt-8">
        <p className="text-2xl font-semibold text-white">
          Arbitrage Opportunities and Balanced Strategy
        </p>
        <p className="mt-3 flex items-center text-sm font-normal text-white">
          Managed by Kunji Asset Management Team
        </p>
        <div className="mt-8 flex w-full space-x-6">
          <div className="w-2/3 ">
            <div className="rounded-3xl bg-gradient-custom-90.76deg p-10">
              <p className="text-2xl font-bold leading-[33.6px] text-white">
                Fund Introduction
              </p>
              <p className="mt-6 max-w-[95%] text-lg leading-[25.2px] text-[#9C9C9C]">
                The Arbitrage opportunities Balanced Strategy synopsis provides
                notable information to the investors about the strategy, its
                constituents, principal investment strategies employed, and
                principal risks involved in this investment. Before you invest,
                we strongly recommend you review this synopsis. The strategy
                primarily seeks to capture the price anomalies across Spot and
                derivatives markets.
              </p>
            </div>
            <Information />
          </div>
          <div className="flex w-1/3 flex-col gap-8">
            <StrategyInvestCard />
            <StrategyResults className="justify-start" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Details;
