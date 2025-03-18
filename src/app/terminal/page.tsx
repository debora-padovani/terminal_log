"use client";
import React from 'react';

import Log from '../components/log/log';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import ConnectButton from '../components/connectButton/button';
import styles from './page.module.css';

export default function TerminalPage() {
  const { primaryWallet } = useDynamicContext();

  console.log('isConnected', primaryWallet?.isAuthenticated)
  return (
    <>
      {primaryWallet?.isAuthenticated ? <Log/> : 
        <div className={styles.container}>
          <h3>You need  to be connected to a wallet to access terminal</h3>
          <ConnectButton/>
        </div>
      }
    </>
  );
}