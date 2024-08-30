const Web3 = require('web3');

// Connect to an Ethereum node using Infura (Sepolia testnet)
const web3 = new Web3('https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID'); // Replace with your Infura Project ID

// Replace with your contract's ABI and address
const contractABI = [ /* ABI array from your compiled contract */ ];
const contractAddress = 'YOUR_CONTRACT_ADDRESS'; //your deployed contract address

const myTokenContract = new web3.eth.Contract(contractABI, contractAddress);

async function mintAndCheck() {
    try {
        
        const accounts = await web3.eth.getAccounts();
        console.log(`Using account: ${accounts[0]}`);

       
        console.log('Minting new tokens...');
        await myTokenContract.methods.mintToken(100).send({ from: accounts[0] });
        console.log('Minting complete.');

        
        const balance = await myTokenContract.methods.balanceOf(accounts[0]).call();
        console.log(`Balance: ${balance}`);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

mintAndCheck();
