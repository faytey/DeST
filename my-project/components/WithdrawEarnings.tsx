"use client";
import React, { useState } from "react";
import { useWriteContract } from "wagmi";
import { FACTORY_ABI, FACTORY_ADDRESS } from "../lib/contract";

export default function WithdrawEarnings() {
  const { writeContract } = useWriteContract();
  const [status, setStatus] = useState<string>("");

  const handleWithdraw = async () => {
    try {
      setStatus("⏳ Withdrawing...");
      await writeContract({
        abi: FACTORY_ABI,
        address: FACTORY_ADDRESS,
        functionName: "withdrawEarnings",
        args: [/* replace with your admin address */ "0xYourWalletAddress"],
      });
      setStatus("✅ Withdraw successful!");
    } catch (err) {
      console.error(err);
      setStatus("❌ Withdraw failed.");
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow text-black space-y-2">
      <h2 className="font-bold">Withdraw Earnings</h2>
      <button
        onClick={handleWithdraw}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Withdraw
      </button>
      {status && <p className="text-sm">{status}</p>}
    </div>
  );
}
