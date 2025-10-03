# DeST

### _Decentralized Savings & Thrift (Onchain Ajo)_

**DeST** is a decentralized platform for **rotational savings groups and thrift contributions (Ajo/Esusu/Adashe)** powered by blockchain.  
It brings the trusted social-finance models of African communities on-chain — combining **rotational savings, pooled lending, and DeFi-powered growth** into one transparent, trustless system.

By leveraging **smart contracts**, DeST ensures that contributions are:

- **Automated** → funds are locked and tracked transparently
- **Trustless** → no need for middlemen or manual record-keeping
- **Fair** → withdrawals and allocations follow agreed rules
- **Productive** → pooled funds can be extended as loans, invested in DeFi, or used for trading to generate yields

---

## Core Features

- **Rotational Savings Groups** → Create and join thrift circles with predefined contribution size and payout order.
- **Pooled Lending & Credit** → Members can access credit from pooled contributions, leveraging social capital as trust.
- **Automated Contributions** → On-chain deposits enforce consistency and prevent default.
- **Transparent Withdrawals** → Smart contracts ensure that every payout is fair, secure, and verifiable.
- **Platform Earnings** → Protocol sustains itself via small fees on group activities.
- **Admin Withdrawals** → Designated admins can withdraw platform fees (not user savings).

---

## Tech Stack

- **Smart Contracts:** Solidity, Hardhat / Foundry
- **Frontend:** Next.js 14 (App Router), React, TailwindCSS
- **Web3 Integration:** Wagmi, Viem, Ethers.js
- **Enhancements:** Optional integrations with Three.js or charting libraries for data visualization

---

## Smart Contract Functions

```solidity
createGroup(uint256 targetAmount, uint256 maxMembers)
// Create a thrift/savings group

joinGroup(uint256 groupId)
// Join an existing group

contribute(uint256 groupId)
// Make a contribution to your thrift group

disburse(uint256 groupId)
// Release funds to the next eligible member

applyForLoan(uint256 groupId, uint256 amount)
// Request credit from pooled funds

contractEarnings()
// View platform earnings

withdrawEarnings(address payable _to)
// Withdraw platform fees (admin only)
```

---

## Frontend Modules

- **GroupCreator** → Create new thrift groups
- **JoinGroup** → Join existing groups
- **ContributeForm** → Make periodic contributions
- **PayoutTracker** → View payout schedule & status
- **LoanDesk** → Request or repay loans from group pool
- **EarningsDisplay** → Show protocol earnings
- **WithdrawEarnings** → Admin panel for fee withdrawal

---

## Use Cases

- **Community Thrift (Ajo/Esusu/Adashe):** Families, friends, and peers rotate contributions and payouts.
- **Cooperative Savings & Loans:** Associations or SMEs pool capital for credit access.
- **DeFi-Enhanced Rotational Groups:** Contributions are staked or invested to earn additional yield.
- **Transparent Micro-Crowdfunding:** Small groups raise, manage, and distribute funds securely.

---

## Tokenomics & Fee Model (Draft)

To ensure sustainability and incentivize adoption, DeST can implement:

- **Platform Fees:** A small fee (e.g., 0.5–1%) on contributions or disbursements, sent to protocol treasury.
- **Loan Interest Split:** Loans repaid with interest — split between liquidity providers (contributors) and the protocol.
- **Staking/Governance:** Future native token for voting on parameters (fees, loan rates, group policies).
- **Treasury Allocation:** Portion of earnings reinvested in grants, ecosystem growth, or liquidity incentives.

---

In short: **DeST = cultural savings model + blockchain trust + DeFi growth.**
