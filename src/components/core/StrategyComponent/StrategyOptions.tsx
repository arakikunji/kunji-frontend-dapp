import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiOutlineHeart } from "react-icons/ai";
import { BsInfoCircleFill, BsThreeDots } from "react-icons/bs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "@/utils/cn";
import { inter, sora } from "@/pages/_app";
import { USDollar } from "@/utils/us-dollar";
import { Input } from "@/components/ui/input";
import { DollarSign } from "lucide-react";
import { useState } from "react";
import successfullyInvestedSvg from "@/assets/svg/successfully-invested.svg";
import Image from "next/image";
import { erc20ABI, useAccount, useProvider, useSigner } from "wagmi";
import { ethers } from "ethers";

export const StrategyOptions = () => {
  const router = useRouter();

  const { isConnected } = useAccount();
  const [isSuccessfullyInvested, setIsSuccessfullyInvested] = useState(false);
  const [isAlreadyInvested, setIsAlreadyInvested] = useState(false);
  const { data: signer } = useSigner();

  const metamaskPopup = async () => {
    if (signer !== null && signer !== undefined) {
      const usdcTokenAddress = "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8";
      const contractAddress = "0x8842c31f32bFFB6f07Fa20237d15F8Ad6eDe13A6";
      const currencyContractWithSigner = new ethers.Contract(
        usdcTokenAddress,
        erc20ABI,
        signer
      );
      const max_allow =
        "115792089237316195423570985008687907853269984665640564039457584007913129639934";
      const tx = await currencyContractWithSigner.approve(
        contractAddress,
        max_allow
      );
      await tx.wait();
    }
  };

  return (
    <div className="flex flex-col items-end space-y-6">
      <button className="transition-all hover:scale-105 active:scale-95">
        <AiOutlineHeart className="h-8 w-8" />
      </button>
      <div className="flex items-center space-x-14">
        {!isConnected && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="relative">
                  {!isConnected && (
                    <div className="absolute inset-0 rounded-2xl"></div>
                  )}
                  <Button
                    size={"lg"}
                    className="select-none rounded-2xl px-10"
                    disabled={!isConnected}
                  >
                    Invest
                  </Button>
                </div>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="relative mr-10 flex w-44 items-center justify-center border-none bg-black/50"
              >
                <p className="text-left text-xs font-normal text-white">
                  Please connect your wallet to start investing
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        {isConnected && (
          <Sheet
            onOpenChange={(o) => {
              if (!o && isSuccessfullyInvested) {
                setIsAlreadyInvested(true);
              }
            }}
          >
            <SheetTrigger asChild>
              <Button
                size={"lg"}
                className="select-none rounded-2xl px-10"
                disabled={!isConnected}
              >
                Invest
              </Button>
            </SheetTrigger>
            <SheetContent
              position="right"
              className={cn("relative bg-[#050505] text-white", sora.className)}
            >
              <div className="sheet-overlay" />
              {isSuccessfullyInvested && !isAlreadyInvested ? (
                <div className="relative flex h-full w-full flex-col items-center justify-center space-y-6">
                  <div className="flex h-full w-full flex-col items-center justify-center">
                    <div className="my-4">
                      <Image
                        src={successfullyInvestedSvg}
                        width={188.96}
                        height={188.96}
                        alt="successfully-invested"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="text-sm font-light text-[#9C9C9C]">
                        Successfully Invested in
                      </div>
                      <div className="text-xl font-bold text-white">
                        Top Cap Digital Asset Strategy
                      </div>
                      <div className="text-sm font-light text-[#9C9C9C]">
                        You can safely close this panel
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full items-end pb-10">
                    <Button
                      className="w-full p-6 text-lg underline"
                      variant={"link"}
                      type="submit"
                    >
                      Download Commission Report
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSuccessfullyInvested(true);
                  }}
                  className="relative my-28 flex h-full max-h-[85%] w-full flex-col items-start justify-start space-y-12 bg-transparent px-10"
                >
                  <div className="w-full">
                    <div className="font-semibold">
                      <span className="font-light text-[#9C9C9C]">
                        Investing in
                      </span>{" "}
                      Top Cap Digital Asset Strategy{" "}
                    </div>
                    <div className="mt-6 flex w-full  flex-col space-y-4 rounded-xl bg-[#161617] p-6 shadow-xl">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-normal text-[#9C9C9C]">
                          Total Investment
                        </div>
                        <div>
                          {USDollar.format(
                            Number((Math.random() * 10001).toFixed()) + 1
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-normal text-[#9C9C9C]">
                          Current Value
                        </div>
                        <div>
                          {USDollar.format(
                            Number((Math.random() * 10001).toFixed()) + 1
                          )}
                          (+26%)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex w-full flex-col space-y-6">
                    <div className="font-semibold">
                      <span className="font-light text-[#9C9C9C]">
                        How much would you like to invest?
                      </span>
                    </div>
                    <label
                      htmlFor="invest-input"
                      className="relative shadow-xl"
                    >
                      <div className="absolute left-4 flex h-full items-center justify-center pr-2">
                        <DollarSign className="mr-4 h-5 w-5" />
                        <div className="jus left-10 flex h-8 w-[0.5px] items-center bg-white"></div>
                      </div>
                      <input
                        type={"number"}
                        id="invest-input"
                        placeholder="5000"
                        required
                        className="w-full rounded-xl border-0 bg-[#161617] p-5 pl-20 pr-36 outline-none ring-0 focus:border-0 disabled:opacity-50"
                        disabled={isAlreadyInvested}
                      />
                      {!isAlreadyInvested && (
                        <div className="absolute right-4 top-0 flex h-full items-center justify-center">
                          <Button type="button">Max</Button>
                        </div>
                      )}
                    </label>
                  </div>
                  {!isAlreadyInvested && (
                    <div className="flex w-full flex-col space-y-3 text-[#9C9C9C]">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-normal">
                          Your current wallet balance
                        </div>
                        <div>
                          {USDollar.format(
                            Number((Math.random() * 10001).toFixed()) + 1
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-normal">
                          Balance remaining after this investment
                        </div>
                        <div>
                          {USDollar.format(
                            Number((Math.random() * 10001).toFixed()) + 1
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  {isAlreadyInvested && (
                    <div className="mt-6 flex w-full  flex-col space-y-4 rounded-xl bg-[#161617] p-6 shadow-xl">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-normal text-[#9C9C9C]">
                          Exit Amount
                        </div>
                        <div>
                          {USDollar.format(
                            Number((Math.random() * 10001).toFixed()) + 1
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="text-sm font-normal text-[#9C9C9C]">
                            Kunji Commission’s Fee
                          </div>
                          <div>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div>
                                    <BsInfoCircleFill className="h-4 w-4 text-gray-400" />
                                    <span className="sr-only">Info</span>
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent className="max-w-[250px] border-none bg-black">
                                  <p className="text-center text-xs font-normal text-white">
                                    Kunji charges 30% of the profit booked by
                                    you as commission
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                        <div>
                          -
                          {USDollar.format(
                            Number((Math.random() * 101).toFixed()) + 1
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-normal text-[#9C9C9C]">
                          Estimated GAS
                        </div>
                        <div>
                          -
                          {USDollar.format(
                            Number((Math.random() * 101).toFixed()) + 1
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-t-[0.5px] border-[#9C9C9C] pt-4 font-semibold">
                        <div className="text-sm font-normal">
                          Final Receivable Amount
                        </div>
                        <div className="">
                          {USDollar.format(
                            Number((Math.random() * 10001).toFixed()) + 1
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex h-full w-full items-end pb-10">
                    {isAlreadyInvested ? (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            className="w-full bg-[#E2726E] p-6 text-lg hover:bg-red-500"
                            type="submit"
                          >
                            Withdraw
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent
                          className={cn(
                            "bg-[#161617] text-white sm:rounded-3xl lg:right-20",
                            sora.className
                          )}
                        >
                          <AlertDialogHeader>
                            <AlertDialogTitle className="mb-[18px] text-center text-white">
                              Exit Strategy
                            </AlertDialogTitle>
                            <AlertDialogDescription className="flex flex-col space-y-[9px] text-center text-[#9C9C9C]">
                              <p>
                                You’re about to exit Top Cap Digital Asset
                                Strategy
                              </p>{" "}
                              <p>Are you sure you want to exit?</p>
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter className="mt-2 flex w-full space-x-2 sm:justify-center">
                            <AlertDialogPrimitive.Action>
                              <SheetTrigger asChild={false}>
                                <Button className="rounded-full px-12 text-lg">
                                  Yes
                                </Button>
                              </SheetTrigger>
                            </AlertDialogPrimitive.Action>
                            <AlertDialogPrimitive.Cancel>
                              <Button className="rounded-full bg-red-400 px-12 text-lg hover:bg-red-500">
                                No
                              </Button>
                            </AlertDialogPrimitive.Cancel>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    ) : (
                      <Button
                        className="w-full p-6 text-lg"
                        type="submit"
                        onClick={metamaskPopup}
                      >
                        Invest $500.00
                      </Button>
                    )}
                  </div>
                </form>
              )}
            </SheetContent>
          </Sheet>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild onClick={(e) => e.preventDefault()}>
            <div>
              <button className="transition-all hover:scale-105 active:scale-95">
                <BsThreeDots className="h-8 w-8" />
              </button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => router.push("/strategy/1")}>
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">
              Exit Strategy
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
