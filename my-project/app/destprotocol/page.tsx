"use client";
import CreateGroup from "@/components/CreateGroup";
import EarningsDisplay from "@/components/EarningsDisplay";
import GroupExplorer from "@/components/GroupExplorer";
import GroupsTable from "@/components/GroupsTable";
import JoinGroup from "@/components/JoinGroup";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import WithdrawEarnings from "@/components/WithdrawEarnings";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";

export default function Page() {
  const [gid, setGid] = useState(1);
  const [view] = useState("group"); // "group" or "table"
  return (
    <div className="min-h-screen bg-background dark:bg-black mt-[5rem] mx-[5rem]">
      {" "}
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Sidebar */}
        <div className="lg:col-span-2 space-y-6">
          <EarningsDisplay />

          <Card className="gradient-card-hover">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  {/* <Search className="h-4 w-4 text-primary" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z"
                      opacity="0.2"
                    ></path>
                    <path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <div>
                  <CardTitle className="text-lg font-bold text-card-foreground">
                    Group Explorer
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Browse and interact with groups
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* View Toggle */}
              {/* <div className="flex space-x-2">
                    <Button
                      variant={view === "group" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setView("group")}
                      className="flex-1"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Single Group
                    </Button>
                    <Button
                      variant={view === "table" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setView("table")}
                      className="flex-1"
                    >
                      <Table className="h-4 w-4 mr-2" />
                      All Groups
                    </Button>
                  </div> */}

              {view === "group" && (
                <div className="space-y-2">
                  <Label
                    htmlFor="groupId"
                    className="text-sm font-semibold text-card-foreground"
                  >
                    Group ID
                  </Label>
                  <Input
                    id="groupId"
                    type="number"
                    value={gid}
                    onChange={(e) => setGid(Number(e.target.value))}
                    min="0"
                    className="w-full"
                    // disabled={pathname === "/"}
                  />
                </div>
              )}

              <GroupExplorer groupId={gid} />

              {/* {view === "group" ? (
                    <GroupExplorer groupId={gid} />
                  ) : (
                    <GroupsTable />
                  )} */}
            </CardContent>
          </Card>

          <WithdrawEarnings />
        </div>

        {/* Right Content */}
        <div className="lg:col-span-1 space-y-6">
          <CreateGroup />
          <JoinGroup />
        </div>
      </div>
      <br />
      <GroupsTable />
    </div>
  );
}
