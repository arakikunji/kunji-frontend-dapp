import MainLayout from "@/layouts/main-layout";
import { NextPage } from "next";
import {
  IRewardCardProps,
  RewardCard,
} from "../../components/core/RewardComponents/RewardCard";

const Rewards: NextPage = () => {
  const rewardCardPropsArr: IRewardCardProps[] = [
    {
      reward_type: "Staking",
      reward_description: "Earn KNT by staking & participating in governance",
      claimable_token_reward: 250,
      claimable_token: "KNT",
      reward_comment: "Rewards earned lorem ipsum",
    },
    {
      reward_type: "Referral",
      reward_description: "Earn KNT by referring your friends.",
      claimable_token_reward: 250,
      claimable_token: "KNT",
      reward_money: "$300",
      reward_comment: "12 people signed up from your referral link",
    },
    {
      reward_type: "Liquidity Provider",
      reward_description: "Earn KNT by liquidity provider lorem ipsum.",
      claimable_token_reward: 250,
      claimable_token: "KNT",
      reward_comment: "12 people signed up from your referral link",
    },
  ];

  return (
    <MainLayout>
      <div className="w-full text-white">
        <p className="mt-8 text-2xl font-semibold">Rewards</p>
        <div className="mt-16 flex flex-col items-center space-y-8">
          {rewardCardPropsArr.map((rewardCardProps) => (
            <RewardCard rewardCardProps={rewardCardProps} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Rewards;
