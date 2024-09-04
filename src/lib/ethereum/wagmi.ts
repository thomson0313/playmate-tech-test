import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet } from "wagmi/chains";

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID as string;

export const config = getDefaultConfig({
  appName: "playmate-tech-test",
  projectId,
  chains: [mainnet],
  ssr: true,
});
