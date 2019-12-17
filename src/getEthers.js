import ethers from "ethers";

const getEthersProvider = () =>
  new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", async () => {
      // Modern dapp browsers...
      // if (window.ethereum) {
      //   const web3 = new Web3(window.ethereum);
      //   try {
      //     // Request account access if needed
      //     await window.ethereum.enable();
      //     // Acccounts now exposed
      //     resolve(web3);
      //   } catch (error) {
      //     reject(error);
      //   }
      // }
      // Legacy dapp browsers...
      if (window.web3) {
        // Use Mist/MetaMask's provider.
        let provider = new ethers.providers.Web3Provider(window.web3.currentProvider)
        //getSigner(accounts[1])
        console.log("Injected web3 detected.");
        resolve(provider);
      }
      // Fallback to localhost; use dev console port by default...
      else {
        const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
        resolve(provider);
      }
    });
  });

export default getEthersProvider;
