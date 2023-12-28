export const EarlyLiquidityABI = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_usdcAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_holdingContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "_glowToken",
        type: "address",
        internalType: "address",
      },
      {
        name: "_minerPoolAddress",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "GLOW_TOKEN",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IERC20",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "HOLDING_CONTRACT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "MINER_POOL",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IMinerPool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "MIN_TOKEN_INCREMENT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "TOTAL_INCREMENTS_TO_SELL",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "USDC_DECIMALS",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "USDC_TOKEN",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IERC20",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "buy",
    inputs: [
      {
        name: "increments",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "maxCost",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getCurrentPrice",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPrice",
    inputs: [
      {
        name: "incrementsToPurchase",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSold",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "Purchase",
    inputs: [
      {
        name: "buyer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "glwReceived",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "totalUSDCSpent",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "AddressEmptyCode",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "AddressInsufficientBalance",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "AllSold",
    inputs: [],
  },
  {
    type: "error",
    name: "FailedInnerCall",
    inputs: [],
  },
  {
    type: "error",
    name: "MinerPoolAlreadySet",
    inputs: [],
  },
  {
    type: "error",
    name: "ModNotZero",
    inputs: [],
  },
  {
    type: "error",
    name: "PriceTooHigh",
    inputs: [],
  },
  {
    type: "error",
    name: "SafeERC20FailedOperation",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "TooManyIncrements",
    inputs: [],
  },
  {
    type: "error",
    name: "ZeroAddress",
    inputs: [],
  },
];
