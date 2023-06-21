import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";
import StrategyInformationTab from "./StrategyInformationTab";

const tabTitles = [
  {
    title: "Objective",
  },
  {
    title: "Strategy",
  },
  {
    title: "Guidelines & Restrictions",
  },
  {
    title: "Risks",
  },
  {
    title: "Disclaimers",
  },
  {
    title: "Commercial Terms",
  },
];

const tabDetails: Record<string, ReactNode> = {
  Objective: (
    <p className="text-lg font-light leading-6 text-[#9C9C9C]">
      The objective of this strategy is to seek optimal returns for investors
      through arbitrage opportunities due to price anomalies across different
      markets. DAM seeks to capitalize on opportunities created by price
      inefficiencies without taking any directional exposure to the digital
      assets market as a whole.The price inefficiencies across different market
      segments of Digital Assets present an attractive arbitrage opportunity and
      Digital Asset Manager (DAM) running this strategy will seek to capture
      these inefficiencies by taking non-directional trading positions. DAM will
      mostly take balanced positions to capture any Arbitrage opportunity in
      Digital Assets with deep liquidity. DAM will utilize complex trading
      strategies to generate optimal returns for the strategy subscribors
      through arbitrage. DAM may employ multiple trading strategies to ensure
      market-neutral exposure in order to capture price differentials.
    </p>
  ),
  Strategy: (
    <div className="flex flex-col space-y-4">
      <p className="text-lg font-light leading-6 text-[#9C9C9C]">
        DAM thrives to achieve its objective by conducting a market analysis of
        Digital assets trading in the Spot market and studying the funding rates
        of underlying asset trading in the derivatives market and taking a
        non-directional trade to capture arbitrage opportunities. Arbitrage
        involves simultaneous buying and selling of the same underlying asset or
        its derivatives in different market segments to generate risk-free
        returns. DAM will evaluate various parameters like liquidity,
        volatility, funding rate etc before taking any non-directional position
        for arbitrage.
      </p>
      <p className="text-lg font-bold leading-6 text-white">Outlook</p>
      <p className="text-lg font-light leading-6 text-[#9C9C9C]">
        Arbitrage opportunities are available irrespective of market conditions.
        Whether it’s a bull market or bear market, price anomalies always exist
        in the underlying asset and its derivatives. Due to a mismatch in spot
        and futures prices caused by bullish or bearish sentiments, an arbitrage
        opportunity is always available and the DAM seeks to capitalize on this.
        Arbitrage strategies aim to provide optimal returns during bull and bear
        market conditions as well as in volatile phases. With the growth in the
        crypto market and improvement in liquidity conditions of digital assets,
        arbitrage trading is going to emerge as a key profit-generating
        strategy.
      </p>
    </div>
  ),
  "Guidelines & Restrictions": (
    <p className="text-lg font-light leading-6 text-[#9C9C9C]">
      Apart from the various methods, the strategy may lay down a few investment
      guidelines stating that a majority of the total assets (USD) may remain
      reserved in USDC, or may be evenly spread across primary digital assets
      like Bitcoin (BTC) and Ethereum(ETH) and a minor share in other liquid
      assets etc. Additionally, DAM will seek trade diversification to ensure
      that the investment positions are market neutral. Another critical
      guideline set by the DAM prevents asset concentration in a single
      blockchain layer or single protocol.
    </p>
  ),
  Risks: (
    <p className="text-lg font-light leading-6 text-[#9C9C9C]">
      Although the DAM will thrive to employ expert techniques to create optimum
      arbitrage strategies, it does not guarantee your investment, any return on
      investment, assurances of profit and you could incur a loss with this
      investment strategy. Before you invest, consider your investment
      objectives, finances, risk tolerance and other investment factors. Note
      that the asset prices and total returns may fluctuate according to market
      and regulatory conditions. Investors are advised to contemplate risks like
      liquidity risk, trading risk, settlement risk and stable coin risk while
      evaluating the investment advantages of this strategy. From a trading
      perspective even though the underlying investment positions are
      non-directional, DAM may not be able to liquidate the investment at its
      intended time, at a profitable price, due to volatile market conditions or
      regulatory risks, and this might result in significant losses. Note that
      this list does not include all the possible risks involved in the
      Arbitrage opportunities Balanced Strategy.
    </p>
  ),
  Disclaimers: (
    <p className="text-lg font-light leading-6 text-[#9C9C9C]">
      \na) \nINVESTMENTS IN DIGITAL ASSETS ARE HIGHLY SPECULATIVE. THE INVESTOR
      IS SOLELY RESPONSIBLE FOR EVALUATING THE MERITS AND RISKS ASSOCIATED WITH
      THE USE OF ANY INFORMATION, MATERIALS, CONTENT, USER CONTENT, OR
      THIRD-PARTY CONTENT PROVIDED THROUGH THE SERVICE BEFORE MAKING ANY
      DECISIONS BASED ON SUCH CONTENT. AS A USER OF THE SERVICE, THE IS
      RESPONSIBLE FOR DETERMINING WHETHER ANY CONTENT, PRODUCT, SERVICE, DIGITAL
      ASSET, SECURITY, OR OTHER FINANCIAL INSTRUMENT MENTIONED ON KUNJI, SERVICE
      IS SUITABLE FOR THE INVESTORS FINANCIAL PURPOSES. PAST PERFORMANCE DATA,
      PERFORMANCE GRAPHS OR OTHER HISTORICAL INFORMATION ARE NOT A GUARANTEE OF
      FUTURE PERFORMANCE AND SHOULD NOT BE CONSTRUED AS INDICATIVE OF FUTURE
      RESULTS. THE INVESTOR SHOULD CONSIDER THE INVESTORS INDIVIDUAL INVESTMENT
      OBJECTIVES AND RISK TOLERANCE BEFORE INVESTING. THE CONTENT PRESENTED ON
      THE SERVICE IS NOT INTENDED TO PROVIDE THE INVESTOR OR ANYONE ELSE WITH
      INVESTMENT, LEGAL, TAX, INSURANCE OR ANY OTHER KIND OF PROFESSIONAL
      ADVICE. THE INVESTOR SHOULD CONSULT WITH A FINANCIAL, TAX OR LEGAL
      PROFESSIONAL FOR ADVICE REGARDING THE SPECIFIC FINANCIAL, TAX OR LEGAL
      POSITIONS AND CIRCUMSTANCES. <br /> THE INVESTOR ALSO ACKNOWLEDGES AND
      AGREE THAT THE COMPANY AND THE INVESTOR’S ABILITY TO USE THE SERVICES MAY
      BE DETRIMENTALLY IMPACTED BY REGULATORY ACTION OR CHANGES IN REGULATIONS
      APPLICABLE TO DIGITAL ASSETS. YOU AGREE THAT WE MAY DISCLOSE YOUR PERSONAL
      AND ACCOUNT INFORMATION IF WE BELIEVE THAT IT IS REASONABLY NECESSARY TO
      COMPLY WITH A LAW, REGULATION, LEGAL PROCESS, OR GOVERNMENTAL REQUEST.
      \nc) \nKUNJI AND ALL COMPANY MATERIALS AND ALL CONTENT AVAILABLE THROUGH
      THE SERVICES ARE PROVIDED “AS IS” AND ON AN “AS AVAILABLE” BASIS, WITHOUT
      WARRANTY OR CONDITION OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE
      EXTENT ALLOWED BY LAW, THE COMPANY DISCLAIMS ALL WARRANTIES OF ANY KIND,
      WHETHER EXPRESS OR IMPLIED, RELATING TO KUNJI AND ALL COMPANY MATERIALS
      AND CONTENT AND SERVICES MADE AVAILABLE THROUGH KUNJI, INCLUDING: (I) ANY
      IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
      TITLE, QUIET ENJOYMENT, OR NON-INFRINGEMENT; AND (II) ANY WARRANTY ARISING
      OUT OF COURSE OF DEALING, USAGE, OR TRADE. \nd) \nCOMPANY DOES NOT WARRANT
      THAT KUNJI OR ANY PORTION OF THE SERVICES, OR ANY COMPANY MATERIALS OR
      CONTENT OFFERED THROUGH KUNJI, WILL BE UNINTERRUPTED, SECURE, OR FREE OF
      ERRORS, VIRUSES, OR OTHER HARMFUL COMPONENTS, AND DOES NOT WARRANT THAT
      ANY OF THOSE ISSUES WILL BE CORRECTED. YOU ASSUME ALL RISK FOR ANY DAMAGE
      THAT MAY RESULT FROM YOUR ACCESS TO, USE OR MISUSE OF, OR INABILITY TO USE
      KUNJI OR SERVICES, YOUR DEALINGS WITH ANY PARTNER OR OTHER USER, AND ANY
      COMPANY MATERIALS OR ALL CONTENT MADE AVAILABLE THROUGH KUNJI. YOU
      UNDERSTAND AND AGREE THAT YOU USE KUNJI, AND ACCESS THE SERVICES,
      <br />
      DOWNLOAD, OR OTHERWISE OBTAIN COMPANY MATERIALS OR CONTENT THROUGH KUNJI
      AND ANY ASSOCIATED SITES, AT YOUR OWN DISCRETION AND RISK, AND THAT YOU
      ARE SOLELY RESPONSIBLE FOR ANY DAMAGE, INCLUDING TO YOUR COMPUTER SYSTEM
      OR MOBILE DEVICE USED IN CONNECTION WITH KUNJI, OR THE LOSS OF DATA THAT
      RESULTS FROM THE USE OF KUNJI OR THE DOWNLOAD OR USE OF THE MATERIAL OR
      CONTENT OR SERVICES. \ne) \nSOME JURISDICTIONS MAY PROHIBIT A DISCLAIMER
      OF WARRANTIES AND YOU MAY HAVE OTHER RIGHTS THAT VARY FROM JURISDICTION TO
      JURISDICTION. TO THE EXTENT THAT WE MAY NOT DISCLAIM ANY IMPLIED WARRANTY,
      THE SCOPE AND DURATION OF SUCH WARRANTY WILL BE THE MINIMUM PERMITTED BY
      LAW.
    </p>
  ),
  "Commercial Terms": (
    <div>
      <p className="text-lg font-bold leading-6 text-white">
        Digital Asset Management Fees
      </p>
      <p className="text-lg font-light leading-6 text-[#9C9C9C]">
        No fees are levied in case of any loss on the funds invested. The
        Digital Asset Management Fees are settled quarterly or at the time of
        exit from the investment strategy. The Digital Asset Manager charges
        Fees for the management of assets solely on the returns/profits on the
        funds invested, below are the details:
      </p>
      <div className="mt-6 flex w-full flex-col items-center">
        <div className="flex w-full items-center border border-b-0 border-[#9C9C9C]">
          <div className="flex w-full items-center justify-center border-r border-[#9C9C9C] p-4">
            Quaterly return on last investment
          </div>
          <div className="flex w-full items-center justify-center p-4">
            Kunji commission fee
          </div>
        </div>
        {[
          { col1: "Less than 2%", col2: "0%" },
          { col1: "2% to 10%", col2: "20%" },
          { col1: "More than 10%", col2: "30%" },
        ].map((x, i) => (
          <div
            key={i}
            className="flex w-full items-center border border-b-0 border-[#9C9C9C] last:border-b"
          >
            <div className="flex w-full items-center justify-center border-r border-[#9C9C9C] p-4">
              {x.col1}
            </div>
            <div className="flex w-full items-center justify-center p-4">
              {x.col2}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Information = () => {
  return (
    <Tabs defaultValue={tabTitles[0]?.title} className="mt-8 w-full">
      <TabsList className="flex w-full justify-between rounded-none border-b border-[#9C9C9C]">
        {tabTitles.map((tab) => (
          <TabsTrigger
            key={tab.title}
            value={tab.title}
            className="capitalize text-[#9C9C9C] data-[state=active]:text-white"
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabTitles.map((tab) => (
        <TabsContent key={tab.title} value={tab.title}>
          <StrategyInformationTab title={tab.title}>
            {tabDetails[tab.title]}
          </StrategyInformationTab>
        </TabsContent>
      ))}
    </Tabs>
  );
};
