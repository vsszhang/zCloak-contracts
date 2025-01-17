# z-profile
Smart contracts of zkID on evm-compatible blockchain. 

## What is the zkID APP
Privacy-preserving identity service for Web 3.0.

## Main Contracts
- KiltProofsV1: Smart contract for storing the verification result of STARKS proofs.
- RegulatedTransfer: An example contract that shows how to use link the result of a zkp computation to an ERC-20 fund transfer.

### Test Network
#### Moonbase Alpha:
|  Contract Names | Moonbase Addresses |
|  ----  | ----  |
| Registry address | 0x5417145E1e483f24FF8a15c9ebBee24fff179bc1 |
| Properties address | 0xc5217f20Cc3956c74aff65A01e550ed7cC4eD6Ef |
| Whitelist address | 0x4Cc6Ce9360d2249ad13Fe300D6Ac85B9CD3a538b |
| KiltProofsV1 address | 0x72AcB0f573287B3eE0375964D220158cD18465cb |
| SampleToken address | 0xE29e1CFDC236119194D7a6AbFFC8b0F6d2aDd6e5 |
| RegulatedTransfer address | 0xC8e2409A0E15CBe517E178972855D486e7E881e1 |

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
