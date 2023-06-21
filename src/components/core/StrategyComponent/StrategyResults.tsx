import { inter } from "@/pages/_app";
import { cn } from "@/utils/cn";

export const StrategyResults = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex h-full  w-full flex-col items-center justify-center space-y-6 text-white",
        inter.className,
        className
      )}
    >
      <div className="flex h-full max-h-[97px] w-full justify-around rounded-lg bg-[#141722] py-6 px-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-xs">Return</p>
          <p className="text-yellow-400">43.08%</p>
        </div>
        <div className="flex w-1/3 flex-col items-center justify-center gap-2 border-[1px] border-t-0 border-b-0 border-l-[#888686] border-r-[#888686]">
          <p className="text-xs">Risk</p>
          <p className="text-[#FFC529]">43.08%</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-xs">Std. Deviation</p>
          <p className="text-[#FFC529]">43.08%</p>
        </div>
      </div>
      <div className="flex h-full max-h-[97px] w-full justify-around rounded-lg bg-[#141722;] py-6 px-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-xs">Alpha</p>
          <p className="text-[#FFC529]">43.08%</p>
        </div>
        <div className="flex w-1/3 flex-col items-center justify-center gap-2 border-[1px] border-t-0 border-b-0 border-l-[#888686] border-r-[#888686]">
          <p className="text-xs">Sharpe Ratio</p>
          <p className="text-[#FFC529]">43.08%</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-xs">Max Drawdown</p>
          <p className="text-[#FFC529]">43.08%</p>
        </div>
      </div>
    </div>
  );
};
