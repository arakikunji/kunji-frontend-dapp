import { NextPage } from "next";
import {
  MileStoneProps,
  MilestoneCard,
} from "../../components/core/ReferralComponents/MilestoneCard";
import {
  ITotalEarnings,
  TotalEarningCard,
} from "../../components/core/ReferralComponents/TotalEarningCard";
import MainLayout from "@/layouts/main-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CopyIcon from "./copy-icon";
import Thumbsup from "./thumbs-up";
import LinkIcon from "./link-icon";
import BoxIcon from "./box-icon";
import WalletIcon from "./wallet-icon";
import arrow1 from "@/assets/svg/smooth-arrow-1.svg";
import arrow2 from "@/assets/svg/smooth-arrow-2.svg";
import { toast } from "sonner";

const Referral: NextPage = () => {
  const milestone_props: Array<MileStoneProps> = [
    {
      milestone_name: "Milestone 1",
      milestone_description: "Refer & get your friends to invest $10k in total",
      amount: 10000,
      pct_completed: 50,
      token_reward: "KNT 10",
      revenue_reward: 200,
    },
    {
      milestone_name: "Milestone 2",
      milestone_description: "Refer & get your friends to invest $10k in total",
      amount: 25000,
      pct_completed: 60,
      token_reward: "KNT 10",
      revenue_reward: 200,
    },
    {
      milestone_name: "Milestone 3",
      milestone_description: "Refer & get your friends to invest $10k in total",
      amount: 50000,
      pct_completed: 60,
      token_reward: "KNT 10",
      revenue_reward: 200,
    },
  ];

  const earning_reward_props: ITotalEarnings = {
    revenue_reward: 200,
    token_reward: "KNT 10",
  };

  return (
    <MainLayout>
      <div className="mb-10 w-full text-white">
        <div className="mt-8 flex items-center justify-between">
          <p className="text-2xl">Referral</p>
          <div className="rounded-xl bg-gradient-to-br from-[#535151]/20 to-[#3A3A3A]/20 p-4 px-9">
            <p className="text-center text-xs font-light">
              Total Referral Earnings
            </p>
            <div className="mt-[15px] flex items-center justify-around space-x-[42px] text-lg font-semibold">
              <p>KNT 100</p>
              <p>$ 3,058</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex w-full">
          <Tabs defaultValue="milestones" className="w-3/4">
            <TabsList className="flex w-full justify-start space-x-24 rounded-none border-b-[0.5px] border-[#9C9C9C] pb-4">
              <TabsTrigger value="milestones">Milestones</TabsTrigger>
              <TabsTrigger value="learn-more">Learn More</TabsTrigger>
            </TabsList>
            <TabsContent value="milestones" className="w-full">
              <div className="mt-8 flex w-full">
                <div className="flex w-full flex-col space-y-8">
                  {milestone_props.map((milestones: MileStoneProps) => (
                    <MilestoneCard milestones={milestones} />
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="learn-more">nothing here</TabsContent>
          </Tabs>
          <div className="mt-[122px] flex w-1/4 flex-col space-y-5">
            <div className="w-full rounded bg-gradient-custom-90.76deg p-8">
              <p className="text-lg font-light">Your Unique Referral link</p>
              <div className="flex items-center justify-between">
                <p className="mt-2 text-xl font-semibold">
                  kunji.io/ref_pratik123
                </p>
                <div>
                  <Button
                    variant={"ghost"}
                    onClick={() => {
                      navigator.clipboard
                        .writeText("kunji.io/ref_pratik123")
                        .then(() => {
                          toast.success("copied");
                        });
                    }}
                  >
                    <CopyIcon />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col space-y-4 rounded-3xl bg-gradient-custom-90.76deg p-8 pb-28 shadow-xl">
              <div className="flex items-center justify-between border-b-[0.5px] border-[#9C9C9C] pb-4">
                <div className="max-w-[228px] text-2xl font-bold text-white">
                  Refer your friends and earn
                </div>
                <div>
                  <Thumbsup />
                </div>
              </div>
              <div>
                <div className="max-w-[228px] text-lg font-bold">
                  How does refer and earn work?
                </div>
                <div className="relative flex flex-col space-y-10">
                  <div className="absolute top-[76px] -left-3">
                    <Image src={arrow1} alt="" width={77} height={10} />
                  </div>
                  <div className="absolute top-[140px] -left-6">
                    <Image src={arrow2} alt="" width={77} height={10} />
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="z-10 rounded-full bg-gradient-to-br from-[#535151]/20 to-[#3A3A3A]/20 p-4 shadow-xl">
                      <LinkIcon />
                    </div>
                    <div className="max-w-[224px] text-[15px] font-light text-[#9C9C9C]">
                      Refer your friend with your unique referral link
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="z-10 rounded-full bg-gradient-to-br from-[#535151]/10 to-[#3A3A3A]/20 p-4 shadow-xl">
                      <BoxIcon />
                    </div>
                    <div className="max-w-[224px] text-[15px] font-light text-[#9C9C9C]">
                      Your friend signs up & invests in Kunji with your unique
                      referral link
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="z-10 rounded-full bg-gradient-to-br from-[#535151]/10 to-[#3A3A3A]/20 p-4 shadow-xl">
                      <WalletIcon />
                    </div>
                    <div className="max-w-[224px] text-[15px] font-light text-[#9C9C9C]">
                      You earn rewards as your friends complete investment
                      milstone
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Referral;
