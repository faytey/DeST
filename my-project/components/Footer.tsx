import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
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
  );
};
