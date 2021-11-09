/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { GlobalsAndUtility } from "./GlobalsAndUtility";

export class GlobalsAndUtilityFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<GlobalsAndUtility> {
    return super.deploy(overrides || {}) as Promise<GlobalsAndUtility>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GlobalsAndUtility {
    return super.attach(address) as GlobalsAndUtility;
  }
  connect(signer: Signer): GlobalsAndUtilityFactory {
    return super.connect(signer) as GlobalsAndUtilityFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GlobalsAndUtility {
    return new Contract(address, _abi, signerOrProvider) as GlobalsAndUtility;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "data0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "data1",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes20",
        name: "btcAddr",
        type: "bytes20",
      },
      {
        indexed: true,
        internalType: "address",
        name: "claimToAddr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "referrerAddr",
        type: "address",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "data0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "data1",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "data2",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "senderAddr",
        type: "address",
      },
    ],
    name: "ClaimAssist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "data0",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "updaterAddr",
        type: "address",
      },
    ],
    name: "DailyDataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "data0",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint40",
        name: "stakeId",
        type: "uint40",
      },
    ],
    name: "ShareRateChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "data0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "data1",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "stakerAddr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint40",
        name: "stakeId",
        type: "uint40",
      },
    ],
    name: "StakeEnd",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "data0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "data1",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "stakerAddr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint40",
        name: "stakeId",
        type: "uint40",
      },
      {
        indexed: true,
        internalType: "address",
        name: "senderAddr",
        type: "address",
      },
    ],
    name: "StakeGoodAccounting",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "data0",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "stakerAddr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint40",
        name: "stakeId",
        type: "uint40",
      },
    ],
    name: "StakeStart",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "data0",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "memberAddr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "entryId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "referrerAddr",
        type: "address",
      },
    ],
    name: "XfLobbyEnter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "data0",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "memberAddr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "entryId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "referrerAddr",
        type: "address",
      },
    ],
    name: "XfLobbyExit",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "allocatedSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes20",
        name: "",
        type: "bytes20",
      },
    ],
    name: "btcAddressClaims",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "currentDay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "dailyData",
    outputs: [
      {
        internalType: "uint72",
        name: "dayPayoutTotal",
        type: "uint72",
      },
      {
        internalType: "uint72",
        name: "dayStakeSharesTotal",
        type: "uint72",
      },
      {
        internalType: "uint56",
        name: "dayUnclaimedSatoshisTotal",
        type: "uint56",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "beginDay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endDay",
        type: "uint256",
      },
    ],
    name: "dailyDataRange",
    outputs: [
      {
        internalType: "uint256[]",
        name: "list",
        type: "uint256[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "beforeDay",
        type: "uint256",
      },
    ],
    name: "dailyDataUpdate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "globalInfo",
    outputs: [
      {
        internalType: "uint256[13]",
        name: "",
        type: "uint256[13]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "globals",
    outputs: [
      {
        internalType: "uint72",
        name: "lockedHeartsTotal",
        type: "uint72",
      },
      {
        internalType: "uint72",
        name: "nextStakeSharesTotal",
        type: "uint72",
      },
      {
        internalType: "uint40",
        name: "shareRate",
        type: "uint40",
      },
      {
        internalType: "uint72",
        name: "stakePenaltyTotal",
        type: "uint72",
      },
      {
        internalType: "uint16",
        name: "dailyDataCount",
        type: "uint16",
      },
      {
        internalType: "uint72",
        name: "stakeSharesTotal",
        type: "uint72",
      },
      {
        internalType: "uint40",
        name: "latestStakeId",
        type: "uint40",
      },
      {
        internalType: "uint128",
        name: "claimStats",
        type: "uint128",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stakeLists",
    outputs: [
      {
        internalType: "uint40",
        name: "stakeId",
        type: "uint40",
      },
      {
        internalType: "uint72",
        name: "stakedHearts",
        type: "uint72",
      },
      {
        internalType: "uint72",
        name: "stakeShares",
        type: "uint72",
      },
      {
        internalType: "uint16",
        name: "lockedDay",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "stakedDays",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "unlockedDay",
        type: "uint16",
      },
      {
        internalType: "bool",
        name: "isAutoStake",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "xfLobby",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "xfLobbyMembers",
    outputs: [
      {
        internalType: "uint40",
        name: "headIndex",
        type: "uint40",
      },
      {
        internalType: "uint40",
        name: "tailIndex",
        type: "uint40",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052612833806100136000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806370a08231116100b857806395d89b411161007c57806395d89b4114610739578063a457c2d7146107bc578063a9059cbb14610822578063c312452514610888578063dd62ed3e14610977578063f04b5fa0146109ef57610142565b806370a082311461058e5780637c426620146105e657806387a0f31c1461063b5780638f1c65c01461067d57806390de6871146106ab57610142565b8063313ce5671161010a578063313ce567146103b657806339509351146103da5780633a70a5ca1461044057806344203faf1461045e5780635c9302c9146104e35780636a210a0e1461050157610142565b806306fdde0314610147578063095ea7b3146101ca57806318160ddd1461023057806323b872dd1461024e5780632607443b146102d4575b600080fd5b61014f610a35565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561018f578082015181840152602081019050610174565b50505050905090810190601f1680156101bc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610216600480360360408110156101e057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a6e565b604051808215151515815260200191505060405180910390f35b610238610a8c565b6040518082815260200191505060405180910390f35b6102ba6004803603606081101561026457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a96565b604051808215151515815260200191505060405180910390f35b610320600480360360408110156102ea57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b6f565b604051808864ffffffffff1664ffffffffff1681526020018768ffffffffffffffffff1668ffffffffffffffffff1681526020018668ffffffffffffffffff1668ffffffffffffffffff1681526020018561ffff1661ffff1681526020018461ffff1661ffff1681526020018361ffff1661ffff1681526020018215151515815260200197505050505050505060405180910390f35b6103be610c39565b604051808260ff1660ff16815260200191505060405180910390f35b610426600480360360408110156103f057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c3e565b604051808215151515815260200191505060405180910390f35b610448610cf1565b6040518082815260200191505060405180910390f35b6104aa6004803603604081101561047457600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d27565b604051808364ffffffffff1664ffffffffff1681526020018264ffffffffff1664ffffffffff1681526020019250505060405180910390f35b6104eb610d7a565b6040518082815260200191505060405180910390f35b6105376004803603604081101561051757600080fd5b810190808035906020019092919080359060200190929190505050610d89565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561057a57808201518184015260208101905061055f565b505050509050019250505060405180910390f35b6105d0600480360360208110156105a457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f52565b6040518082815260200191505060405180910390f35b610621600480360360208110156105fc57600080fd5b8101908080356bffffffffffffffffffffffff19169060200190929190505050610f9a565b604051808215151515815260200191505060405180910390f35b6106676004803603602081101561065157600080fd5b8101908080359060200190929190505050610fba565b6040518082815260200191505060405180910390f35b6106a96004803603602081101561069357600080fd5b8101908080359060200190929190505050610fd2565b005b6106d7600480360360208110156106c157600080fd5b81019080803590602001909291905050506110ff565b604051808468ffffffffffffffffff1668ffffffffffffffffff1681526020018368ffffffffffffffffff1668ffffffffffffffffff1681526020018266ffffffffffffff1666ffffffffffffff168152602001935050505060405180910390f35b610741611166565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610781578082015181840152602081019050610766565b50505050905090810190601f1680156107ae5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610808600480360360408110156107d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061119f565b604051808215151515815260200191505060405180910390f35b61086e6004803603604081101561083857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061126c565b604051808215151515815260200191505060405180910390f35b61089061128a565b604051808968ffffffffffffffffff1668ffffffffffffffffff1681526020018868ffffffffffffffffff1668ffffffffffffffffff1681526020018764ffffffffff1664ffffffffff1681526020018668ffffffffffffffffff1668ffffffffffffffffff1681526020018561ffff1661ffff1681526020018468ffffffffffffffffff1668ffffffffffffffffff1681526020018364ffffffffff1664ffffffffff168152602001826fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019850505050505050505060405180910390f35b6109d96004803603604081101561098d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611360565b6040518082815260200191505060405180910390f35b6109f76113e7565b6040518082600d60200280838360005b83811015610a22578082015181840152602081019050610a07565b5050505090500191505060405180910390f35b6040518060400160405280600381526020017f484558000000000000000000000000000000000000000000000000000000000081525081565b6000610a82610a7b611590565b8484611598565b6001905092915050565b6000600254905090565b6000610aa384848461178f565b610b6484610aaf611590565b610b5f8560405180606001604052806028815260200161276960289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610b15611590565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a459092919063ffffffff16565b611598565b600190509392505050565b60076020528160005260406000208181548110610b8857fe5b90600052602060002001600091509150508060000160009054906101000a900464ffffffffff16908060000160059054906101000a900468ffffffffffffffffff169080600001600e9054906101000a900468ffffffffffffffffff16908060000160179054906101000a900461ffff16908060000160199054906101000a900461ffff169080600001601b9054906101000a900461ffff169080600001601d9054906101000a900460ff16905087565b600881565b6000610ce7610c4b611590565b84610ce28560016000610c5c611590565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611b0590919063ffffffff16565b611598565b6001905092915050565b6000600360000160009054906101000a900468ffffffffffffffffff1668ffffffffffffffffff16610d21610a8c565b01905090565b6009602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900464ffffffffff16908060000160059054906101000a900464ffffffffff16905082565b6000610d84611b8d565b905090565b60608183108015610db15750600360010160009054906101000a900461ffff1661ffff168211155b610e23576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f4845583a2072616e676520696e76616c6964000000000000000000000000000081525060200191505060405180910390fd5b828203604051908082528060200260200182016040528015610e545781602001602082028038833980820191505090505b5090506000839050600080905060005b60026048026006600085815260200190815260200160002060000160129054906101000a900466ffffffffffffff1666ffffffffffffff16901b905060486006600085815260200190815260200160002060000160099054906101000a900468ffffffffffffffffff1668ffffffffffffffffff16901b811790506006600084815260200190815260200160002060000160009054906101000a900468ffffffffffffffffff1668ffffffffffffffffff168117905080848380600101945081518110610f2d57fe5b602002602001018181525050848360010193508310610e645783935050505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60056020528060005260406000206000915054906101000a900460ff1681565b60086020528060005260406000206000915090505481565b610fda612632565b610fe2612632565b610fec8282611ba7565b600182610140015111611067576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4845583a20546f6f206561726c7900000000000000000000000000000000000081525060200191505060405180910390fd5b600083146110de578161014001518311156110cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806126fb6026913960400191505060405180910390fd5b6110d982846000611d42565b6110f0565b6110ef828361014001516000611d42565b5b6110fa8282611e20565b505050565b60066020528060005260406000206000915090508060000160009054906101000a900468ffffffffffffffffff16908060000160099054906101000a900468ffffffffffffffffff16908060000160129054906101000a900466ffffffffffffff16905083565b6040518060400160405280600381526020017f484558000000000000000000000000000000000000000000000000000000000081525081565b60006112626111ac611590565b8461125d856040518060600160405280602581526020016127da60259139600160006111d6611590565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a459092919063ffffffff16565b611598565b6001905092915050565b6000611280611279611590565b848461178f565b6001905092915050565b60038060000160009054906101000a900468ffffffffffffffffff16908060000160099054906101000a900468ffffffffffffffffff16908060000160129054906101000a900464ffffffffff16908060000160179054906101000a900468ffffffffffffffffff16908060010160009054906101000a900461ffff16908060010160029054906101000a900468ffffffffffffffffff169080600101600b9054906101000a900464ffffffffff16908060010160109054906101000a90046fffffffffffffffffffffffffffffffff16905088565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6113ef612693565b600080600061141e600360010160109054906101000a90046fffffffffffffffffffffffffffffffff16612086565b809350819450829550505050604051806101a00160405280600360000160009054906101000a900468ffffffffffffffffff1668ffffffffffffffffff168152602001600360000160099054906101000a900468ffffffffffffffffff1668ffffffffffffffffff168152602001600360000160129054906101000a900464ffffffffff1664ffffffffff168152602001600360000160179054906101000a900468ffffffffffffffffff1668ffffffffffffffffff168152602001600360010160009054906101000a900461ffff1661ffff168152602001600360010160029054906101000a900468ffffffffffffffffff1668ffffffffffffffffff1681526020016003600101600b9054906101000a900464ffffffffff1664ffffffffff168152602001828152602001838152602001848152602001428152602001611565610a8c565b815260200160086000611576611b8d565b815260200190815260200160002054815250935050505090565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561161e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806127b66024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156116a4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806127216022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611815576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806127916025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561189b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806126d86023913960400191505060405180910390fd5b61190681604051806060016040528060268152602001612743602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a459092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611999816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611b0590919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290611af2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611ab7578082015181840152602081019050611a9c565b50505050905090810190601f168015611ae45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b600080828401905083811015611b83576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600062015180635de5a580420381611ba157fe5b04905090565b600360000160009054906101000a900468ffffffffffffffffff1668ffffffffffffffffff16826000018181525050600360000160099054906101000a900468ffffffffffffffffff1668ffffffffffffffffff16826020018181525050600360000160129054906101000a900464ffffffffff1664ffffffffff16826040018181525050600360000160179054906101000a900468ffffffffffffffffff1668ffffffffffffffffff16826060018181525050600360010160009054906101000a900461ffff1661ffff16826080018181525050600360010160029054906101000a900468ffffffffffffffffff1668ffffffffffffffffff168260a00181815250506003600101600b9054906101000a900464ffffffffff168260c0019064ffffffffff16908164ffffffffff1681525050611d05600360010160109054906101000a90046fffffffffffffffffffffffffffffffff16612086565b846101200185610100018660e001838152508381525083815250505050611d2a611b8d565b82610140018181525050611d3e828261211d565b5050565b81836080015110611d5257611e1b565b611d5a6126b6565b8360000151611d67610a8c565b01816000018181525050600084608001519050611d858583836121c1565b6000856020015114611db15784602001518560a001818151019150818152505060008560200181815250505b5b83816001019150811015611dd057611dcb8583836121c1565b611db2565b611ddf85608001518285612296565b808560800181815250506000826020015114611e1857611e17739a6a414d6f3497c05e3b1de90520765fa1e07c038360200151612329565b5b50505b505050565b80600001518260000151141580611e3f57508060200151826020015114155b80611e5257508060400151826040015114155b80611e6557508060600151826060015114155b15611f2b578160000151600360000160006101000a81548168ffffffffffffffffff021916908368ffffffffffffffffff1602179055508160200151600360000160096101000a81548168ffffffffffffffffff021916908368ffffffffffffffffff1602179055508160400151600360000160126101000a81548164ffffffffff021916908364ffffffffff1602179055508160600151600360000160176101000a81548168ffffffffffffffffff021916908368ffffffffffffffffff1602179055505b80608001518260800151141580611f4a57508060a001518260a0015114155b80611f6b57508060c0015164ffffffffff168260c0015164ffffffffff1614155b80611f7e57508060e001518260e0015114155b80611f93575080610100015182610100015114155b80611fa8575080610120015182610120015114155b15612082578160800151600360010160006101000a81548161ffff021916908361ffff1602179055508160a00151600360010160026101000a81548168ffffffffffffffffff021916908368ffffffffffffffffff1602179055508160c001516003600101600b6101000a81548164ffffffffff021916908364ffffffffff1602179055506120468261012001518361010001518460e001516124e4565b600360010160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505b5050565b60008060006002603302846fffffffffffffffffffffffffffffffff16901c6fffffffffffffffffffffffffffffffff169250600160336001901b036033856fffffffffffffffffffffffffffffffff16901c6fffffffffffffffffffffffffffffffff16169150600160336001901b03846fffffffffffffffffffffffffffffffff161690508282829250925092509193909250565b816000015181600001818152505081602001518160200181815250508160400151816040018181525050816060015181606001818152505081608001518160800181815250508160a001518160a00181815250508160c001518160c0019064ffffffffff16908164ffffffffff16815250508160e001518160e001818152505081610100015181610100018181525050816101200151816101200181815250505050565b6121cc83838361250a565b81604001516006600083815260200190815260200160002060000160006101000a81548168ffffffffffffffffff021916908368ffffffffffffffffff1602179055508260a001516006600083815260200190815260200160002060000160096101000a81548168ffffffffffffffffff021916908368ffffffffffffffffff1602179055508260e001516006600083815260200190815260200160002060000160126101000a81548166ffffffffffffff021916908366ffffffffffffff160217905550505050565b3373ffffffffffffffffffffffffffffffffffffffff167fb8d6eb541ded1720cc657b719f57abcb1fe4711cb7ead82751b135f5d94bc944826122da5760006122e6565b69010000000000000000005b69ffffffffffffffffffff1660388561ffff16901b60288761ffff16901b4264ffffffffff161717176040518082815260200191505060405180910390a2505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156123cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6123e181600254611b0590919063ffffffff16565b600281905550612438816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611b0590919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600080600260330285901b9050603384901b811790508281179050809150509392505050565b6305fcbae36127108360000151028161251f57fe5b0482604001818152505060076032026001018110156125be57600060076032026127106305f5e100600860ff16600a0a8161255657fe5b04028560e00151028161256557fe5b049050600061257a85838660400151016125ef565b8201905080846020018181510191508181525050808460000181815101915081815250506125ac8585604001516125ef565b84604001818151019150818152505050505b60008360600151146125ea57826060015182604001818151019150818152505060008360600181815250505b505050565b6000806301ab362e84610120015184028161260657fe5b049050600066033bb85fc52d9985610100015185028161262257fe5b0490508082019250505092915050565b604051806101600160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600064ffffffffff168152602001600081526020016000815260200160008152602001600081525090565b604051806101a00160405280600d90602082028038833980820191505090505090565b6040518060600160405280600081526020016000815260200160008152509056fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573734845583a206265666f72654461792063616e6e6f7420626520696e207468652066757475726545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa265627a7a72315820beb547447c546c0f20f5feee2fe5f372284328aff1b3f7b672fcbdb871e487c964736f6c634300050d0032";