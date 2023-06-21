export interface ITotalEarnings {
  token_reward: string;
  revenue_reward: number;
}

export const TotalEarningCard = (earning_rewards: {
  earning_reward_props: ITotalEarnings;
}) => {
  return (
    <div className="rounded-lg border-2 p-4">
      <p className="text-center">Total Referral Earnings</p>
      <div className="flex items-center justify-around">
        <p>{earning_rewards.earning_reward_props.token_reward}</p>
        <p>{earning_rewards.earning_reward_props.revenue_reward}</p>
      </div>
    </div>
  );
};
