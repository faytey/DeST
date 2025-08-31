"use client";
import CreateGroup from "@/components/CreateGroup";
import EarningsDisplay from "@/components/EarningsDisplay";
import GroupExplorer from "@/components/GroupExplorer";
import GroupsTable from "@/components/GroupsTable";
import Header from "@/components/Header";
import JoinGroup from "@/components/JoinGroup";
import WithdrawEarnings from "@/components/WithdrawEarnings";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import Image from "next/image";

export default function Page() {
  const [gid, setGid] = useState(1);
  const [view] = useState("group"); // "group" or "table"

  return (
    <div className="min-h-screen bg-background dark:bg-black">
      <Header />
      <div className="relative flex w-full flex-col items-start justify-start overflow-hidden pb-20">
        <BackgroundRippleEffect />
        <div className="z-10 mt-40 w-full">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Badge
              variant="secondary"
              className="text-sm font-medium rounded-full py-1"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary mr-1"></span>{" "}
              Built on Lisk
            </Badge>
            {/* <Badge
                variant="secondary"
                className="text-sm font-medium rounded-full"
              >
                ✨ Trustless & Secure
              </Badge> */}
          </div>
          <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
            Decentralized{" "}
            <div className="text-7xl font-bold">Savings & Thrift</div>
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-2xl text-center text-balance text-base text-neutral-800 dark:text-neutral-500">
            Join rotating savings groups, build trust, and earn together in a
            <span className="text-primary font-semibold">
              {" "}
              decentralized way
            </span>
            . No intermediaries, just smart contracts and community.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="hidden text-center my-24 animate-fade-in">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Badge
                variant="outline"
                className="text-sm font-medium rounded-full py-1"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-1"></span>{" "}
                Live on Lisk
              </Badge>
              {/* <Badge
                variant="secondary"
                className="text-sm font-medium rounded-full"
              >
                ✨ Trustless & Secure
              </Badge> */}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Decentralized <div className="text-7xl">Savings & Trust</div>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Join rotating savings groups, build trust, and earn together in a
              <span className="text-primary font-semibold">
                {" "}
                decentralized way
              </span>
              . No intermediaries, just smart contracts and community.
            </p>
          </div>

          {/* Stats Section */}
          <div className="hidden grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="gradient-card-hover text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">
                  Active Groups
                </div>
              </CardContent>
            </Card>
            <Card className="gradient-card-hover text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  $50K+
                </div>
                <div className="text-sm text-muted-foreground">
                  Total Value Locked
                </div>
              </CardContent>
            </Card>
            <Card className="gradient-card-hover text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  1000+
                </div>
                <div className="text-sm text-muted-foreground">
                  Active Members
                </div>
              </CardContent>
            </Card>
          </div>

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

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="h-6 w-6 rounded-lg bg-primary flex items-center justify-center">
                  <Image
                    src={"/logo.png"}
                    alt="Logo"
                    width={50}
                    height={50}
                    className="hue-rotate-250"
                  />
                </div>
                <span className="text-lg font-semibold text-foreground">
                  DeST Protocol
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Built with ❤️ for the DeFi community
              </p>
              <p className="text-xs text-muted-foreground">
                Decentralized Savings & Thrift Protocol • Secure • Transparent •
                Community-Driven
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
