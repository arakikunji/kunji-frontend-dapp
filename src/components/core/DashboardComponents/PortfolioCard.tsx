import { cn } from "@/utils/cn";
import { USDollar } from "@/utils/us-dollar";

export interface IPortfolioCard {
  portfolio_value: number;
  amount_invested: number;
  pnl: number;
}

export const PortfolioCard = (props: {
  portfolio_card_props: IPortfolioCard;
}) => {
  return (
    <div className="flex w-full flex-col space-y-8 rounded-xl bg-gradient-custom-90.76deg p-8">
      <div className="flex flex-col justify-center space-y-1">
        <p className="text-xs font-light tracking-wide ">Portfolio Value</p>
        <p className={cn("text-lg font-semibold")}>
          {USDollar.format(props.portfolio_card_props.portfolio_value)}
        </p>
      </div>
      <div className="flex flex-col justify-center space-y-1">
        <p className="text-xs font-light tracking-wide ">Amount Invested</p>
        <p className="text-lg font-semibold">
          {USDollar.format(props.portfolio_card_props.amount_invested)}
        </p>
      </div>
      <div className="flex flex-col justify-center space-y-1">
        <p className="text-xs font-light tracking-wide ">P&L</p>
        <p className="text-lg font-semibold">
          {USDollar.format(props.portfolio_card_props.pnl)} (
          <span className="text-green-400">+385.3%</span>)
        </p>
      </div>
    </div>
  );
};
