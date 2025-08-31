# Web3 Challenge - React Blockchain Integration

A React application demonstrating blockchain integration and state management using Zustand, with wallet connection via RainbowKit and blockchain interactions on Sepolia testnet.

## 🚀 Features

### Core Features
- **Wallet Connection**: Connect with RainbowKit supporting multiple wallets
- **Network Detection**: Automatic detection and switching to Sepolia testnet
- **Token Balances**: Real-time display of DAI (18 decimals) and USDC (6 decimals) balances
- **Token Operations**: 
  - Approve tokens for spending
  - Transfer tokens to other addresses
  - Mint test tokens
- **Event Tracking**: Display transfer and approval events in a table
- **Transaction Status**: Real-time transaction status with notifications

### Technical Features
- **State Management**: Zustand store with clean architecture
- **Type Safety**: Full TypeScript implementation
- **Testing**: Unit tests with Vitest and React Testing Library
- **Modern Stack**: Vite, React 19, Wagmi v2, Viem

## 🛠️ Tech Stack

- **Framework**: Vite + React 19
- **Routing**: React Router DOM
- **State Management**: Zustand
- **Blockchain**: Viem + Wagmi v2
- **Wallet Integration**: RainbowKit
- **Testing**: Vitest + React Testing Library
- **Language**: TypeScript
- **Styling**: Inline styles (ready for Material-UI integration)

## 📋 Prerequisites

- Node.js 18+ 
- A Web3 wallet (MetaMask, Rainbow, etc.)
- Sepolia testnet ETH (get from [Alchemy Faucet](https://sepoliafaucet.com/))
- WalletConnect Project ID (optional, for mobile wallet support)

## 🚀 Quick Start

1. **Clone and install dependencies**:
   ```bash
   git clone <repository-url>
   cd web3-challenge
   npm install
   ```

2. **Configure environment variables** (optional):
   ```bash
   cp env.example .env.local
   # Edit .env.local and add your WalletConnect Project ID
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173`

5. **Connect your wallet**:
   - Click "Connect Wallet" in the top right
   - Switch to Sepolia testnet if prompted
   - Get test ETH from a faucet if needed

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# WalletConnect Project ID (optional)
VITE_WALLETCONNECT_PROJECT_ID=your_project_id_here

# Sepolia RPC URL (optional)
VITE_SEPOLIA_RPC_URL=https://rpc.sepolia.org
```

### Getting WalletConnect Project ID
1. Go to [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Sign up/Login
3. Create a new project
4. Copy the Project ID
5. Add it to your `.env.local` file

## 🎯 Usage Guide

### Connecting Your Wallet
1. Click the "Connect Wallet" button
2. Choose your preferred wallet
3. Approve the connection
4. Switch to Sepolia network if prompted

### Viewing Balances
- Token balances are automatically displayed when connected
- DAI and USDC balances are shown with proper decimal formatting
- Click "Refresh" to manually update balances

### Token Operations

#### Approve Tokens
1. Select token (DAI or USDC)
2. Enter amount to approve
3. Enter spender address
4. Click "APPROVE"
5. Confirm transaction in wallet

#### Transfer Tokens
1. Select token (DAI or USDC)
2. Enter amount to transfer
3. Enter recipient address
4. Click "TRANSFER"
5. Confirm transaction in wallet

#### Mint Test Tokens
1. Select token (DAI or USDC)
2. Enter amount to mint
3. Leave address field empty
4. Click "MINT"
5. Confirm transaction in wallet

### Viewing Transaction History
- All transactions are displayed in the Events Table
- Click on transaction hash to view on Etherscan
- Events are stored in memory (refresh to clear)

## 🏗️ Architecture Decisions

### State Management: Zustand
- **Why Zustand**: Lightweight, simple API, great TypeScript support
- **Store Structure**: Single store with clear separation of concerns
- **Benefits**: No provider wrapping, easy testing, predictable state updates

### Wallet Integration: RainbowKit + Wagmi v2
- **Why RainbowKit**: Best UX, supports multiple wallets, active development
- **Why Wagmi v2**: Latest version with improved performance and hooks
- **Benefits**: Type-safe, composable, excellent developer experience

### Blockchain Library: Viem
- **Why Viem**: Modern, type-safe, excellent performance
- **Benefits**: Better than ethers.js, great TypeScript support

### Testing Strategy
- **Unit Tests**: Vitest + React Testing Library for component testing
- **Coverage**: Focus on critical user flows and business logic
- **Mocking**: Mock blockchain interactions for reliable tests

## 📁 Project Structure

```
src/
├── lib/                 # Blockchain configuration
│   ├── web3.ts         # Wagmi configuration
│   └── erc20.ts        # Contract addresses and ABIs
├── pages/
│   ├── components/     # Reusable UI components
│   ├── store/          # Zustand store
│   ├── Dashboard.tsx   # Main dashboard page
│   └── Transfers.tsx   # Transaction history page
├── App.tsx             # Main app component
└── main.tsx           # App entry point
```

## 🧪 Testing

### Run Tests
```bash
# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### Test Structure
- Component tests for all UI components
- Store tests for business logic
- Mock blockchain interactions
- Test user flows and error handling

## 🔧 Configuration

### Contract Addresses
- **DAI**: `0x1D70D57ccD2798323232B2dD027B3aBcA5C00091`
- **USDC**: `0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47`

## 🚧 Known Limitations

1. **Event Persistence**: Events are stored in memory and lost on page refresh
2. **Network Support**: Only supports Sepolia testnet
3. **Token Support**: Limited to DAI and USDC test tokens
4. **Basic Styling**: Uses inline styles, ready for UI framework integration

## 🔮 Future Improvements

- [ ] Add E2E tests with Cypress
- [ ] Implement Material-UI or custom design system
- [ ] Add responsive design
- [ ] Implement event persistence
- [ ] Add support for more networks
- [ ] Improve error handling and user feedback
- [ ] Add transaction history persistence
- [ ] Implement allowance checking before transfers

## 🐛 Troubleshooting

### Common Issues

**Wallet Connection Not Working**
- Make sure you're on Sepolia testnet
- Check if your wallet is unlocked
- Try refreshing the page
- Ensure you have some Sepolia ETH for gas fees

**Transactions Failing**
- Check your Sepolia ETH balance
- Ensure you're on the correct network
- Verify contract addresses are correct
- Check browser console for errors

**Tests Failing**
- Run `npm test -- --run` to see detailed error messages
- Check that all mocks are properly configured
- Ensure test environment is set up correctly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is part of a Web3 development challenge.

---

**Note**: This is a demonstration project for educational purposes. Always test thoroughly before using in production environments.
