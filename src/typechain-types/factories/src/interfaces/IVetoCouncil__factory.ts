/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IVetoCouncil,
  IVetoCouncilInterface,
} from "../../../src/interfaces/IVetoCouncil";

const _abi = [
  {
    inputs: [],
    name: "CallerNotGovernance",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxCouncilMembersExceeded",
    type: "error",
  },
  {
    inputs: [],
    name: "NoRewards",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddressInConstructor",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountNow",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountToBeVested",
        type: "uint256",
      },
    ],
    name: "CouncilMemberPayout",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldMember",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newMember",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "slashOldMember",
        type: "bool",
      },
    ],
    name: "VetoCouncilSeatsEdited",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oldMember",
        type: "address",
      },
      {
        internalType: "address",
        name: "newMember",
        type: "address",
      },
      {
        internalType: "bool",
        name: "slashOldMember",
        type: "bool",
      },
    ],
    name: "addAndRemoveCouncilMember",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "sync",
        type: "bool",
      },
      {
        internalType: "address[]",
        name: "members",
        type: "address[]",
      },
    ],
    name: "claimPayout",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "isCouncilMember",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IVetoCouncil__factory {
  static readonly abi = _abi;
  static createInterface(): IVetoCouncilInterface {
    return new utils.Interface(_abi) as IVetoCouncilInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVetoCouncil {
    return new Contract(address, _abi, signerOrProvider) as IVetoCouncil;
  }
}
