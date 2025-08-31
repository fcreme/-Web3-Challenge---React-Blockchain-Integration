// src/lib/web3.ts
import { http, createConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { injected, metaMask, walletConnect } from 'wagmi/connectors';

const walletConnectProjectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'demo'
const sepoliaRpcUrl = import.meta.env.VITE_SEPOLIA_RPC_URL || 'https://rpc.sepolia.org'

export const config = createConfig({
  chains: [sepolia],
  connectors: [
    injected(),
    metaMask(),
    walletConnect({ 
      projectId: walletConnectProjectId,
      showQrModal: true,
    }),
  ],
  transports: {
    [sepolia.id]: http(sepoliaRpcUrl),
  },
});
