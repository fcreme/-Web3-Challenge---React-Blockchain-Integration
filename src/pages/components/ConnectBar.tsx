// src/components/ConnectBar.tsx
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useChainId, useSwitchChain } from 'wagmi'
import { useAppStore } from '../store/useAppStore'
import { useEffect } from 'react'
import { sepolia } from 'wagmi/chains'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Chip, 
  Button
} from '@mui/material'
import { 
  AccountBalanceWallet as WalletIcon,
  Warning as WarningIcon
} from '@mui/icons-material'

export default function ConnectBar() {
  const { address, isConnected } = useAccount()
  const chainId = useChainId()
  const { switchChain, isPending: isSwitching } = useSwitchChain()
  const { setConnection } = useAppStore()

  // Sync wallet state with Zustand store
  useEffect(() => {
    setConnection(isConnected, address, chainId)
  }, [address, chainId, isConnected, setConnection])

  const isWrongNetwork = isConnected && chainId !== sepolia.id

  const handleSwitchNetwork = async () => {
    try {
      await switchChain({ chainId: sepolia.id })
    } catch (error) {
      console.error('Failed to switch network:', error)
    }
  }

  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
      }}
    >
      <Toolbar sx={{ px: { xs: 2, md: 4 }, py: { xs: 1.5, sm: 2 } }}>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            color: 'text.primary',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #ffffff 0%, #667eea 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: { xs: '1.1rem', sm: '1.25rem' }
          }}
        >
          <WalletIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: { xs: '1.2rem', sm: '1.4rem' } }} />
          Web3 Challenge
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 }, flexWrap: 'wrap' }}>
          {isConnected && address && (
            <>
              <Chip
                data-testid="wallet-address"
                label={`${address?.slice(0, 6)}...${address?.slice(-4)}`}
                size="small"
                variant="outlined"
                sx={{ 
                  fontFamily: 'monospace',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  color: 'text.primary',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }}
              />
              <Chip
                label={chainId === sepolia.id ? 'Sepolia' : `Chain ${chainId}`}
                size="small"
                color={chainId === sepolia.id ? 'success' : 'warning'}
                variant="filled"
                sx={{
                  backgroundColor: chainId === sepolia.id 
                    ? 'rgba(76, 175, 80, 0.2)' 
                    : 'rgba(255, 152, 0, 0.2)',
                  border: chainId === sepolia.id 
                    ? '1px solid rgba(76, 175, 80, 0.3)' 
                    : '1px solid rgba(255, 152, 0, 0.3)',
                  color: chainId === sepolia.id ? '#4CAF50' : '#ff9800'
                }}
              />
            </>
          )}
          {isWrongNetwork && (
            <Button
              data-testid="switch-network-button"
              onClick={handleSwitchNetwork}
              disabled={isSwitching}
              variant="contained"
              size="small"
              startIcon={<WarningIcon />}
              sx={{
                background: 'linear-gradient(135deg, #f44336 0%, #d32f2f 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)'
                },
                '&:disabled': {
                  background: 'rgba(244, 67, 54, 0.5)'
                }
              }}
            >
              {isSwitching ? 'Switching...' : 'Switch to Sepolia'}
            </Button>
          )}
          <Box data-testid="connect-button">
            <ConnectButton />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
