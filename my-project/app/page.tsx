import Header from "@/components/Header";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-background dark:bg-black">
      <div className="relative flex w-full flex-col items-start justify-start overflow-hidden pb-20">
        <BackgroundRippleEffect />
        <div className="z-10 mt-40 w-full">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Badge
              variant="secondary"
              className="text-sm font-medium rounded-full py-1"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary mr-1"></span>{" "}
              Ajo On-Chain
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
              Decentralized <div className="text-7xl">Savings & Thrift</div>
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
          <div className="hidden grid-cols-1 md:flex justify-center gap-6 mb-12">
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
        </div>
      </main>
    </div>
  );
}
