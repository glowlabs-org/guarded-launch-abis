export const GovernanceABI = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "gcc",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "gca",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "vetoCouncil",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "grantsTreasury",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "glw",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "GCA",
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
        "name": "GLOW",
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
        "name": "GRANTS_TREASURY",
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
        "name": "SPEND_NOMINATIONS_ON_PROPOSAL_TYPEHASH",
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
        "name": "VETO_COUNCIL",
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
        "name": "costForNewProposal",
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
        "name": "createChangeGCARequirementsProposal",
        "inputs": [
            {
                "name": "newRequirementsHash",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "maxNominations",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "createChangeGCARequirementsProposalSigs",
        "inputs": [
            {
                "name": "newRequirementsHash",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "deadlines",
                "type": "uint256[]",
                "internalType": "uint256[]"
            },
            {
                "name": "nominationsToSpend",
                "type": "uint256[]",
                "internalType": "uint256[]"
            },
            {
                "name": "signers",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "sigs",
                "type": "bytes[]",
                "internalType": "bytes[]"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "createGCACouncilElectionOrSlashProposal",
        "inputs": [
            {
                "name": "agentsToSlash",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "newGCAs",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "maxNominations",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "createGCACouncilElectionOrSlashProposalSigs",
        "inputs": [
            {
                "name": "agentsToSlash",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "newGCAs",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "deadlines",
                "type": "uint256[]",
                "internalType": "uint256[]"
            },
            {
                "name": "nominationsToSpend",
                "type": "uint256[]",
                "internalType": "uint256[]"
            },
            {
                "name": "signers",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "sigs",
                "type": "bytes[]",
                "internalType": "bytes[]"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "createGrantsProposal",
        "inputs": [
            {
                "name": "grantsRecipient",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "hash",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "maxNominations",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "createGrantsProposalSigs",
        "inputs": [
            {
                "name": "grantsRecipient",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "hash",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "deadlines",
                "type": "uint256[]",
                "internalType": "uint256[]"
            },
            {
                "name": "nominationsToSpend",
                "type": "uint256[]",
                "internalType": "uint256[]"
            },
            {
                "name": "signers",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "sigs",
                "type": "bytes[]",
                "internalType": "bytes[]"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "createRFCProposal",
        "inputs": [
            {
                "name": "hash",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "maxNominations",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "createRFCProposalSigs",
        "inputs": [
            {
                "name": "hash",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "deadlines",
                "type": "uint256[]",
                "internalType": "uint256[]"
            },
            {
                "name": "nominationsToSpend",
                "type": "uint256[]",
                "internalType": "uint256[]"
            },
            {
                "name": "signers",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "sigs",
                "type": "bytes[]",
                "internalType": "bytes[]"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "createVetoCouncilElectionOrSlash",
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
            },
            {
                "name": "maxNominations",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "createVetoCouncilElectionOrSlashSigs",
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
            },
            {
                "name": "deadlines",
                "type": "uint256[]",
                "internalType": "uint256[]"
            },
            {
                "name": "nominationsToSpend",
                "type": "uint256[]",
                "internalType": "uint256[]"
            },
            {
                "name": "signers",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "sigs",
                "type": "bytes[]",
                "internalType": "bytes[]"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "currentWeek",
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
        "name": "endorseGCAProposal",
        "inputs": [
            {
                "name": "weekId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "executeProposalAtWeek",
        "inputs": [
            {
                "name": "week",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "getProposalStatus",
        "inputs": [
            {
                "name": "proposalId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint8",
                "internalType": "enum IGovernance.ProposalStatus"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "grantNominations",
        "inputs": [
            {
                "name": "to",
                "type": "address",
                "internalType": "address"
            },
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
        "name": "hasEndorsedProposal",
        "inputs": [
            {
                "name": "gca",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "weekId",
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
        "name": "longStakerVotesForProposal",
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
        "name": "mostPopularProposalOfWeek",
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
        "name": "nominationsOf",
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
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "numEndorsementsOnWeek",
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
        "name": "proposalCount",
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
        "name": "proposalLongStakerVotes",
        "inputs": [
            {
                "name": "proposalId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct Governance.ProposalLongStakerVotes",
                "components": [
                    {
                        "name": "ratifyVotes",
                        "type": "uint128",
                        "internalType": "uint128"
                    },
                    {
                        "name": "rejectionVotes",
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
        "name": "proposals",
        "inputs": [
            {
                "name": "proposalId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct IGovernance.Proposal",
                "components": [
                    {
                        "name": "proposalType",
                        "type": "uint8",
                        "internalType": "enum IGovernance.ProposalType"
                    },
                    {
                        "name": "expirationTimestamp",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "votes",
                        "type": "uint184",
                        "internalType": "uint184"
                    },
                    {
                        "name": "data",
                        "type": "bytes",
                        "internalType": "bytes"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "ratifyOrReject",
        "inputs": [
            {
                "name": "weekOfMostPopularProposal",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "trueForRatify",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "numVotes",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "selfIncrementNonce",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setMostPopularProposalForCurrentWeek",
        "inputs": [
            {
                "name": "proposalId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "spendNominationsOnProposalNonce",
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
        "name": "syncProposals",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "updateLastExpiredProposalId",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "useNominationsOnProposal",
        "inputs": [
            {
                "name": "proposalId",
                "type": "uint256",
                "internalType": "uint256"
            },
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
        "name": "vetoProposal",
        "inputs": [
            {
                "name": "weekId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "proposalId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "ChangeGCARequirementsProposalCreation",
        "inputs": [
            {
                "name": "proposalId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "proposer",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "requirementsHash",
                "type": "bytes32",
                "indexed": false,
                "internalType": "bytes32"
            },
            {
                "name": "nominationsUsed",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
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
        "name": "GCACouncilElectionOrSlashCreation",
        "inputs": [
            {
                "name": "proposalId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "proposer",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "agentsToSlash",
                "type": "address[]",
                "indexed": false,
                "internalType": "address[]"
            },
            {
                "name": "newGCAs",
                "type": "address[]",
                "indexed": false,
                "internalType": "address[]"
            },
            {
                "name": "proposalCreationTimestamp",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "nominationsUsed",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "GrantsProposalCreation",
        "inputs": [
            {
                "name": "proposalId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "proposer",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "recipient",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "hash",
                "type": "bytes32",
                "indexed": false,
                "internalType": "bytes32"
            },
            {
                "name": "nominationsUsed",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "MostPopularProposalSet",
        "inputs": [
            {
                "name": "weekId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "proposalId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "NominationsUsedOnProposal",
        "inputs": [
            {
                "name": "proposalId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "spender",
                "type": "address",
                "indexed": true,
                "internalType": "address"
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
        "name": "ProposalExecution",
        "inputs": [
            {
                "name": "week",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "proposalId",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "proposalType",
                "type": "uint8",
                "indexed": false,
                "internalType": "enum IGovernance.ProposalType"
            },
            {
                "name": "success",
                "type": "bool",
                "indexed": false,
                "internalType": "bool"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ProposalVetoed",
        "inputs": [
            {
                "name": "weekId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "vetoer",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "proposalId",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "RFCProposalCreation",
        "inputs": [
            {
                "name": "proposalId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "proposer",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "rfcHash",
                "type": "bytes32",
                "indexed": false,
                "internalType": "bytes32"
            },
            {
                "name": "nominationsUsed",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "RFCProposalExecuted",
        "inputs": [
            {
                "name": "proposalId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
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
        "type": "event",
        "name": "RatifyCast",
        "inputs": [
            {
                "name": "proposalId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "voter",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "numVotes",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "RejectCast",
        "inputs": [
            {
                "name": "proposalId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "voter",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "numVotes",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "VetoCouncilElectionOrSlash",
        "inputs": [
            {
                "name": "proposalId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "proposer",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "oldAgent",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "newAgent",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "slashOldAgent",
                "type": "bool",
                "indexed": false,
                "internalType": "bool"
            },
            {
                "name": "nominationsUsed",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "AlreadyEndorsedWeek",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CallerNotGCA",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CallerNotGCC",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CallerNotVetoCouncilMember",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ContractsAlreadySet",
        "inputs": []
    },
    {
        "type": "error",
        "name": "GCAContractAlreadySet",
        "inputs": []
    },
    {
        "type": "error",
        "name": "GCACouncilElectionsCannotBeVetoed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InsufficientNominations",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InsufficientRatifyOrRejectVotes",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidShortString",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidSpendNominationsOnProposalSignature",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MaxGCAEndorsementsReached",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MaxSlashesInGCAElection",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MaximumNumberOfGCAS",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MostPopularProposalNotSelected",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NominationCostGreaterThanAllowance",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OnlyGCAElectionsCanBeEndorsed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ProposalAlreadyExecuted",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ProposalAlreadyVetoed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ProposalDoesNotExist",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ProposalExpired",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ProposalHasNotExpired",
        "inputs": [
            {
                "name": "proposalId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "error",
        "name": "ProposalIdDoesNotMatchMostPopularProposal",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ProposalIsVetoed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ProposalNotInitialized",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ProposalNotMostPopular",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ProposalsMustBeExecutedSynchonously",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RFCPeriodNotEnded",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RatifyOrRejectPeriodEnded",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RatifyOrRejectPeriodNotEnded",
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
        "name": "SpendNominationsOnProposalSignatureExpired",
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
        "name": "VetoCouncilElectionsCannotBeVetoed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "VetoCouncilProposalCreationOldMemberCannotEqualNewMember",
        "inputs": []
    },
    {
        "type": "error",
        "name": "VetoMemberCannotBeNullAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "WeekMustHaveEndedToAcceptRatifyOrRejectVotes",
        "inputs": []
    },
    {
        "type": "error",
        "name": "WeekNotFinalized",
        "inputs": []
    },
    {
        "type": "error",
        "name": "WeekNotStarted",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ZeroAddressNotAllowed",
        "inputs": []
    }
]