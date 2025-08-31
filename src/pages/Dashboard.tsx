import { Box, Container, Card, CardContent, Typography, Button } from '@mui/material'
import { History as HistoryIcon } from '@mui/icons-material'
import ConnectBar from './components/ConnectBar'
import NetworkStatus from './components/NetworkStatus'
import BalancesCard from './components/BalancesCard'
import ActionsForm from './components/ActionsForm'
import EventsTable from './components/EventsTable'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #000000 0%, #111111 100%)' }}>
      <ConnectBar />
      
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Hero Section - Left Aligned */}
        <Box 
          sx={{ 
            textAlign: 'left', 
            mb: 8,
            py: { xs: 4, sm: 6, md: 8 },
            position: 'relative',
            overflow: 'hidden',
            maxWidth: '100%',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
              zIndex: -1
            }}
          />
          
          <Typography 
            variant="h1" 
            sx={{ 
              mb: 3,
              background: 'linear-gradient(135deg, #ffffff 0%, #667eea 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textAlign: 'left',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              lineHeight: 1.1
            }}
          >
            Web3 Challenge Dashboard
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: 600,
              mb: 4,
              fontWeight: 400,
              textAlign: 'left',
              fontSize: { xs: '1rem', sm: '1.25rem' }
            }}
          >
            Interact with ERC20 tokens on the Sepolia network
          </Typography>
          
          <Button
            component={Link}
            to="/transfers"
            variant="outlined"
            size="large"
            startIcon={<HistoryIcon />}
            sx={{
              borderColor: 'rgba(255, 255, 255, 0.3)',
              color: 'text.primary',
              fontSize: { xs: '0.875rem', sm: '1rem' },
              fontWeight: 600,
              px: { xs: 3, sm: 4 },
              py: { xs: 1.5, sm: 2 },
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'primary.main',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
              }
            }}
          >
            View Transaction History
          </Button>
        </Box>

        {/* Network Status */}
        <NetworkStatus />

        {/* Main Content - Single Column Layout */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6, maxWidth: '100%' }}>
          {/* Token Balances */}
          <Card 
            sx={{ 
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              borderRadius: '16px',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.2)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                transform: 'translateY(-2px)'
              }
            }}
          >
            <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
              <BalancesCard />
            </CardContent>
          </Card>

          {/* Token Operations */}
          <Card 
            sx={{ 
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              borderRadius: '16px',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.2)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                transform: 'translateY(-2px)'
              }
            }}
          >
            <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 3,
                  fontWeight: 600,
                  color: 'text.primary',
                  fontSize: { xs: '1.5rem', sm: '2rem' }
                }}
              >
                Token Operations
              </Typography>
              <ActionsForm />
            </CardContent>
          </Card>

          {/* Recent Events */}
          <Card 
            sx={{ 
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              borderRadius: '16px',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.2)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                transform: 'translateY(-2px)'
              }
            }}
          >
            <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 3,
                  fontWeight: 600,
                  color: 'text.primary',
                  fontSize: { xs: '1.5rem', sm: '2rem' }
                }}
              >
                Recent Events
              </Typography>
              <EventsTable />
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}
