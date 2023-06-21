import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/main-layout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Proposal from "@/components/core/Governance/Proposal";

const GovernancePage = () => {
  return (
    <MainLayout>
      <div className="mb-16 h-full w-full">
        <h1 className="mt-8 text-2xl font-bold leading-8">Kunji Governance</h1>
        <p className="mt-6 max-w-[660px] text-lg font-light text-[#9C9C9C]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="mt-6 flex w-full items-center space-x-4">
          <Button className="bg-gradient-custom-90.76deg" size={"lg"}>
            Snapshot
          </Button>
          <Button className="bg-gradient-custom-90.76deg" size={"lg"}>
            Forum
          </Button>
          <Button className="bg-gradient-custom-90.76deg" size={"lg"}>
            Docs
          </Button>
        </div>
        <div className="mx-auto mt-8 w-full max-w-[90%] bg-[#121212] px-10 py-8 shadow-2xl">
          <div className="flex w-full items-center justify-between border-b-[0.5px] border-[#9C9C9C] pb-8">
            <div className="text-2xl font-bold leading-8">Proposal</div>
            <div>
              <Select>
                <SelectTrigger className="w-[400px] border-none bg-[#161617] text-xs font-light tracking-wide">
                  <SelectValue placeholder="All Proposals" className="" />
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
          <div className="flex w-full flex-col items-center justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Proposal key={i} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default GovernancePage;
