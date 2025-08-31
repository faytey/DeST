"use client";
import React from "react";
import { useAccount } from "wagmi";
import { WalletCard } from "./WalletCard";
import MobileMenu from "./MobileMenu";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";

export default function Header() {
  const { isConnected } = useAccount();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src={"/logo.png"}
                  alt="Logo"
                  width={50}
                  height={50}
                  className="hue-rotate-250"
                />
                {/* <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">D</span>
                </div> */}
                {/* <div className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full animate-pulse"></div> */}
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-foreground">DeST</h1>
                <p className="text-xs text-muted-foreground font-medium">
                  Decentralized Savings & Thrift
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-1">
              <a
                href="#groups"
                className="group relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
              >
                <span className="relative z-10">Groups</span>
                <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <Separator orientation="vertical" className="h-6" />

              <a
                href="#earnings"
                className="group relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
              >
                <span className="relative z-10">Earnings</span>
                <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <Separator orientation="vertical" className="h-6" />

              <a
                href="#explorer"
                className="group relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
              >
                <span className="relative z-10">Explorer</span>
                <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </nav>
          </div>

          {/* Right side - Stats, Wallet and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Connection Status */}
            {isConnected && (
              <div className="hidden md:flex items-center space-x-2">
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse mr-2"></div>
                  Connected
                </Badge>
              </div>
            )}

            {/* Network Status */}
            <div className="hidden sm:fle items-center space-x-2">
              <Badge variant="outline" className="text-xs">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                Lisk
              </Badge>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Wallet Connection */}
            <div className="flex items-center space-x-2">
              <WalletCard />
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </header>
  );
}
