import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export const StrategyAbout = () => {
  const router = useRouter();
  return (
    <div>
      <p className="max-w-4xl text-lg font-light leading-6 text-[#9C9C9C]">
        The Arbitrage opportunities and Balanced Strategy seeks to generate
        optimal returns for the investors by capturing the arbitrage potential
        created due to price anomalies across spot and derivatives markets
        without taking any directional exposure to the Digital assets market as
        a whole. DAM thrives to achieve mostly a market neutral position while
        taking full advantage of the price inefficiencies across different
        market segments. Assets for this strategy : Bitcoin , Ethereum , USDC ,
        USDT and Other liquid assets
      </p>
      <div className="mt-16 w-36">
        <Button onClick={() => router.push("/strategy/1")}>Learn More</Button>
      </div>
    </div>
  );
};
