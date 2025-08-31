# 🪙 DeST  
### *Decentralized Savings and Thrift (Onchain Ajo)*

DeST is a decentralized platform for **group savings and thrift contributions (Ajo/Esusu/Adashe)** built on the blockchain.  
It enables transparent, secure, and automated management of group contributions without middlemen.  

By leveraging **smart contracts**, DeST ensures trustless contributions, automated record-keeping, and fair withdrawals.  

---

## 🚀 Features
- **Group Creation** – Anyone can create a thrift/savings group with a target contribution and size.  
- **Join Groups** – Users can join existing groups transparently.  
- **Automated Savings** – Members contribute funds on-chain securely.  
- **Fair Distribution** – Smart contracts enforce transparent fund allocation.  
- **Earnings** – The protocol collects fees (platform earnings) for sustainability.  
- **Admin Withdrawals** – Only designated admins can withdraw platform earnings.  

---

## 🛠️ Tech Stack
- **Smart Contracts:** Solidity, Hardhat / Foundry  
- **Frontend:** Next.js 14 (App Router), React, TailwindCSS  
- **Web3 Integration:** Wagmi, Ethers.js, Viem  
- **UI Enhancements:** Three.js (optional for 3D/visualizations)  

---
## ⚡ Smart Contract Functions

### `createGroup(uint256 targetAmount, uint256 maxMembers)`  
Create a new thrift group.  

### `joinGroup(uint256 groupId)`  
Join an existing thrift group.  

### `contribute(uint256 groupId)`  
Contribute funds to your thrift group.  

### `contractEarnings()`  
View total platform earnings.  

### `withdrawEarnings(address payable _to)`  
Withdraw platform earnings to a designated address.  

---

## 🖥️ Frontend Components

- **GroupCreator** → Create new groups  
- **JoinGroup** → Join existing groups  
- **ContributeForm** → Make contributions  
- **EarningsDisplay** → View platform earnings  
- **WithdrawEarnings** → Withdraw collected fees  

---

## 🌍 Use Cases

- **Thrift Contributions (Ajo/Esusu/Adashe):** Friends or communities contribute funds periodically.  
- **Cooperative Savings:** Businesses or associations save together.  
- **Transparent Crowdfunding:** Small groups raise and distribute funds transparently.  

