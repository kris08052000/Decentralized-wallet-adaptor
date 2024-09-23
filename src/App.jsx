import { useMemo, useState } from 'react'
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Airdrop } from './Airdrop';
import { ShowSolBalance } from './ShowSolBalance';
import { SendTokens } from './SendTokens';import { Buffer } from 'buffer';
import { SignMessage } from './SignMessage';

window.Buffer = Buffer; // Make Buffer available globally if needed



function App() {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(()=> clusterApiUrl(network), [network]);

  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/ssTmddTQpsrYjLRpwgjk1nQUNarHSwEN"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <WalletMultiButton/>
            <WalletDisconnectButton/>
          </div>
          <div>
            <Airdrop/>
          </div>
          <div><ShowSolBalance/></div>
          <div><SendTokens/></div>
          <div><SignMessage/></div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
