import MainLayout from "@/layouts/main-layout";
import { NextPage } from "next";
import { StrategyComponent } from "@/components/core/StrategyComponent";
import { StrategyListSettings } from "@/components/core/StrategyComponent/StrategyListSettings";

const Strategy: NextPage = () => {
  return (
    <MainLayout>
      <div className="relative mb-6 w-full">
        <StrategyListSettings />
        {Array.from({ length: 3 }).map((_, i) => (
          <StrategyComponent key={i} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Strategy;
