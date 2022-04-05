import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import {useState} from "react";

export default function Walletmodel() {
  const [loading, setLoading] = useState(false);
  return {
    get web3Loading() {
      return loading
    },
    async getweb3() {
      setLoading(true);      
      const providerOptions = {
        // metamask: {
        //   id: 'injected',
        //   name: 'MetaMask',
        //   type: 'injected',
        //   check: 'isMetaMask'
        // },
        walletconnect: {
          package: WalletConnectProvider, // required
          options: {
            infuraId: '8017fee489474239bae3738e3dbb457d', // Required
            // network: 'rinkeby',
            qrcodeModalOptions: {
              mobileLinks: [
              'rainbow',
              'metamask',
              'argent',
              'trust',
              'imtoken',
              'pillar'
              ]
            }
          }
        } 
      };
      const web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
        providerOptions
      });
      const provider = await web3Modal.connect();      
      // Subscribe to accounts change
      provider.on("accountsChanged", (accounts) => {
        console.log(accounts);
      });

      // Subscribe to chainId change
      provider.on("chainChanged", (chainId) => {
        console.log(chainId);
      });

      // Subscribe to provider connection
      provider.on("connect", (info) => {
        console.log(info);
      });

      // Subscribe to provider disconnection
      provider.on("disconnect", (error) => {
        console.log(error);
      });
      const web3 = new Web3(provider);
      setLoading(false);
      return web3;
    }
  }
}