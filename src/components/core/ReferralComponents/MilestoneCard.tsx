import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export interface MileStoneProps {
  milestone_name: string;
  milestone_description: string;
  amount: number;
  pct_completed: number;
  token_reward: string;
  revenue_reward: number;
}

export const MilestoneCard = (props: { milestones: MileStoneProps }) => {
  return (
    <div className="w-full rounded-3xl bg-gradient-custom-90.76deg p-[30px]">
      <p className="text-2xl font-bold">{props.milestones.milestone_name}</p>
      <p className="mt-4 text-sm font-semibold">
        {props.milestones.milestone_description}
      </p>
      <div className="flex items-center justify-between">
        <div className="mt-4 w-2/3">
          <p className="text-2xl font-bold">${props.milestones.amount}</p>
          <div className="flex w-full items-center space-x-2 text-white">
            <Progress
              value={props.milestones.pct_completed}
              className="h-1 w-72"
            />
            <p className="text-xs font-light text-[#FFC529]">$5000</p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-10 text-center">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold">Token Reward</p>
            <p className="text-lg font-semibold">
              {props.milestones.token_reward}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold">Revenue Reward</p>
            <p className="text-lg font-semibold">
              ${props.milestones.revenue_reward}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Button onClick={() => {}}>Claim Now</Button>
      </div>
    </div>
  );
};
