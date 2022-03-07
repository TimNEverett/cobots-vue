// import WalletConnectProvider from "@walletconnect/web3-provider";

import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

export const wcConnector = new WalletConnect({
  bridge: "https://bridge.walletconnect.org", // Required
  // qrcodeModal: QRCodeModal,
});

// Create a connector
export const connectWalletConnect = ({
  sessionCallback,
  disconnectCallback,
}) => {
 
  
  // Check if connection is already established
  if (!connector.connected) {
    // create new session
    connector.createSession();
  }

  // Subscribe to connection events
  // connector.on("connect", (error, payload) => {
  //   if (error) {
  //     throw error;
  //   }
  
  //   // Get provided accounts and chainId
  //   const { accounts, chainId } = payload.params[0];
  //   console.log( accounts, chainId )
  //   sessionCallback({ accounts, chainId })
  // });
  
  // connector.on("session_update", (error, payload) => {
  //   if (error) {
  //     throw error;
  //   }
  
  //   // Get updated accounts and chainId
  //   const { accounts, chainId } = payload.params[0];
  //   sessionCallback({ accounts, chainId })
  // });
  
  // connector.on("disconnect", (error, payload) => {
  //   if (error) {
  //     throw error;
  //   }
  
  //   // Delete connector
  //   disconnectCallback()
  // });

  return connector
}


export const connectMetaMask = async () => {
  if (typeof window.ethereum == 'undefined') {
    console.log('MetaMask is not installed!');
    return ''
  }
  const [ account ] = await window.ethereum.request({ method: 'eth_requestAccounts' });

  return account
}