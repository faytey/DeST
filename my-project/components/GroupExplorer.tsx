"use client";
import React, { useEffect, useState } from "react";
import { useReadContract, useWriteContract } from "wagmi";
import { FACTORY_ABI, FACTORY_ADDRESS } from "../lib/contract";
import { formatEther } from "viem";

export default function GroupExplorer({ groupId }: { groupId: number }) {
  const [group, setGroup] = useState<any>(null);

  // --- read contract
  const { data, error } = useReadContract({
    abi: FACTORY_ABI,
    address: FACTORY_ADDRESS,
    functionName: "getGroup",
    args: [groupId],
  });

  // --- write contract
  const { writeContract } = useWriteContract();

  useEffect(() => {
    if (data) {
      const g = data as any[];
      setGroup({
        creator: g[0],
        members: g[1],
        contributionAmount: g[2],
        contributionPeriod: Number(g[3]),
        currentRound: Number(g[4]),
        contributionsThisRound: Number(g[6]),
        pot: g[7],
      });
    } else {
      setGroup(null);
    }
  }, [data]);

  if (!group)
    return (
      <div className="p-4 bg-white rounded text-black">
        {error ? "❌ Error loading group" : "Loading..."}
      </div>
    );

  return (
    <div className="p-4 bg-white rounded space-y-3 text-black">
      <div>
        Creator:{" "}
        <span className="font-mono">{group.creator.slice(0, 12)}...</span>
      </div>
      <div>Contribution: {formatEther(group.contributionAmount)} ETH</div>
      <div>Members: {group.members.length}</div>
      <div>Pot: {formatEther(group.pot)} ETH</div>

      <button
        onClick={() =>
          writeContract({
            abi: FACTORY_ABI,
            address: FACTORY_ADDRESS,
            functionName: "contribute",
            args: [groupId],
            value: group.contributionAmount, // ✅ exact contribution amount
          })
        }
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Contribute
      </button>
    </div>
  );
}
