/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";

export default function TxButton({
  label = "Execute",
  fn,
  args = [],
  value,
}: {
  label?: string;
  fn: (...a: any[]) => Promise<any>;
  args?: any[];
  value?: string;
}) {
  const [state, setState] = useState<"idle" | "pending" | "success" | "error">(
    "idle"
  );
  const [txHash, setTxHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const click = async () => {
    try {
      setState("pending");
      setError(null);
      const tx = await fn(...args, value ? { value } : {});
      const receipt = await tx.wait();
      setTxHash(receipt.transactionHash || receipt.hash || null);
      setState("success");
    } catch (e: any) {
      setError(e?.message || String(e));
      setState("error");
    }
  };

  return (
    <div>
      <button
        onClick={click}
        disabled={state === "pending"}
        className={`py-2 px-4 rounded ${
          state === "pending" ? "bg-yellow-400" : "bg-indigo-600 text-white"
        }`}
      >
        {state === "idle" && label}
        {state === "pending" && "Confirm in Wallet..."}
        {state === "success" && "Done"}
        {state === "error" && "Retry"}
      </button>
      {txHash && <div className="text-xs mt-2">Tx: {txHash}</div>}
      {error && <div className="text-xs text-red-600 mt-2">Err: {error}</div>}
    </div>
  );
}
