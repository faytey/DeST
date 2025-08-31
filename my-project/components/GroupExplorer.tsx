/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { FACTORY_ABI, FACTORY_ADDRESS } from "../lib/contract";
import { formatEther } from "viem";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function GroupExplorer({ groupId }: { groupId: number }) {
  const { isConnected } = useAccount();
  const [group, setGroup] = useState<any>(null);

  // --- read contract
  const { data, error, isLoading } = useReadContract({
    abi: FACTORY_ABI,
    address: FACTORY_ADDRESS,
    functionName: "getGroup",
    args: [groupId],
  });

  // --- write contract
  const { writeContract, isPending } = useWriteContract();

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

  const handleContribute = () => {
    writeContract({
      abi: FACTORY_ABI,
      address: FACTORY_ADDRESS,
      functionName: "contribute",
      args: [groupId],
      value: group.contributionAmount,
    });
  };

  if (isLoading) {
    return (
      <Card className="animate-fade-in">
        <CardContent className="flex items-center justify-center py-8">
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
            <span className="text-muted-foreground">Loading group data...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !group) {
    return (
      <Card className="animate-fade-in">
        <CardContent className="flex items-center space-x-2 py-8 text-destructive">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error loading group data</span>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="animate-fade-in">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Eye className="h-4 w-4 text-primary-foreground" />
            </div> */}
            <div>
              <CardTitle className="text-lg font-bold text-card-foreground">
                Group #{groupId}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Group details and statistics
              </CardDescription>
            </div>
          </div>
          <Badge variant="outline" className="text-xs">
            {group.members.length} members
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Group Stats */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Group Statistics
            </h3>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Creator</span>
                <span className="text-sm font-mono text-foreground">
                  {group.creator.slice(0, 8)}...{group.creator.slice(-6)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Current Round
                </span>
                <Badge variant="secondary" className="text-xs">
                  {group.currentRound}
                </Badge>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Period</span>
                <span className="text-sm font-medium text-foreground">
                  {group.contributionPeriod} days
                </span>
              </div>
            </div>
          </div>

          {/* Financial Info */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Financial Details
            </h3>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Contribution
                </span>
                <span className="text-sm font-medium text-foreground">
                  {formatEther(group.contributionAmount)} ETH
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total Pot</span>
                <span className="text-sm font-medium text-foreground">
                  {formatEther(group.pot)} ETH
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  This Round
                </span>
                <Badge variant="outline" className="text-xs">
                  {group.contributionsThisRound}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Action Button */}
        <Button
          onClick={handleContribute}
          disabled={!isConnected || isPending}
          className="w-full"
          size="lg"
        >
          {isPending ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
              <span>Contributing...</span>
            </div>
          ) : (
            `Contribute ${formatEther(group.contributionAmount)} ETH`
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
