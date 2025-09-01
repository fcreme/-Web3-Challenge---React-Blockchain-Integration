// src/lib/web3.ts
import { http, createConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { injected, metaMask, walletConnect } from 'wagmi/connectors';

const walletConnectProjectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'demo'

// Múltiples RPC URLs para mejor confiabilidad en testnet
const sepoliaRpcUrls = [
  import.meta.env.VITE_SEPOLIA_RPC_URL,
  'https://rpc.sepolia.org',
  'https://ethereum-sepolia.publicnode.com',
  'https://sepolia.drpc.org'
].filter(Boolean)

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
    [sepolia.id]: http(sepoliaRpcUrls[0] || 'https://rpc.sepolia.org'),
  },
});

// Configuración específica para testnet
export const TESTNET_CONFIG = {
  chainId: sepolia.id,
  chainName: 'Sepolia Testnet',
  nativeCurrency: {
    name: 'Sepolia Ether',
    symbol: 'SEP',
    decimals: 18,
  },
  rpcUrls: sepoliaRpcUrls,
  blockExplorerUrls: ['https://sepolia.etherscan.io'],
  faucetUrl: 'https://sepoliafaucet.com/',
}
