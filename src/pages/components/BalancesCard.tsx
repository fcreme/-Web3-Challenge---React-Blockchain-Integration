import { useAppStore } from '../store/useAppStore'
import { useEffect } from 'react'
import { sepolia } from 'wagmi/chains'
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent,
  Chip
} from '@mui/material'
import { 
  Refresh as RefreshIcon,
  AccountBalance as BalanceIcon
} from '@mui/icons-material'

export default function BalancesCard(){
  const { 
    balances, 
    fetchBalances, 
    isConnected, 
    chainId 
  } = useAppStore()

  const isWrongNetwork = isConnected && chainId !== sepolia.id

  useEffect(() => {
    if (isConnected && chainId === sepolia.id) {
      fetchBalances()
    }
  }, [isConnected, chainId, fetchBalances])

  return (
    <Box>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between', 
        alignItems: { xs: 'flex-start', sm: 'center' }, 
        gap: { xs: 2, sm: 0 },
        mb: 3 
      }}>
        <Typography variant="h5" component="h3" sx={{ 
          fontWeight: 600,
          fontSize: { xs: '1.25rem', sm: '1.5rem' }
        }}>
          <BalanceIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: { xs: '1.3rem', sm: '1.5rem' } }} />
          Token Balances
        </Typography>
        {isConnected && !isWrongNetwork && (
          <Button
            data-testid="refresh-balances"
            onClick={fetchBalances}
            variant="outlined"
            size="small"
            startIcon={<RefreshIcon />}
            sx={{
              borderColor: 'rgba(255, 255, 255, 0.3)',
              color: 'text.primary',
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              fontWeight: 600,
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'primary.main',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                transform: 'translateY(-1px)'
              }
            }}
          >
            Refresh
          </Button>
        )}
      </Box>
      
      {!isConnected ? (
        <Typography color="text.secondary" sx={{ 
          fontSize: { xs: '0.875rem', sm: '1rem' },
          textAlign: 'center',
          py: 4
        }}>
          Connect your wallet to see balances
        </Typography>
      ) : isWrongNetwork ? (
        <Typography color="error" sx={{ 
          fontSize: { xs: '0.875rem', sm: '1rem' },
          textAlign: 'center',
          py: 4
        }}>
          Please switch to Sepolia network
        </Typography>
      ) : (
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, 
          gap: 3 
        }}>
          <Card sx={{ 
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
              transform: 'translateY(-2px)'
            }
          }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: 2,
                textAlign: 'center'
              }}>
                <Chip 
                  label="DAI" 
                  size="medium" 
                  color="primary" 
                  variant="outlined"
                  sx={{ 
                    borderColor: 'rgba(102, 126, 234, 0.5)',
                    color: '#667eea',
                    fontWeight: 600
                  }}
                />
                <Typography 
                  variant="h4" 
                  data-testid="dai-balance"
                  sx={{ 
                    fontWeight: 700,
                    color: 'text.primary',
                    fontFamily: 'monospace'
                  }}
                >
                  {balances.DAI}
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ 
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
              transform: 'translateY(-2px)'
            }
          }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: 2,
                textAlign: 'center'
              }}>
                <Chip 
                  label="USDC" 
                  size="medium" 
                  color="secondary" 
                  variant="outlined"
                  sx={{ 
                    borderColor: 'rgba(118, 75, 162, 0.5)',
                    color: '#764ba2',
                    fontWeight: 600
                  }}
                />
                <Typography 
                  variant="h4" 
                  data-testid="usdc-balance"
                  sx={{ 
                    fontWeight: 700,
                    color: 'text.primary',
                    fontFamily: 'monospace'
                  }}
                >
                  {balances.USDC}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  )
}
