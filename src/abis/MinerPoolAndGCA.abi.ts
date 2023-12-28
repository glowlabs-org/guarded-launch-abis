export const MinerPoolAndGCAABI = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_gcaAgents",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "_glowToken",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_governance",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_requirementsHash",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "_earlyLiquidity",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_usdcToken",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_vetoCouncil",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_holdingContract",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_gcc",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH",
        "inputs": [],
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
        "name": "GCC",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IGCC"
            }
        ],
        "stateMutability": "view"
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
        "name": "GLOW_REWARDS_PER_BUCKET",
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
                "internalType": "contract IGlow"
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
        "name": "HOLDING_CONTRACT",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract ISafetyDelay"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "OFFSET_LEFT",
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
        "name": "OFFSET_RIGHT",
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
        "name": "SHARES_REQUIRED_PER_COMP_PLAN",
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
        "name": "TOTAL_VESTING_PERIODS",
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
        "name": "allGcas",
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
        "type": "function",
        "name": "amountWithdrawnAtPaymentNonce",
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
        "name": "bucket",
        "inputs": [
            {
                "name": "bucketId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "bucket",
                "type": "tuple",
                "internalType": "struct IGCA.Bucket",
                "components": [
                    {
                        "name": "originalNonce",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "lastUpdatedNonce",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "finalizationTimestamp",
                        "type": "uint128",
                        "internalType": "uint128"
                    },
                    {
                        "name": "reports",
                        "type": "tuple[]",
                        "internalType": "struct IGCA.Report[]",
                        "components": [
                            {
                                "name": "totalNewGCC",
                                "type": "uint128",
                                "internalType": "uint128"
                            },
                            {
                                "name": "totalGLWRewardsWeight",
                                "type": "uint64",
                                "internalType": "uint64"
                            },
                            {
                                "name": "totalGRCRewardsWeight",
                                "type": "uint64",
                                "internalType": "uint64"
                            },
                            {
                                "name": "merkleRoot",
                                "type": "bytes32",
                                "internalType": "bytes32"
                            },
                            {
                                "name": "proposingAgent",
                                "type": "address",
                                "internalType": "address"
                            }
                        ]
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "bucketClaimBitmap",
        "inputs": [
            {
                "name": "bucketId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
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
        "name": "bucketDelayDuration",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "bucketEndSubmissionTimestampNotReinstated",
        "inputs": [
            {
                "name": "bucketId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint128",
                "internalType": "uint128"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "bucketFinalizationTimestampNotReinstated",
        "inputs": [
            {
                "name": "bucketId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint128",
                "internalType": "uint128"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "bucketGlobalState",
        "inputs": [
            {
                "name": "bucketId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct IGCA.BucketGlobalState",
                "components": [
                    {
                        "name": "totalNewGCC",
                        "type": "uint128",
                        "internalType": "uint128"
                    },
                    {
                        "name": "totalGLWRewardsWeight",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "totalGRCRewardsWeight",
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
        "name": "bucketStartSubmissionTimestampNotReinstated",
        "inputs": [
            {
                "name": "bucketId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint128",
                "internalType": "uint128"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "claimGlowFromInflation",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "claimPayout",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "paymentNonce",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "activeGCAsAtPaymentNonce",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "userIndex",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "claimFromInflation",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "sig",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "claimRewardFromBucket",
        "inputs": [
            {
                "name": "bucketId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "glwWeight",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "usdcWeight",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "proof",
                "type": "bytes32[]",
                "internalType": "bytes32[]"
            },
            {
                "name": "index",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "claimFromInflation",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "signature",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "createClaimRewardFromBucketDigest",
        "inputs": [
            {
                "name": "bucketId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "glwWeight",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "usdcWeight",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "index",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "claimFromInflation",
                "type": "bool",
                "internalType": "bool"
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
        "name": "createRelayDigest",
        "inputs": [
            {
                "name": "relayer",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "paymentNonce",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "relayNonce",
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
        "name": "currentBucket",
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
        "name": "delayBucketFinalization",
        "inputs": [
            {
                "name": "bucketId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "donateToUSDCMinerRewardsPool",
        "inputs": [
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "donateToUSDCMinerRewardsPoolEarlyLiquidity",
        "inputs": [
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "earlyLiquidity",
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
        "name": "eip712Domain",
        "inputs": [],
        "outputs": [
            {
                "name": "fields",
                "type": "bytes1",
                "internalType": "bytes1"
            },
            {
                "name": "name",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "version",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "chainId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "verifyingContract",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "salt",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "extensions",
                "type": "uint256[]",
                "internalType": "uint256[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "executeAgainstHash",
        "inputs": [
            {
                "name": "gcasToSlash",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "newGCAs",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "proposalCreationTimestamp",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "gcaAgents",
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
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "gcaPayoutData",
        "inputs": [
            {
                "name": "gca",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct IGCA.GCAPayout",
                "components": [
                    {
                        "name": "lastClaimedTimestamp",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "maxClaimTimestamp",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "totalSlashableBalance",
                        "type": "uint128",
                        "internalType": "uint128"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getBucketTracker",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct BucketSubmission.BucketTracker",
                "components": [
                    {
                        "name": "lastUpdatedBucket",
                        "type": "uint48",
                        "internalType": "uint48"
                    },
                    {
                        "name": "maxBucketId",
                        "type": "uint48",
                        "internalType": "uint48"
                    },
                    {
                        "name": "firstAddedBucketId",
                        "type": "uint48",
                        "internalType": "uint48"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getPayoutData",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "paymentNonce",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "activeGCAsAtPaymentNonce",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "userIndex",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "withdrawableAmount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "slashableAmount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "amountAlreadyWithdrawn",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getProposalHashes",
        "inputs": [
            {
                "name": "start",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "end",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes32[]",
                "internalType": "bytes32[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getProposalHashes",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bytes32[]",
                "internalType": "bytes32[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "handleMintToCarbonCreditAuction",
        "inputs": [
            {
                "name": "bucketId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "hasBucketBeenDelayed",
        "inputs": [
            {
                "name": "bucketId",
                "type": "uint256",
                "internalType": "uint256"
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
        "name": "isBucketFinalized",
        "inputs": [
            {
                "name": "bucketId",
                "type": "uint256",
                "internalType": "uint256"
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
        "name": "isGCA",
        "inputs": [
            {
                "name": "account",
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
        "name": "isGCA",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "index",
                "type": "uint256",
                "internalType": "uint256"
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
        "name": "isSlashed",
        "inputs": [
            {
                "name": "",
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
        "name": "nextProposalIndexToUpdate",
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
        "name": "nextRelayNonce",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
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
        "name": "paymentNonceToCompensationPlan",
        "inputs": [
            {
                "name": "nonce",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "index",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint32[5]",
                "internalType": "uint32[5]"
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
        "name": "payoutNonceToGCAHash",
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
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "proposalHashes",
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
        "name": "pushHash",
        "inputs": [
            {
                "name": "hash",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "incrementSlashNonce",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "requirementsHash",
        "inputs": [],
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
        "name": "reward",
        "inputs": [
            {
                "name": "id",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct BucketSubmission.WeeklyReward",
                "components": [
                    {
                        "name": "inheritedFromLastWeek",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "amountInBucket",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "amountToDeduct",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "setRequirementsHash",
        "inputs": [
            {
                "name": "_requirementsHash",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "slashNonce",
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
        "name": "slashNonceToSlashTimestamp",
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
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "submitCompensationPlan",
        "inputs": [
            {
                "name": "plan",
                "type": "uint32[5]",
                "internalType": "uint32[5]"
            },
            {
                "name": "indexOfGCA",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "submitWeeklyReport",
        "inputs": [
            {
                "name": "bucketId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "totalNewGCC",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "totalGlwRewardsWeight",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "totalGRCRewardsWeight",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "root",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "submitWeeklyReportWithBytes",
        "inputs": [
            {
                "name": "bucketId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "totalNewGCC",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "totalGlwRewardsWeight",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "totalGRCRewardsWeight",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "root",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "data",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "AmountDonatedToBucket",
        "inputs": [
            {
                "name": "bucketId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "totalAmountDonated",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "BucketSubmissionEvent",
        "inputs": [
            {
                "name": "bucketId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "gca",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "slashNonce",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "totalNewGCC",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "totalGlwRewardsWeight",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "totalGRCRewardsWeight",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "root",
                "type": "bytes32",
                "indexed": false,
                "internalType": "bytes32"
            },
            {
                "name": "extraData",
                "type": "bytes",
                "indexed": false,
                "internalType": "bytes"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "CompensationPlanSubmitted",
        "inputs": [
            {
                "name": "agent",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "plan",
                "type": "uint32[5]",
                "indexed": false,
                "internalType": "uint32[5]"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "EIP712DomainChanged",
        "inputs": [],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "GCAPayoutClaimed",
        "inputs": [
            {
                "name": "agent",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "totalSlashableBalance",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "GCAsSlashed",
        "inputs": [
            {
                "name": "slashedGcas",
                "type": "address[]",
                "indexed": false,
                "internalType": "address[]"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "NewGCAsAppointed",
        "inputs": [
            {
                "name": "newGcas",
                "type": "address[]",
                "indexed": false,
                "internalType": "address[]"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ProposalHashPushed",
        "inputs": [
            {
                "name": "proposalHash",
                "type": "bytes32",
                "indexed": false,
                "internalType": "bytes32"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ProposalHashUpdate",
        "inputs": [
            {
                "name": "index",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "proposalHash",
                "type": "bytes32",
                "indexed": false,
                "internalType": "bytes32"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "RequirementsHashUpdated",
        "inputs": [
            {
                "name": "requirementsHash",
                "type": "bytes32",
                "indexed": false,
                "internalType": "bytes32"
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
        "name": "AlreadyMintedToCarbonCreditAuction",
        "inputs": []
    },
    {
        "type": "error",
        "name": "BucketAlreadyDelayed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "BucketAlreadyFinalized",
        "inputs": []
    },
    {
        "type": "error",
        "name": "BucketIndexOutOfBounds",
        "inputs": []
    },
    {
        "type": "error",
        "name": "BucketNotFinalized",
        "inputs": []
    },
    {
        "type": "error",
        "name": "BucketSubmissionEnded",
        "inputs": []
    },
    {
        "type": "error",
        "name": "BucketSubmissionNotOpen",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CallerNotEarlyLiquidity",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CallerNotGCA",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CallerNotGCAAtIndex",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CallerNotGovernance",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CallerNotVetoCouncilMember",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CannotDelayBucketThatNeedsToUpdateSlashNonce",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CannotDelayEmptyBucket",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CannotSetNonceToZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CompensationPlanLengthMustBeGreaterThanZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ElectricityFutureAuctionBidMustBeGreaterThanMinimumBid",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ElectricityFuturesAuctionAuthorizationTooLong",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ElectricityFuturesAuctionBidTooLow",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ElectricityFuturesAuctionEnded",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ElectricityFuturesAuctionInvalidSignature",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ElectricityFuturesSignatureExpired",
        "inputs": []
    },
    {
        "type": "error",
        "name": "EmptyRoot",
        "inputs": []
    },
    {
        "type": "error",
        "name": "FailedInnerCall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "GCCAlreadySet",
        "inputs": []
    },
    {
        "type": "error",
        "name": "GlowWeightGreaterThanTotalWeight",
        "inputs": []
    },
    {
        "type": "error",
        "name": "GlowWeightOverflow",
        "inputs": []
    },
    {
        "type": "error",
        "name": "HashesNotUpdated",
        "inputs": []
    },
    {
        "type": "error",
        "name": "IndexDoesNotMatchNextProposalIndex",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InsufficientShares",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidGCAHash",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidProof",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidRelaySignature",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidShares",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidShortString",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidUserIndex",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NoBalanceToPayout",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotGCA",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotUSDCToken",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ProposalAlreadyUpdated",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ProposalHashDoesNotMatch",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ProposalHashesEmpty",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ProposalHashesNotUpdated",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ReportGCCMustBeLT200Billion",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ReportWeightMustBeLTUint64MaxDiv5",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SafeCastOverflowedUintDowncast",
        "inputs": [
            {
                "name": "bits",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "value",
                "type": "uint256",
                "internalType": "uint256"
            }
        ]
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
        "name": "SignatureDoesNotMatchUser",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SignerNotGCA",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SlashedAgentCannotClaimReward",
        "inputs": []
    },
    {
        "type": "error",
        "name": "StringTooLong",
        "inputs": [
            {
                "name": "str",
                "type": "string",
                "internalType": "string"
            }
        ]
    },
    {
        "type": "error",
        "name": "USDCWeightGreaterThanTotalWeight",
        "inputs": []
    },
    {
        "type": "error",
        "name": "USDCWeightOverflow",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UserAlreadyClaimed",
        "inputs": []
    }
]