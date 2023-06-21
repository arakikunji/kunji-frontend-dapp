import MainLayout from "@/layouts/main-layout";
import { NextPage } from "next";
import { AreaChart } from "@/components/charts/AreaChart";
import {
  IPortfolioCard,
  PortfolioCard,
} from "@/components/core/DashboardComponents/PortfolioCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { BsThreeDots } from "react-icons/bs";
import { USDollar } from "@/utils/us-dollar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Dashboard: NextPage = () => {
  const portfolio_card_props: IPortfolioCard = {
    amount_invested: 1347499,
    portfolio_value: 2121212,
    pnl: 824659872,
  };

  return (
    <MainLayout>
      <div className="w-full py-10">
        <p className="text-2xl font-semibold tracking-[0.3px]">Dashboard</p>
        <div className="relative mt-12 flex gap-4">
          <div className="flex w-2/3 flex-col justify-center">
            <div className="flex flex-col items-center justify-center space-y-10 rounded-3xl bg-gradient-custom-90.76deg p-10 shadow-2xl">
              <div className="flex w-full items-center justify-between border-b-[0.5px] border-[#9C9C9C] pb-[36.5px]">
                <div className="text-lg font-semibold tracking-[0.3px] text-[#D9DAE1]">
                  Portfolio Performances
                </div>
                <div>
                  <Select>
                    <SelectTrigger className="w-[400px] border-none bg-[#161617] text-xs font-light tracking-wide">
                      <SelectValue
                        placeholder="Complete Portfolio"
                        className=""
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Complete Portfolio</SelectItem>
                      <SelectItem value="strategy-1">
                        Arbitrage opprtunities and Balances Strategy
                      </SelectItem>
                      <SelectItem value="strategy-2">
                        Top Cap Digital Assets Strategy
                      </SelectItem>
                      <SelectItem value="strategy-3">
                        Alpha Blue Chip Focused Strategy
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="w-full">
                <AreaChart />
              </div>
              <div className="my-6 w-full">
                <div className="flex h-12 w-full items-center justify-between rounded-xl bg-[#161617] px-4 py-8">
                  <div className="flex items-center space-x-4">
                    {["1D", "1W", "1M", "6M", "YTD", "1Y"].map((X, i) => (
                      <div
                        key={i}
                        className={cn(
                          i === 4 && "pointer-events-none bg-[#2054A5]",
                          "w-16 cursor-pointer rounded-xl px-4 py-1 text-center hover:bg-white/10"
                        )}
                      >
                        {X}
                      </div>
                    ))}
                  </div>
                  <div>
                    <Button>Invest More</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center space-y-10 rounded-3xl bg-gradient-custom-90.76deg p-10 shadow-2xl">
              <div className="flex w-full items-center justify-between border-b-[0.5px] border-[#9C9C9C] pb-[36.5px]">
                <div className="text-lg font-semibold tracking-[0.3px] text-[#D9DAE1]">
                  My Strategies (3)
                </div>
                <div className="flex items-center space-x-4">
                  <div>Sort by:</div>
                  <Select>
                    <SelectTrigger className="w-[400px] border-none bg-[#161617] text-xs font-light tracking-wide">
                      <SelectValue placeholder="Asset Value" className="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Complete Portfolio</SelectItem>
                      <SelectItem value="strategy-1">
                        Arbitrage opprtunities and Balances Strategy
                      </SelectItem>
                      <SelectItem value="strategy-2">
                        Top Cap Digital Assets Strategy
                      </SelectItem>
                      <SelectItem value="strategy-3">
                        Alpha Blue Chip Focused Strategy
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid w-full grid-cols-10 place-content-center border-b-[0.5px] border-[#9C9C9C] pb-[36.5px]">
                <div className="col-span-4">Strategy</div>
                <div className="col-span-2">Investments</div>
                <div className="col-span-2">Current Value</div>
                <div className="col-span-2">Return</div>
              </div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="grid w-full grid-cols-10 place-items-center border-b-[0.5px] border-[#9C9C9C] pb-[36.5px]"
                >
                  <Link
                    href={`/strategy/${i + 1}`}
                    className="col-span-4 flex w-full justify-start"
                  >
                    Strategy {i + 1}
                  </Link>
                  <div className="col-span-2 flex w-full justify-start">
                    {USDollar.format(10001 + 1)}
                  </div>
                  <div className="col-span-2 flex w-full justify-start">
                    {USDollar.format(10001 + 1)}
                  </div>
                  <div className="flex w-full justify-start text-green-400">
                    +{(100 + 1).toFixed(2)}%
                  </div>
                  <div className="flex items-center justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        asChild
                        onClick={(e) => e.preventDefault()}
                      >
                        <div>
                          <Button variant={"ghost"} size={"sm"}>
                            <BsThreeDots className="text-2xl" />
                          </Button>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500">
                          Withdraw Funds
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-fit w-1/3">
            <PortfolioCard portfolio_card_props={portfolio_card_props} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
