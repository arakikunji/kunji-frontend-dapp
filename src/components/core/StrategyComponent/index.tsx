import { StrategyDetails } from "./StrategyDetails";
import { StrategyOptions } from "./StrategyOptions";
import { StrategyResults } from "./StrategyResults";

export const StrategyComponent = () => {
  return (
    <div className="mt-8 flex h-[600px] items-start justify-center rounded-3xl bg-gradient-custom-90.76deg p-10">
      <div className="w-2/3">
        <StrategyDetails />
      </div>
      <div className="flex h-full w-1/3 flex-col">
        <StrategyOptions />
        <StrategyResults />
      </div>
    </div>
  );
};
