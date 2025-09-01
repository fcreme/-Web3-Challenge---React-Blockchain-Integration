// src/lib/web3.ts
import { http, createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected, metaMask, walletConnect } from 'wagmi/connectors';

const walletConnectProjectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'demo'
const mainnetRpcUrl = import.meta.env.VITE_MAINNET_RPC_URL || 'https://eth-mainnet.g.alchemy.com/v2/demo'

export const config = createConfig({
  chains: [mainnet],
  connectors: [
    injected(),
    metaMask(),
    walletConnect({ 
      projectId: walletConnectProjectId,
      showQrModal: true,
    }),
  ],
  transports: {
    [mainnet.id]: http(mainnetRpcUrl),
  },
});
