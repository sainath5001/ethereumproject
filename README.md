## How to Run

### Part 1: Deploy Smart Contract

1. **Setup Ganache**:
    - Download and install [Ganache](https://www.trufflesuite.com/ganache).
    - Start Ganache to create a local blockchain network.

2. **Setup Environment**:
    - Ensure you have Truffle Suite installed:
      ```bash
      npm install -g truffle
      ```
    - Install project dependencies:
      ```bash
      npm install
      ```

3. **Configure Truffle for Ganache**:
    - Update `truffle-config.js` to include the Ganache network configuration. Replace the `networks` section with:
      ```javascript
      networks: {
        development: {
          host: "localhost",
          port: 7545, // Default Ganache port
          network_id: "*" // Match any network id
        },
        sepolia: {
          provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID`),
          network_id: 11155111
        }
      },
      ```

4. **Deploy Contract to Ganache**:
    - Compile the contract:
      ```bash
      truffle compile
      ```
    - Deploy the contract to Ganache:
      ```bash
      truffle migrate --reset --network development
      ```

5. **Deploy Contract to Sepolia**:
    - Compile the contract:
      ```bash
      truffle compile
      ```
    - Deploy the contract to the Sepolia testnet:
      ```bash
      truffle migrate --reset --network sepolia
      ```

### Part 2: Interact with the Contract

1. **Setup Web3.js**:
    - Ensure you have Web3.js installed:
      ```bash
      npm install web3
      ```

2. **Run Script**:
    - Execute the script to mint tokens and verify balance:
      ```bash
      node scripts/mintToken.js
      ```
