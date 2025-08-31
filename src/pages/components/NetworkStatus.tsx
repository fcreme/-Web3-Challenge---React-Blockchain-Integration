import { useAppStore } from '../store/useAppStore'
import { sepolia } from 'wagmi/chains'
import { 
  Alert, 
  AlertTitle, 
  Box 
} from '@mui/material'
import { 
  CheckCircle as CheckIcon,
  Warning as WarningIcon
} from '@mui/icons-material'

export default function NetworkStatus() {
  const { isConnected, chainId } = useAppStore()

  if (!isConnected) {
    return null
  }

  const isCorrectNetwork = chainId === sepolia.id

  return (
    <Box sx={{ mb: 4, maxWidth: '100%' }}>
      <Alert 
        data-testid="network-status"
        severity={isCorrectNetwork ? 'success' : 'warning'}
        icon={isCorrectNetwork ? <CheckIcon /> : <WarningIcon />}
        sx={{
          py: 2,
          px: 3,
          borderRadius: '12px',
          background: isCorrectNetwork 
            ? 'rgba(76, 175, 80, 0.1)' 
            : 'rgba(255, 152, 0, 0.1)',
          border: isCorrectNetwork 
            ? '1px solid rgba(76, 175, 80, 0.3)' 
            : '1px solid rgba(255, 152, 0, 0.3)',
          '& .MuiAlert-message': {
            py: 0.5,
            display: 'flex',
            alignItems: 'center',
            minHeight: '1.5rem'
          },
          '& .MuiAlert-icon': {
            fontSize: '1.5rem',
            alignSelf: 'center',
            mt: 0
          },
          '& .MuiAlertTitle-root': {
            display: 'flex',
            alignItems: 'center',
            minHeight: '1.5rem',
            lineHeight: 1.2
          }
        }}
      >
        <AlertTitle sx={{ 
          mb: 0, 
          fontSize: { xs: '0.875rem', sm: '1rem' }, 
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          lineHeight: 1.2
        }}>
          {isCorrectNetwork ? 'Connected to Sepolia Testnet' : 'Wrong Network Detected'}
        </AlertTitle>
        {!isCorrectNetwork && (
          <Box sx={{ fontSize: '0.75rem', mt: 0.5 }}>
            Please switch to Sepolia network to interact with the contracts.
          </Box>
        )}
      </Alert>
    </Box>
  )
}
