"use client";
import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export const WalletCard = () => {
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h4 className="font-semibold text-black">Wallet</h4>
      {isConnected ? (
        <div>
          <p className="text-xs text-slate-500">{address}</p>
          <button
            onClick={() => disconnect()}
            className="mt-2 bg-red-50 text-red-600 p-2 rounded"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <div className="flex flex-col">
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              className="mt-2 bg-indigo-600 text-white p-2 rounded-full"
            >
              {connector.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
