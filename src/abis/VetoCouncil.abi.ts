export const VetoCouncilABI = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "governance",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_glowToken",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_startingMembers",
                "type": "address[]",
                "internalType": "address[]"
            }
        ],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "GENESIS_TIMESTAMP",
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
        "name": "GLOW_TOKEN",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IERC20"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "GOVERNANCE",
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
        "name": "MAX_COUNCIL_MEMBERS",
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
        "name": "REWARDS_PER_SECOND_FOR_ALL",
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
        "name": "VESTING_REWARDS_PER_SECOND_FOR_ALL",
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
        "name": "addAndRemoveCouncilMember",
        "inputs": [
            {
                "name": "oldMember",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "newMember",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "slashOldMember",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "amountAlreadyWithdrawnFromPaymentNonce",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
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
        "type": "function",
        "name": "claimPayout",
        "inputs": [
            {
                "name": "member",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "nonce",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "sync",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "members",
                "type": "address[]",
                "internalType": "address[]"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "isCouncilMember",
        "inputs": [
            {
                "name": "member",
                "type": "address",
                "internalType": "address"
            }
        ],
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
        "name": "memberStatus",
        "inputs": [
            {
                "name": "member",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct Status",
                "components": [
                    {
                        "name": "isActive",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "isSlashed",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "indexInArray",
                        "type": "uint8",
                        "internalType": "uint8"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "numberOfCouncilMembers",
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
        "name": "paymentNonce",
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
        "name": "paymentNonceToShiftStartTimestamp",
        "inputs": [
            {
                "name": "nonce",
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
        "type": "function",
        "name": "paymentNonceTomembersHash",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "payoutData",
        "inputs": [
            {
                "name": "member",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "nonce",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "members",
                "type": "address[]",
                "internalType": "address[]"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            },
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
        "name": "pullGlowFromInflation",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "vetoCouncilMembers",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address[]",
                "internalType": "address[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "event",
        "name": "CouncilMemberPayout",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amountNow",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "amountToBeVested",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "PayoutClaimed",
        "inputs": [
            {
                "name": "member",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "nonce",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "VetoCouncilSeatsEdited",
        "inputs": [
            {
                "name": "oldMember",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newMember",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "slashOldMember",
                "type": "bool",
                "indexed": false,
                "internalType": "bool"
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
        "name": "CallerNotGovernance",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CannotSetNonceToZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "FailedInnerCall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "HashMismatch",
        "inputs": []
    },
    {
        "type": "error",
        "name": "HashesNotUpdated",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MaxCouncilMembersExceeded",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MaxSevenVetoCouncilMembers",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MemberNotFound",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NoRewards",
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
        "name": "ShiftHasNotStarted",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ZeroAddressInConstructor",
        "inputs": []
    }
]