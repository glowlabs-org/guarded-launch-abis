export const SafetyDelayABI = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_vetoCouncil",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_minerPool",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "DEFAULT_DELAY",
        "inputs": [],
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
        "type": "function",
        "name": "FIVE_WEEKS",
        "inputs": [],
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
        "type": "function",
        "name": "MINER_POOL",
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
        "name": "NINETY_DAYS",
        "inputs": [],
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
        "type": "function",
        "name": "VETO_COUNCIL",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IVetoCouncil"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "VETO_HOLDING_DELAY",
        "inputs": [],
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
        "type": "function",
        "name": "addHolding",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "token",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint192",
                "internalType": "uint192"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "claimHoldingSingleton",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "token",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "claimHoldings",
        "inputs": [
            {
                "name": "args",
                "type": "tuple[]",
                "internalType": "struct ClaimHoldingArgs[]",
                "components": [
                    {
                        "name": "user",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "token",
                        "type": "address",
                        "internalType": "address"
                    }
                ]
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "delayNetwork",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "holdings",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "token",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct Holding",
                "components": [
                    {
                        "name": "amount",
                        "type": "uint192",
                        "internalType": "uint192"
                    },
                    {
                        "name": "expirationTimestamp",
                        "type": "uint64",
                        "internalType": "uint64"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "isNetworkFrozen",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "minimumWithdrawTimestamp",
        "inputs": [],
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
        "type": "event",
        "name": "HoldingAdded",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "token",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint192",
                "indexed": false,
                "internalType": "uint192"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "HoldingClaimed",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "token",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint192",
                "indexed": false,
                "internalType": "uint192"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "NetworkDelay",
        "inputs": [
            {
                "name": "vetoAgent",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "timestamp",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "AddressEmptyCode",
        "inputs": [
            {
                "name": "target",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "AddressInsufficientBalance",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "AlreadyWithdrawnFromHolding",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CallerMustBeVetoCouncilMember",
        "inputs": []
    },
    {
        "type": "error",
        "name": "DelayStillOnCooldown",
        "inputs": []
    },
    {
        "type": "error",
        "name": "FailedInnerCall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MinerPoolAlreadySet",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NetworkIsFrozen",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OnlyMinerPoolCanAddHoldings",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SafeERC20FailedOperation",
        "inputs": [
            {
                "name": "token",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "WithdrawalNotReady",
        "inputs": []
    }
]