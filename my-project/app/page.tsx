"use client";
import CreateGroup from "@/components/CreateGroup";
import EarningsDisplay from "@/components/EarningsDisplay";
import GroupExplorer from "@/components/GroupExplorer";
import JoinGroup from "@/components/JoinGroup";
import ThreeCoin from "@/components/ThreeCoin";
import { WalletCard } from "@/components/WalletCard";
import WithdrawEarnings from "@/components/WithdrawEarnings";
import React, { useState } from "react";

export default function Page() {
  const [gid, setGid] = useState(1);

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 space-y-4">
          <WalletCard />
          {/* <div className="bg-white p-4 rounded">
            <ThreeCoin />
            <div className="mt-4 text-black">Rotating Savings</div>
          </div> */}
          <EarningsDisplay />
          <div className="bg-white p-6 rounded">
            <h2 className="text-xl font-bold text-black">Explorer</h2>
            <div className="mt-4 flex gap-2 items-center text-gray-500">
              <input
                type="number"
                value={gid}
                onChange={(e) => setGid(Number(e.target.value))}
                className="p-2 border rounded"
              />
            </div>
            <div className="mt-4">
              <GroupExplorer groupId={gid} />
            </div>
          </div>
          <WithdrawEarnings />
        </div>
        <div className="col-span-2 space-y-4">
          <CreateGroup />
          <JoinGroup />
        </div>
      </div>
    </main>
  );
}
