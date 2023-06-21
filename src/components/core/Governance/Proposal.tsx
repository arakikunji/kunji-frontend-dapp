import { BsDot } from "react-icons/bs";
import { MdOutlineUnfoldMore } from "react-icons/md";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Proposal = () => {
  return (
    <Link
      href={`/governance/proposal/2`}
      className="flex w-full cursor-pointer items-center justify-between border-b-[0.5px] border-[#9C9C9C] py-6 last:border-none hover:bg-white/5"
    >
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-8 text-lg font-light leading-5 text-white">
          <div>Gauntlet</div>
          <div>
            <MdOutlineUnfoldMore className="h-7 w-7 rotate-90" />
          </div>
          <div>Kunji Renewal</div>
        </div>
        <div className="flex items-center space-x-8">
          <Button className="bg-gradient-custom-90.76deg pl-0">
            <BsDot className="mr-2 h-10 w-10 text-green-400" /> Executed
          </Button>
          <div className="text-sm font-light leading-4 text-[#9C9C9C]">
            Executed on December 2022
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <div>
          <div className="mb-2 flex w-full justify-between text-xs font-light">
            <div className=" leading-[18px]">for 846,351 KNT</div>
            <div className="text-[#9c9c9c]">77.68%</div>
          </div>
          <div>
            <Progress value={77.68} className="h-2 w-[225px]" />
          </div>
        </div>
        <div>
          <div className="mb-2 flex w-full justify-between text-xs font-light">
            <div className=" leading-[18px]">Againts 256,049 KNT</div>
            <div className="text-[#9c9c9c]">23.22%</div>
          </div>
          <div>
            <ProgressPrimitive.Root
              className="relative h-2 w-[225px] overflow-hidden rounded-full bg-[#2F2D2D]"
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
      </div>
    </Link>
  );
};

export default Proposal;
