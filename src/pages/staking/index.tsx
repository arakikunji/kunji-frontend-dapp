import MainLayout from "@/layouts/main-layout";
import { NextPage } from "next";
import Image from "next/image";
import stakingBenefitImage from "@/assets/svg/StakingBenefitIcon.svg";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { sora } from "../_app";
import { cn } from "@/utils/cn";
import { X } from "lucide-react";
import { useState } from "react";

const Staking: NextPage = () => {
  const [selectedStake, setSelectedStake] = useState<{
    stackState: "stake" | "unstake";
    isOpen: boolean;
  }>({
    isOpen: false,
    stackState: "stake",
  });

  const benefitsCardArr = [
    {
      title: "Gain More Tokens",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
    },
    {
      title: "Gain More Tokens",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
    },
    {
      title: "Gain More Tokens",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
    },
  ];

  return (
    <MainLayout>
      <div className="w-full text-white">
        <div className="mt-8">
          <p className="text-2xl font-bold leading-[140%]">Staking</p>
          <div className="mt-4 flex justify-center space-x-5">
            <div className="flex w-full flex-col">
              <p className="max-w-[90%] text-lg font-light leading-[25.2px] text-[#9c9c9c]">
                Kunji token is a governance and utility token. 1INCH holders can
                stake their tokens to participate in the 1inch Network's DAO
                governance, including 1inch Network treasury management. Also,
                you can choose resolvers and earn part of their fees.
              </p>
              <div className="mt-16">
                <p className="text-2xl font-bold leading-[140%]">
                  Staking Benefits
                </p>
                <div className="mt-8 flex flex-col space-y-6">
                  {benefitsCardArr.map((stakingbenefit, i) => (
                    <div
                      className="flex items-center space-x-8 rounded-3xl bg-gradient-custom-90.76deg p-8"
                      key={i}
                    >
                      <Image
                        alt="staking_benefit_icon"
                        src={stakingBenefitImage}
                      />
                      <div className="flex flex-col gap-2">
                        <p className="text-2xl font-bold leading-[140%]">
                          {stakingbenefit.title}
                        </p>
                        <p className="text-lg font-light leading-[140%]">
                          {stakingbenefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex w-[417px] flex-none flex-col gap-4 text-white">
              <div className="flex w-full flex-col items-center justify-center space-y-8 rounded-3xl bg-gradient-custom-90.76deg px-4 py-10">
                <div className="flex w-full justify-around gap-2 text-center">
                  <div className="w-1/2">
                    <p>Staked</p>
                    <p className="mt-4 text-lg font-semibold">14 KNT</p>
                  </div>
                  <div className="w-1/2">
                    <p>Returns</p>
                    <p className="mt-4 text-lg font-semibold">
                      2 KNT <span className="text-xs">(10%)</span>
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-around text-center">
                  <div className="w-1/2">
                    <p>Total Staked</p>
                    <p className="mt-4 flex items-center justify-center">
                      <span className="mx-1">&#x2022;</span>
                      <span className="text-sm font-light">3748027.58</span>
                    </p>
                  </div>
                  <div className="w-1/2">
                    <p>APY</p>
                    <p className="mt-4 text-lg font-semibold">20.50%</p>
                  </div>
                </div>
                <div className="flex w-full items-center">
                  <Sheet
                    onOpenChange={(open) => {
                      setSelectedStake((pre) => ({ ...pre, isOpen: open }));
                    }}
                    defaultOpen={false}
                    open={selectedStake.isOpen}
                  >
                    <SheetTrigger asChild>
                      <>
                        <Button
                          variant={"outline"}
                          className="w-full rounded-r-none border-r-[0.5px] border-[#2054A5] hover:scale-100"
                          onClick={() =>
                            setSelectedStake({
                              isOpen: true,
                              stackState: "stake",
                            })
                          }
                        >
                          Stake
                        </Button>
                        <Button
                          variant={"outline"}
                          className="w-full rounded-l-none border-l-[0.5px] border-[#2054A5] hover:scale-100"
                          onClick={() =>
                            setSelectedStake({
                              isOpen: true,
                              stackState: "unstake",
                            })
                          }
                        >
                          Unstake
                        </Button>
                      </>
                    </SheetTrigger>
                    <SheetContent
                      showCloseArrow={false}
                      position="right"
                      className={cn(
                        "relative bg-black/50 text-white",
                        sora.className
                      )}
                    >
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                        }}
                        className="relative my-28 flex h-full max-h-[85%] w-full flex-col items-center justify-center space-y-12 bg-transparent px-10"
                      >
                        <div className="h-[381px] w-[417px] rounded-3xl bg-gradient-custom-90.76deg p-8">
                          <div className="flex w-full items-center justify-between">
                            <div className="text-lg font-semibold text-white">
                              {selectedStake.stackState === "stake"
                                ? "Stake"
                                : "Unstake"}{" "}
                              KNT
                            </div>
                            <button
                              className="transition-transform active:scale-90"
                              onClick={() => {
                                setSelectedStake((pre) => ({
                                  ...pre,
                                  isOpen: false,
                                }));
                              }}
                            >
                              <X
                                size={16}
                                className="rounded-full bg-[#9C9C9C] p-[2px] text-black"
                              />
                            </button>
                          </div>
                          <div className="mt-6 text-sm text-[#9C9C9C]">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Amet minim mollit non
                            deserunt ullamco est sit aliqua dolor do amet sint.
                          </div>
                          <div className="mt-9">
                            <div className="flex items-center justify-between text-sm">
                              <div className="text-[#9C9C9C]">
                                Stakable balance
                              </div>
                              <div className="font-semibold text-white">
                                $ 3,560,00
                              </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between text-sm">
                              <div className="text-[#9C9C9C]">
                                {selectedStake.stackState === "stake"
                                  ? "Staking"
                                  : "Unstaking"}{" "}
                                Amount
                              </div>
                              <Button className="h-full px-5 py-2 text-xs">
                                Max
                              </Button>
                            </div>
                          </div>
                          <Button className="mt-12 w-full">Stake</Button>
                        </div>
                      </form>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Staking;
