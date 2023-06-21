import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import MainLayout from "@/layouts/main-layout";
import Link from "next/link";
import React from "react";
import { BsArrowLeft, BsDot, BsDownload, BsTwitter } from "react-icons/bs";
import { HiChevronRight, HiOutlineExternalLink } from "react-icons/hi";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProposalOverview = () => {
  return (
    <MainLayout>
      <div className="mx-auto mt-10 mb-20 h-full w-full max-w-[90%]">
        <div>
          <Link
            href={"/governance"}
            className="flex items-center space-x-4 text-lg"
          >
            <BsArrowLeft className="text-[#9C9C9C]" />
            <p>Go Back</p>
          </Link>
        </div>
        <div className="mx-auto mt-8 flex w-full space-x-8">
          <div className="mb-4 flex h-full w-5/6 flex-col border-[#9C9C9C] bg-[#121212] px-10 pb-10 shadow-2xl">
            <div className="border-b-[0.5px] py-8 pb-8 text-2xl font-bold leading-8">
              Proposal Overview
            </div>
            <div>
              <div>
                <div className="py-8 pb-8 text-lg font-bold">
                  Kunji v2 ETH Interest Rate Curve Update
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center space-x-8">
                    <Button className="bg-gradient-custom-90.76deg pl-0">
                      <BsDot className="mr-2 h-10 w-10 text-green-400" />{" "}
                      Executed
                    </Button>
                    <div className="text-sm font-light leading-4 text-[#9C9C9C]">
                      Executed on December 2022
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <Button
                      variant={"ghost"}
                      className="flex items-center space-x-4 text-[#9C9C9C]"
                    >
                      <div>
                        <BsDownload />
                      </div>
                      <div className="text-xs font-light ">Raw-lfps</div>
                    </Button>
                    <Button
                      variant={"ghost"}
                      className="flex items-center space-x-4 text-[#9C9C9C]"
                    >
                      <div>
                        <BsTwitter />
                      </div>
                      <div className="text-xs font-light">Share on Twitter</div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="my-8 text-xs font-light text-[#9C9C9C]">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Adipiscing vitae
                  imperdiet commodo justo egestas dignissim dolor porta nec.
                  Odio vitae faucibus nunc nunc at in. Laoreet dictum
                  condimentum elementum tristique. Lacus pulvinar mattis nibh
                  elit rutrum scelerisque orci. Viverra maecenas quam nulla
                  suspendisse at sapien leo. Bibendum tincidunt non et sit nunc
                  eget. Adipiscing mattis volutpat magna purus non id. Sagittis
                  volutpat ac sit fusce iaculis. Ipsum lorem eget nunc placerat.
                  Lacus placerat consequat vitae neque sit. Ut nisl eleifend
                  molestie sed. Ipsum tellus nisl tellus sed quam sodales morbi.
                  Commodo ac aliquet eros mauris ac proin. Mauris nibh ornare
                  lacus pulvinar vitae mattis aliquam sed. Quisque sed elit
                  risus et est sagittis. Ipsum venenatis dignissim sed
                  ullamcorper aliquam feugiat ornare. Venenatis nibh in velit
                  molestie ac. Massa odio massa ornare bibendum. Cras pulvinar
                  scelerisque dolor dui adipiscing nulla tincidunt elit. Nec
                  feugiat et venenatis turpis cras massa enim. Eu consectetur
                  rhoncus molestie elit ut. At leo at faucibus dictum diam
                  pretium ut.
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Adipiscing vitae
                  imperdiet commodo justo egestas dignissim dolor porta nec.
                  Odio vitae faucibus nunc nunc at in. Laoreet dictum
                  condimentum elementum tristique. Lacus pulvinar mattis nibh
                  elit rutrum scelerisque orci. Viverra maecenas quam nulla
                  suspendisse at sapien leo. Bibendum tincidunt non et sit nunc
                  eget. Adipiscing mattis volutpat magna purus non id. Sagittis
                  volutpat ac sit fusce iaculis. Ipsum lorem eget nunc placerat.
                  Lacus placerat consequat vitae neque sit. Ut nisl eleifend
                  molestie sed. Ipsum tellus nisl tellus sed quam sodales morbi.
                  Commodo ac aliquet eros mauris ac proin. Mauris nibh ornare
                  lacus pulvinar vitae mattis aliquam sed. Quisque sed elit
                  risus et est sagittis. Ipsum venenatis dignissim sed
                  ullamcorper aliquam feugiat ornare. Venenatis nibh in velit
                  molestie ac. Massa odio massa ornare bibendum. Cras pulvinar
                  scelerisque dolor dui adipiscing nulla tincidunt elit. Nec
                  feugiat et venenatis turpis cras massa enim. Eu consectetur
                  rhoncus molestie elit ut. At leo at faucibus dictum diam
                  pretium ut.
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Adipiscing vitae
                  imperdiet commodo justo egestas dignissim dolor porta nec.
                  Odio vitae faucibus nunc nunc at in. Laoreet dictum
                  condimentum elementum tristique. Lacus pulvinar mattis nibh
                  elit rutrum scelerisque orci. Viverra maecenas quam nulla
                  suspendisse at sapien leo. Bibendum tincidunt non et sit nunc
                  eget. Adipiscing mattis volutpat magna purus non id. Sagittis
                  volutpat ac sit fusce iaculis. Ipsum lorem eget nunc placerat.
                  Lacus placerat consequat vitae neque sit. Ut nisl eleifend
                  molestie sed. Ipsum tellus nisl tellus sed quam sodales morbi.
                  Commodo ac aliquet eros mauris ac proin. Mauris nibh ornare
                  lacus pulvinar vitae mattis aliquam sed. Quisque sed elit
                  risus et est sagittis. Ipsum venenatis dignissim sed
                  ullamcorper aliquam feugiat ornare. Venenatis nibh in velit
                  molestie ac. Massa odio massa ornare bibendum. Cras pulvinar
                  scelerisque dolor dui adipiscing nulla tincidunt elit. Nec
                  feugiat et venenatis turpis cras massa enim. Eu consectetur
                  rhoncus molestie elit ut. At leo at faucibus dictum diam
                  pretium ut.
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Adipiscing vitae
                  imperdiet commodo justo egestas dignissim dolor porta nec.
                  Odio vitae faucibus nunc nunc at in. Laoreet dictum
                  condimentum elementum tristique. Lacus pulvinar mattis nibh
                  elit rutrum scelerisque orci. Viverra maecenas quam nulla
                  suspendisse at sapien leo. Bibendum tincidunt non et sit nunc
                  eget. Adipiscing mattis volutpat magna purus non id. Sagittis
                  volutpat ac sit fusce iaculis. Ipsum lorem eget nunc placerat.
                  Lacus placerat consequat vitae neque sit. Ut nisl eleifend
                  molestie sed. Ipsum tellus nisl tellus sed quam sodales morbi.
                  Commodo ac aliquet eros mauris ac proin. Mauris nibh ornare
                  lacus pulvinar vitae mattis aliquam sed. Quisque sed elit
                  risus et est sagittis. Ipsum venenatis dignissim sed
                  ullamcorper aliquam feugiat ornare. Venenatis nibh in velit
                  molestie ac. Massa odio massa ornare bibendum. Cras pulvinar
                  scelerisque dolor dui adipiscing nulla tincidunt elit. Nec
                  feugiat et venenatis turpis cras massa enim. Eu consectetur
                  rhoncus molestie elit ut. At leo at faucibus dictum diam
                  pretium ut.
                </p>
                <br />
              </div>
            </div>
          </div>
          <div className="flex h-full w-2/6 flex-col justify-center">
            <div className="flex w-full flex-col items-center justify-between  border-[#9C9C9C] bg-[#121212] px-6 py-8 pb-8 shadow-2xl">
              <div className="w-full border-b-[0.5px] pb-6 text-left text-2xl font-bold leading-8">
                Voting Results
              </div>

              <div className="mt-6 flex w-full items-center space-x-2">
                <div className="flex w-full flex-col">
                  <div className="mb-2 flex w-full justify-between text-xs font-light">
                    <div className=" leading-[18px]">FOR 846,351 KNT</div>
                    <div className="text-[#9c9c9c]">77.68%</div>
                  </div>
                  <div>
                    <ProgressPrimitive.Root
                      className="relative h-2 w-full overflow-hidden rounded-full bg-[#2F2D2D]"
                      style={{
                        transform: "translateZ(0)",
                      }}
                      value={77.68}
                    >
                      <ProgressPrimitive.Indicator
                        className="duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full bg-green-400 transition-transform"
                        style={{ transform: `translateX(-${100 - 77.68}%)` }}
                      />
                    </ProgressPrimitive.Root>
                  </div>
                </div>
                <Button variant={"ghost"} className="p-0">
                  <HiChevronRight className="h-6 w-6" />
                </Button>
              </div>

              <div className="mt-6 flex w-full items-center space-x-2">
                <div className="w-full">
                  <div className="mb-2 flex w-full justify-between text-xs font-light">
                    <div className=" leading-[18px]">Against 256,049 KNT</div>
                    <div className="text-[#9c9c9c]">23.22%</div>
                  </div>
                  <div>
                    <ProgressPrimitive.Root
                      className="relative h-2 w-full overflow-hidden rounded-full bg-[#2F2D2D]"
                      style={{
                        transform: "translateZ(0)",
                      }}
                      value={23.22}
                    >
                      <ProgressPrimitive.Indicator
                        className="duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full bg-red-400 transition-transform"
                        style={{ transform: `translateX(-${100 - 23.22}%)` }}
                      />
                    </ProgressPrimitive.Root>
                  </div>
                </div>
                <Button variant={"ghost"} className="p-0">
                  <HiChevronRight className="h-6 w-6" />
                </Button>
              </div>

              <div className="mt-6 flex w-full justify-between text-base font-light text-[#9C9C9C]">
                <div>Top 10 Addresses</div>
                <div>Votes</div>
              </div>

              <div className="relative mt-6 flex w-full flex-col space-y-4 font-light">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex w-full items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-slate-400"></div>
                      <button className="flex items-center text-white">
                        <span className="text-sm">0x4r3....NU93r</span>
                        <HiOutlineExternalLink className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                    <div className="flex items-center space-x-2 text-xs">
                      <span className="text-green-400">FOR</span>
                      <span className="text-white">97,054</span>
                    </div>
                  </div>
                ))}

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="absolute -bottom-2 w-full hover:bg-[#2054A5]">
                      View All Votes
                    </Button>
                  </DialogTrigger>
                  <DialogContent>{/* all votes */}</DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="mt-6 flex w-full flex-col items-center justify-between  border-[#9C9C9C] bg-[#121212] px-6 py-8 pb-8 shadow-2xl">
              <div className="w-full pb-6 text-left text-2xl font-bold leading-8">
                Proposal Details
              </div>
              <div className="flex w-full flex-col space-y-6">
                <div className="flex w-full items-center justify-between text-white">
                  <div className="text-left">
                    <div className="text-lg">Created</div>
                    <div className="text-[10px] text-[#9C9C9C]">Block</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs">10 Jan ‘23, 01:46 UTC +05:30</div>
                    <div className="text-[10px] text-[#9C9C9C]">16271573</div>
                  </div>
                </div>

                <div className="flex w-full flex-col space-y-6">
                  <div className="flex w-full items-center justify-between text-white">
                    <div className="text-left">
                      <div className="text-lg">Started</div>
                      <div className="text-[10px] text-[#9C9C9C]">Block</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs">
                        10 Jan ‘23, 01:46 UTC +05:30
                      </div>
                      <div className="text-[10px] text-[#9C9C9C]">16271573</div>
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-col space-y-6">
                  <div className="flex w-full items-center justify-between text-white">
                    <div className="text-left">
                      <div className="text-lg">Ended</div>
                      <div className="text-[10px] text-[#9C9C9C]">Block</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs">
                        10 Jan ‘23, 01:46 UTC +05:30
                      </div>
                      <div className="text-[10px] text-[#9C9C9C]">16271573</div>
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-col space-y-6">
                  <div className="flex w-full items-center justify-between text-white">
                    <div className="text-left">
                      <div className="text-lg">Executed</div>
                      <div className="text-[10px] text-[#9C9C9C]">Block</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs">
                        10 Jan ‘23, 01:46 UTC +05:30
                      </div>
                      <div className="text-[10px] text-[#9C9C9C]">16271573</div>
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-col space-y-6">
                  <div className="flex w-full items-center justify-between text-white">
                    <div className="text-left">
                      <div className="text-lg">Author</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs">Ben Jones</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex w-full space-x-4">
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="whitespace-nowrap rounded bg-neutral-600/50 text-[10px]"
                >
                  Forum Discussion{" "}
                  <HiOutlineExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="whitespace-nowrap rounded bg-neutral-600/50 text-[10px]"
                >
                  Seatbelt Report{" "}
                  <HiOutlineExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProposalOverview;
