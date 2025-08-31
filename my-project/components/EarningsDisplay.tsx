"use client";
import React from "react";
import { useReadContract } from "wagmi";
import { FACTORY_ABI, FACTORY_ADDRESS } from "../lib/contract";
import { formatEther } from "viem";

export default function EarningsDisplay() {
  const { data, error, isLoading } = useReadContract({
    abi: FACTORY_ABI,
    address: FACTORY_ADDRESS,
    functionName: "contractEarnings",
  });

  if (isLoading) return <div>Loading earnings...</div>;
  if (error) return <div className="text-red-500">Error loading earnings</div>;

  return (
    <div className="p-4 bg-white rounded shadow text-black">
      <h2 className="font-bold">Platform Earnings</h2>
      <p>{data ? formatEther(data as bigint) : "0"} ETH</p>
    </div>
  );
}
