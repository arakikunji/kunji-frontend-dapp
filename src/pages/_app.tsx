import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";

import { Inter, Sora } from "next/font/google";
import Head from "next/head";
import { cn } from "@/utils/cn";

import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { env } from "@/env.mjs";
import { Toaster } from "sonner";

export const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const { chains, provider } = configureChains(
  [arbitrum, mainnet, polygon, optimism],
  [alchemyProvider({ apiKey: env.NEXT_PUBLIC_ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Kunji Finance",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: "#2054A5",
        })}
      >
        <SessionProvider session={session}>
          <Head>
            <title>Kunji DApp</title>
            <meta name="description" content="" />
            <meta name="keywords" content="" />
            <meta property="og:title" content="Kunju DApp" />
            <meta property="og:site_name" content="https://kunji.io" />
            <meta property="og:url" content="https://kunji.io/" />
            <meta property="og:description" content="" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/og-image.png" />
          </Head>
          <main
            className={cn(
              sora.className,
              sora.variable,
              "bg-[#050505] text-white"
            )}
          >
            <Component {...pageProps} />
          </main>
          <Toaster richColors />
        </SessionProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default MyApp;
