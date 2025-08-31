"use client";
import React, { useEffect, useState } from "react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { FACTORY_ABI, FACTORY_ADDRESS, readGroupData } from "../lib/contract";
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
import { Eye, LucideTable, Users } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

interface GroupData {
  id: number;
  creator: string;
  members: string[];
  contributionAmount: bigint;
  contributionPeriod: number;
  currentRound: number;
  contributionsThisRound: number;
  pot: bigint;
}

export default function GroupsTable() {
  const { isConnected } = useAccount();
  const [groups, setGroups] = useState<GroupData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Read group counter
  const { data: groupCounter } = useReadContract({
    abi: FACTORY_ABI,
    address: FACTORY_ADDRESS,
    functionName: "groupCounter",
  });

  // Write contract for joining groups
  const { writeContract, isPending } = useWriteContract();

  // Load all groups
  const loadAllGroups = async () => {
    if (!groupCounter) return;

    setIsLoading(true);
    setError(null);
    const totalGroups = Number(groupCounter);
    const groupsData: GroupData[] = [];

    // Load groups in batches to avoid overwhelming the blockchain
    const batchSize = 3;
    for (let i = 0; i <= totalGroups + 1; i += batchSize) {
      const batch = [];
      for (let j = 1; j <= batchSize && i + j < totalGroups + 1; j++) {
        const groupId = i + j;
        try {
          const groupData = await readGroupData(groupId);
          if (groupData) {
            batch.push({
              id: groupId,
              creator: groupData.creator,
              members: groupData.members,
              contributionAmount: groupData.contributionAmount,
              contributionPeriod: groupData.contributionPeriod,
              currentRound: groupData.currentRound,
              contributionsThisRound: groupData.contributionsThisRound,
              pot: groupData.pot,
            });
          }
        } catch (error) {
          console.error(`Error loading group ${groupId}:`, error);
          // Continue loading other groups even if one fails
        }
      }
      groupsData.push(...batch);

      // Small delay between batches
      if (i + batchSize < totalGroups) {
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
    }

    setGroups(groupsData);
    setIsLoading(false);
  };

  useEffect(() => {
    loadAllGroups();
  }, [groupCounter]);

  const handleJoinGroup = (groupId: number) => {
    writeContract({
      abi: FACTORY_ABI,
      address: FACTORY_ADDRESS,
      functionName: "joinGroup",
      args: [groupId],
    });
  };

  const handleViewGroup = (groupId: number) => {
    // Navigate to group view - you can implement this based on your routing
    console.log(`Viewing group ${groupId}`);
    // You could use Next.js router here: router.push(`/groups/${groupId}`)
  };

  const handleRefresh = () => {
    loadAllGroups();
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <LucideTable className="h-4 w-4 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg font-bold text-card-foreground">
                All Available Groups
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Browse and join rotating savings groups
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-xs">
              {groups.length} groups
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={isLoading}
            >
              Refresh
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {error && (
          <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}

        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
              <span className="text-muted-foreground">Loading groups...</span>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Group ID</TableHead>
                  <TableHead>Creator</TableHead>
                  <TableHead>Members</TableHead>
                  <TableHead>Contribution</TableHead>
                  <TableHead>Period</TableHead>
                  <TableHead>Current Round</TableHead>
                  <TableHead>Total Pot</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {groups.map((group) => (
                  <TableRow key={group.id}>
                    <TableCell className="font-medium">#{group.id}</TableCell>
                    <TableCell className="font-mono text-xs">
                      {group.creator.slice(0, 8)}...{group.creator.slice(-6)}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Users className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs">{group.members.length}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {formatEther(group.contributionAmount)} ETH
                    </TableCell>
                    <TableCell>{group.contributionPeriod} days</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">
                        {group.currentRound}
                      </Badge>
                    </TableCell>
                    <TableCell>{formatEther(group.pot)} ETH</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleViewGroup(group.id)}
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleJoinGroup(group.id)}
                          disabled={!isConnected || isPending}
                        >
                          {isPending ? "Joining..." : "Join"}
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {groups.length === 0 && !isLoading && (
              <div className="text-center py-8 text-muted-foreground">
                <Table className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p>No groups available to join</p>
                <p className="text-xs mt-1">
                  Create a new group to get started!
                </p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
