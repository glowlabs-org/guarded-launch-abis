export const ImpactCatalystABI = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_usdc",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "router",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "factory",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "pair",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "GCC",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "UNISWAP_ROUTER",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IUniswapRouterV2"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "UNISWAP_V2_FACTORY",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "UNISWAP_V2_PAIR",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "USDC",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "commitGCC",
        "inputs": [
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "minImpactPower",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "usdcEffect",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "nominations",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "commitUSDC",
        "inputs": [
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "minImpactPower",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "nominations",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "estimateGCCCommitImpactPower",
        "inputs": [
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "expectedImpactPower",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "estimateUSDCCommitImpactPower",
        "inputs": [
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "expectedImpactPower",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "findOptimalAmountToSwap",
        "inputs": [
            {
                "name": "amountTocommit",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "totalReservesOfToken",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "error",
        "name": "CallerNotGCC",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotEnoughImpactPowerFromCommitment",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PrecisionLossLeadToUnderflow",
        "inputs": []
    }
]