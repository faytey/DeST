"use client";
import React, { useState } from "react";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { FACTORY_ABI, FACTORY_ADDRESS } from "../lib/contract";

export default function JoinGroup() {
  const [groupId, setGroupId] = useState<string>("");

  const { data: hash, writeContract } = useWriteContract();
  const { isLoading, isSuccess, isError } = useWaitForTransactionReceipt({
    hash,
  });

  const handleJoin = () => {
    if (!groupId) return;

    writeContract({
      address: FACTORY_ADDRESS as `0x${string}`,
      abi: FACTORY_ABI,
      functionName: "joinGroup",
      args: [BigInt(groupId)],
    });
  };

  return (
    <div className="p-4 bg-white rounded shadow space-y-3 text-black">
      <h2 className="text-lg font-bold">Join Group</h2>
      <input
        type="number"
        value={groupId}
        onChange={(e) => setGroupId(e.target.value)}
        placeholder="Enter Group ID"
        className="w-full p-2 border rounded"
      />

      <button
        onClick={handleJoin}
        disabled={isLoading || !groupId}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        {isLoading ? "Joining..." : "Join Group"}
      </button>

      {isSuccess && (
        <p className="text-green-600">✅ Successfully joined group!</p>
      )}
      {isError && <p className="text-red-600">❌ Error joining group</p>}
    </div>
  );
}
