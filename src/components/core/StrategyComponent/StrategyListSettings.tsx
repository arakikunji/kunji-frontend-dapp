import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const StrategyListSettings = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onChange = (checked: CheckedState) => {
    console.log(`checked = ${checked}`);
  };
  return (
    <div className="mt-8 flex items-center justify-between">
      <p className="text-2xl font-semibold tracking-[0.3px]">
        Explore Strategies
      </p>
      <div className="flex gap-8">
        <div className="flex items-center gap-1 text-white">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" onCheckedChange={onChange} />
            <label
              htmlFor="terms"
              className="select-none text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Show my invest strategy
            </label>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-sm font-medium tracking-wide">Sort by:</p>
          <Select>
            <SelectTrigger className="w-[400px] border-none bg-[#161617] text-xs font-light tracking-wide">
              <SelectValue placeholder="Asset Value" className="" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Complete Portfolio</SelectItem>
              <SelectItem value="strategy-1">
                Arbitrage opprtunities and Balances Strategy
              </SelectItem>
              <SelectItem value="strategy-2">
                Top Cap Digital Assets Strategy
              </SelectItem>
              <SelectItem value="strategy-3">
                Alpha Blue Chip Focused Strategy
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
