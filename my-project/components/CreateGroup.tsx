"use client";
import React, { useState } from "react";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { FACTORY_ABI, FACTORY_ADDRESS } from "../lib/contract";
import { parseEther } from "viem";

export default function CreateGroup() {
  const [amount, setAmount] = useState<string>("");
  const [period, setPeriod] = useState<string>("");

  const {
    writeContract,
    data: txHash,
    isPending: isWriting,
    error,
  } = useWriteContract();

  // Wait for transaction to be mined
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash: txHash,
  });

  const handleCreateGroup = async () => {
    writeContract({
      address: FACTORY_ADDRESS,
      abi: FACTORY_ABI,
      functionName: "createGroup",
      args: [BigInt(amount), BigInt(period)],
    });
  };

  return (
    <div className="p-6 bg-white rounded-xl space-y-4 shadow text-black">
      <h2 className="text-lg font-semibold">Create a New Group</h2>

      {/* Amount Input */}
      <div>
        <label className="block text-sm font-medium mb-1">Amount (ETH)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter amount"
        />
      </div>

      {/* Period Input */}
      <div>
        <label className="block text-sm font-medium mb-1">Period (days)</label>
        <input
          type="number"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter period"
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleCreateGroup}
        disabled={!amount || !period || isWriting || isConfirming}
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400"
      >
        {isWriting
          ? "Confirm in Wallet..."
          : isConfirming
          ? "Waiting for Confirmation..."
          : "Create Group"}
      </button>

      {/* Status Messages */}
      {txHash && (
        <p className="text-sm text-gray-600 mt-2">
          Tx Sent:{" "}
          <a
            href={`https://etherscan.io/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {txHash.slice(0, 10)}...
          </a>
        </p>
      )}

      {isSuccess && (
        <p className="text-green-600 text-sm mt-2">
          ✅ Group created successfully!
        </p>
      )}

      {error && (
        <p className="text-red-600 text-sm mt-2">
          ❌ Error: {error.message.split("\n")[0]}
        </p>
      )}
    </div>
  );
}
