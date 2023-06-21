import Image from "next/image";
import Token from "@/assets/svg/Token.svg";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export interface IRewardCardProps {
  reward_type: string;
  reward_description: string;
  claimable_token_reward: number;
  claimable_token: string;
  claimable_revenue_reward?: number;
  reward_comment: string;
  reward_money?: string;
}

export const RewardCard = (props: { rewardCardProps: IRewardCardProps }) => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const items = [
    {
      key: "1",
      label: "Claimable",
      children: (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Image alt="token" src={Token} className="h-[48px] w-[48px]" />
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold">
                {props.rewardCardProps.claimable_token_reward}{" "}
                {props.rewardCardProps.claimable_token}
              </p>
              {props.rewardCardProps?.reward_money && (
                <p className="mt-2 text-xs font-semibold">
                  {props.rewardCardProps?.reward_money}{" "}
                </p>
              )}
              <p className="mt-2 text-xs font-light">
                {props.rewardCardProps.reward_description}
              </p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center">
            {props.rewardCardProps.reward_type === "Liquidity Provider" ? (
              <div>
                <Progress className="h-2 w-48" value={progress} />
                <p className="mt-3 w-full text-center text-xs font-light leading-[18px]">
                  5 days 23 hours
                </p>
              </div>
            ) : (
              <Button>Claim Now</Button>
            )}
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Total Rewards",
      children: <></>,
    },
  ];

  return (
    <div className="w-5/6 rounded-3xl bg-gradient-custom-90.76deg p-8">
      <p className="text-2xl font-semibold">
        {props.rewardCardProps.reward_type}
      </p>
      <div className="mt-3 flex space-x-2 text-sm font-semibold">
        <div>{props.rewardCardProps.reward_description} </div>
        <div>
          <Link
            href={"#"}
            className="text-[#1F54A5] underline decoration-[#1F54A5]"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <Tabs className="w-full" defaultValue={items[0]?.label}>
          <TabsList className="flex w-full justify-start rounded-none border-b-[0.5px] border-[#9C9C9C]">
            {items.map((item) => (
              <TabsTrigger value={item.label} key={item.key} className="pb-4">
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
    </div>
  );
};
