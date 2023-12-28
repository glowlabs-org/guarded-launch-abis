import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace Governance {
    type ProposalLongStakerVotesStruct = {
        ratifyVotes: BigNumberish;
        rejectionVotes: BigNumberish;
    };
    type ProposalLongStakerVotesStructOutput = [BigNumber, BigNumber] & {
        ratifyVotes: BigNumber;
        rejectionVotes: BigNumber;
    };
}
export declare namespace IGovernance {
    type ProposalStruct = {
        proposalType: BigNumberish;
        expirationTimestamp: BigNumberish;
        votes: BigNumberish;
        data: BytesLike;
    };
    type ProposalStructOutput = [number, BigNumber, BigNumber, string] & {
        proposalType: number;
        expirationTimestamp: BigNumber;
        votes: BigNumber;
        data: string;
    };
}
export interface MockGovernanceInterface extends utils.Interface {
    functions: {
        "GCA()": FunctionFragment;
        "GCC()": FunctionFragment;
        "GENESIS_TIMESTAMP()": FunctionFragment;
        "GLOW()": FunctionFragment;
        "GRANTS_TREASURY()": FunctionFragment;
        "SPEND_NOMINATIONS_ON_PROPOSAL_TYPEHASH()": FunctionFragment;
        "VETO_COUNCIL()": FunctionFragment;
        "costForNewProposal()": FunctionFragment;
        "createChangeGCARequirementsProposal(bytes32,uint256)": FunctionFragment;
        "createChangeGCARequirementsProposalSigs(bytes32,uint256[],uint256[],address[],bytes[])": FunctionFragment;
        "createGCACouncilElectionOrSlashProposal(address[],address[],uint256)": FunctionFragment;
        "createGCACouncilElectionOrSlashProposalSigs(address[],address[],uint256[],uint256[],address[],bytes[])": FunctionFragment;
        "createGrantsProposal(address,uint256,bytes32,uint256)": FunctionFragment;
        "createGrantsProposalSigs(address,uint256,bytes32,uint256[],uint256[],address[],bytes[])": FunctionFragment;
        "createRFCProposal(bytes32,uint256)": FunctionFragment;
        "createRFCProposalSigs(bytes32,uint256[],uint256[],address[],bytes[])": FunctionFragment;
        "createSpendNominationsOnProposalDigest(uint8,uint256,uint256,uint256,bytes)": FunctionFragment;
        "createVetoCouncilElectionOrSlash(address,address,bool,uint256)": FunctionFragment;
        "createVetoCouncilElectionOrSlashSigs(address,address,bool,uint256[],uint256[],address[],bytes[])": FunctionFragment;
        "currentWeek()": FunctionFragment;
        "eip712Domain()": FunctionFragment;
        "endorseGCAProposal(uint256)": FunctionFragment;
        "executeProposalAtWeek(uint256)": FunctionFragment;
        "getLastExecutedWeek()": FunctionFragment;
        "getLastExpiredProposalId()": FunctionFragment;
        "getNominationCostForProposalCreation(uint256)": FunctionFragment;
        "getProposalStatus(uint256)": FunctionFragment;
        "grantNominations(address,uint256)": FunctionFragment;
        "hasEndorsedProposal(address,uint256)": FunctionFragment;
        "longStakerVotesForProposal(address,uint256)": FunctionFragment;
        "mostPopularProposalOfWeek(uint256)": FunctionFragment;
        "nominationsOf(address)": FunctionFragment;
        "numEndorsementsOnWeek(uint256)": FunctionFragment;
        "proposalCount()": FunctionFragment;
        "proposalLongStakerVotes(uint256)": FunctionFragment;
        "proposals(uint256)": FunctionFragment;
        "ratifyOrReject(uint256,bool,uint256)": FunctionFragment;
        "selfIncrementNonce()": FunctionFragment;
        "setMostPopularProposalForCurrentWeek(uint256)": FunctionFragment;
        "setProposalStatus(uint256,uint8)": FunctionFragment;
        "spendNominationsOnProposalNonce(address)": FunctionFragment;
        "syncProposals()": FunctionFragment;
        "updateLastExpiredProposalId()": FunctionFragment;
        "useNominationsOnProposal(uint256,uint256)": FunctionFragment;
        "vetoProposal(uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "GCA" | "GCC" | "GENESIS_TIMESTAMP" | "GLOW" | "GRANTS_TREASURY" | "SPEND_NOMINATIONS_ON_PROPOSAL_TYPEHASH" | "VETO_COUNCIL" | "costForNewProposal" | "createChangeGCARequirementsProposal" | "createChangeGCARequirementsProposalSigs" | "createGCACouncilElectionOrSlashProposal" | "createGCACouncilElectionOrSlashProposalSigs" | "createGrantsProposal" | "createGrantsProposalSigs" | "createRFCProposal" | "createRFCProposalSigs" | "createSpendNominationsOnProposalDigest" | "createVetoCouncilElectionOrSlash" | "createVetoCouncilElectionOrSlashSigs" | "currentWeek" | "eip712Domain" | "endorseGCAProposal" | "executeProposalAtWeek" | "getLastExecutedWeek" | "getLastExpiredProposalId" | "getNominationCostForProposalCreation" | "getProposalStatus" | "grantNominations" | "hasEndorsedProposal" | "longStakerVotesForProposal" | "mostPopularProposalOfWeek" | "nominationsOf" | "numEndorsementsOnWeek" | "proposalCount" | "proposalLongStakerVotes" | "proposals" | "ratifyOrReject" | "selfIncrementNonce" | "setMostPopularProposalForCurrentWeek" | "setProposalStatus" | "spendNominationsOnProposalNonce" | "syncProposals" | "updateLastExpiredProposalId" | "useNominationsOnProposal" | "vetoProposal"): FunctionFragment;
    encodeFunctionData(functionFragment: "GCA", values?: undefined): string;
    encodeFunctionData(functionFragment: "GCC", values?: undefined): string;
    encodeFunctionData(functionFragment: "GENESIS_TIMESTAMP", values?: undefined): string;
    encodeFunctionData(functionFragment: "GLOW", values?: undefined): string;
    encodeFunctionData(functionFragment: "GRANTS_TREASURY", values?: undefined): string;
    encodeFunctionData(functionFragment: "SPEND_NOMINATIONS_ON_PROPOSAL_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "VETO_COUNCIL", values?: undefined): string;
    encodeFunctionData(functionFragment: "costForNewProposal", values?: undefined): string;
    encodeFunctionData(functionFragment: "createChangeGCARequirementsProposal", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createChangeGCARequirementsProposalSigs", values: [BytesLike, BigNumberish[], BigNumberish[], string[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "createGCACouncilElectionOrSlashProposal", values: [string[], string[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "createGCACouncilElectionOrSlashProposalSigs", values: [
        string[],
        string[],
        BigNumberish[],
        BigNumberish[],
        string[],
        BytesLike[]
    ]): string;
    encodeFunctionData(functionFragment: "createGrantsProposal", values: [string, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createGrantsProposalSigs", values: [
        string,
        BigNumberish,
        BytesLike,
        BigNumberish[],
        BigNumberish[],
        string[],
        BytesLike[]
    ]): string;
    encodeFunctionData(functionFragment: "createRFCProposal", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createRFCProposalSigs", values: [BytesLike, BigNumberish[], BigNumberish[], string[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "createSpendNominationsOnProposalDigest", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "createVetoCouncilElectionOrSlash", values: [string, string, boolean, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createVetoCouncilElectionOrSlashSigs", values: [
        string,
        string,
        boolean,
        BigNumberish[],
        BigNumberish[],
        string[],
        BytesLike[]
    ]): string;
    encodeFunctionData(functionFragment: "currentWeek", values?: undefined): string;
    encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
    encodeFunctionData(functionFragment: "endorseGCAProposal", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeProposalAtWeek", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLastExecutedWeek", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLastExpiredProposalId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNominationCostForProposalCreation", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getProposalStatus", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "grantNominations", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "hasEndorsedProposal", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "longStakerVotesForProposal", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mostPopularProposalOfWeek", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "nominationsOf", values: [string]): string;
    encodeFunctionData(functionFragment: "numEndorsementsOnWeek", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposalCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalLongStakerVotes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposals", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "ratifyOrReject", values: [BigNumberish, boolean, BigNumberish]): string;
    encodeFunctionData(functionFragment: "selfIncrementNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "setMostPopularProposalForCurrentWeek", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setProposalStatus", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "spendNominationsOnProposalNonce", values: [string]): string;
    encodeFunctionData(functionFragment: "syncProposals", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateLastExpiredProposalId", values?: undefined): string;
    encodeFunctionData(functionFragment: "useNominationsOnProposal", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "vetoProposal", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "GCA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GCC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GENESIS_TIMESTAMP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GLOW", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GRANTS_TREASURY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SPEND_NOMINATIONS_ON_PROPOSAL_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VETO_COUNCIL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "costForNewProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createChangeGCARequirementsProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createChangeGCARequirementsProposalSigs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createGCACouncilElectionOrSlashProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createGCACouncilElectionOrSlashProposalSigs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createGrantsProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createGrantsProposalSigs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createRFCProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createRFCProposalSigs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createSpendNominationsOnProposalDigest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createVetoCouncilElectionOrSlash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createVetoCouncilElectionOrSlashSigs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentWeek", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endorseGCAProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeProposalAtWeek", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastExecutedWeek", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastExpiredProposalId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNominationCostForProposalCreation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposalStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantNominations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasEndorsedProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "longStakerVotesForProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mostPopularProposalOfWeek", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominationsOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numEndorsementsOnWeek", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalLongStakerVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ratifyOrReject", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfIncrementNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMostPopularProposalForCurrentWeek", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProposalStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "spendNominationsOnProposalNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "syncProposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateLastExpiredProposalId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "useNominationsOnProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vetoProposal", data: BytesLike): Result;
    events: {
        "ChangeGCARequirementsProposalCreation(uint256,address,bytes32,uint256)": EventFragment;
        "EIP712DomainChanged()": EventFragment;
        "GCACouncilElectionOrSlashCreation(uint256,address,address[],address[],uint256,uint256)": EventFragment;
        "GrantsProposalCreation(uint256,address,address,uint256,bytes32,uint256)": EventFragment;
        "MostPopularProposalSet(uint256,uint256)": EventFragment;
        "NominationsUsedOnProposal(uint256,address,uint256)": EventFragment;
        "ProposalExecution(uint256,uint256,uint8,bool)": EventFragment;
        "ProposalVetoed(uint256,address,uint256)": EventFragment;
        "RFCProposalCreation(uint256,address,bytes32,uint256)": EventFragment;
        "RFCProposalExecuted(uint256,bytes32)": EventFragment;
        "RatifyCast(uint256,address,uint256)": EventFragment;
        "RejectCast(uint256,address,uint256)": EventFragment;
        "VetoCouncilElectionOrSlash(uint256,address,address,address,bool,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ChangeGCARequirementsProposalCreation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EIP712DomainChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GCACouncilElectionOrSlashCreation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GrantsProposalCreation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MostPopularProposalSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NominationsUsedOnProposal"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalExecution"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalVetoed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RFCProposalCreation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RFCProposalExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RatifyCast"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RejectCast"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VetoCouncilElectionOrSlash"): EventFragment;
}
export interface ChangeGCARequirementsProposalCreationEventObject {
    proposalId: BigNumber;
    proposer: string;
    requirementsHash: string;
    nominationsUsed: BigNumber;
}
export type ChangeGCARequirementsProposalCreationEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber
], ChangeGCARequirementsProposalCreationEventObject>;
export type ChangeGCARequirementsProposalCreationEventFilter = TypedEventFilter<ChangeGCARequirementsProposalCreationEvent>;
export interface EIP712DomainChangedEventObject {
}
export type EIP712DomainChangedEvent = TypedEvent<[
], EIP712DomainChangedEventObject>;
export type EIP712DomainChangedEventFilter = TypedEventFilter<EIP712DomainChangedEvent>;
export interface GCACouncilElectionOrSlashCreationEventObject {
    proposalId: BigNumber;
    proposer: string;
    agentsToSlash: string[];
    newGCAs: string[];
    proposalCreationTimestamp: BigNumber;
    nominationsUsed: BigNumber;
}
export type GCACouncilElectionOrSlashCreationEvent = TypedEvent<[
    BigNumber,
    string,
    string[],
    string[],
    BigNumber,
    BigNumber
], GCACouncilElectionOrSlashCreationEventObject>;
export type GCACouncilElectionOrSlashCreationEventFilter = TypedEventFilter<GCACouncilElectionOrSlashCreationEvent>;
export interface GrantsProposalCreationEventObject {
    proposalId: BigNumber;
    proposer: string;
    recipient: string;
    amount: BigNumber;
    hash: string;
    nominationsUsed: BigNumber;
}
export type GrantsProposalCreationEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber,
    string,
    BigNumber
], GrantsProposalCreationEventObject>;
export type GrantsProposalCreationEventFilter = TypedEventFilter<GrantsProposalCreationEvent>;
export interface MostPopularProposalSetEventObject {
    weekId: BigNumber;
    proposalId: BigNumber;
}
export type MostPopularProposalSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], MostPopularProposalSetEventObject>;
export type MostPopularProposalSetEventFilter = TypedEventFilter<MostPopularProposalSetEvent>;
export interface NominationsUsedOnProposalEventObject {
    proposalId: BigNumber;
    spender: string;
    amount: BigNumber;
}
export type NominationsUsedOnProposalEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], NominationsUsedOnProposalEventObject>;
export type NominationsUsedOnProposalEventFilter = TypedEventFilter<NominationsUsedOnProposalEvent>;
export interface ProposalExecutionEventObject {
    week: BigNumber;
    proposalId: BigNumber;
    proposalType: number;
    success: boolean;
}
export type ProposalExecutionEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    number,
    boolean
], ProposalExecutionEventObject>;
export type ProposalExecutionEventFilter = TypedEventFilter<ProposalExecutionEvent>;
export interface ProposalVetoedEventObject {
    weekId: BigNumber;
    vetoer: string;
    proposalId: BigNumber;
}
export type ProposalVetoedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], ProposalVetoedEventObject>;
export type ProposalVetoedEventFilter = TypedEventFilter<ProposalVetoedEvent>;
export interface RFCProposalCreationEventObject {
    proposalId: BigNumber;
    proposer: string;
    rfcHash: string;
    nominationsUsed: BigNumber;
}
export type RFCProposalCreationEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber
], RFCProposalCreationEventObject>;
export type RFCProposalCreationEventFilter = TypedEventFilter<RFCProposalCreationEvent>;
export interface RFCProposalExecutedEventObject {
    proposalId: BigNumber;
    requirementsHash: string;
}
export type RFCProposalExecutedEvent = TypedEvent<[
    BigNumber,
    string
], RFCProposalExecutedEventObject>;
export type RFCProposalExecutedEventFilter = TypedEventFilter<RFCProposalExecutedEvent>;
export interface RatifyCastEventObject {
    proposalId: BigNumber;
    voter: string;
    numVotes: BigNumber;
}
export type RatifyCastEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], RatifyCastEventObject>;
export type RatifyCastEventFilter = TypedEventFilter<RatifyCastEvent>;
export interface RejectCastEventObject {
    proposalId: BigNumber;
    voter: string;
    numVotes: BigNumber;
}
export type RejectCastEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], RejectCastEventObject>;
export type RejectCastEventFilter = TypedEventFilter<RejectCastEvent>;
export interface VetoCouncilElectionOrSlashEventObject {
    proposalId: BigNumber;
    proposer: string;
    oldAgent: string;
    newAgent: string;
    slashOldAgent: boolean;
    nominationsUsed: BigNumber;
}
export type VetoCouncilElectionOrSlashEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    string,
    boolean,
    BigNumber
], VetoCouncilElectionOrSlashEventObject>;
export type VetoCouncilElectionOrSlashEventFilter = TypedEventFilter<VetoCouncilElectionOrSlashEvent>;
export interface MockGovernance extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockGovernanceInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        GCA(overrides?: CallOverrides): Promise<[string]>;
        GCC(overrides?: CallOverrides): Promise<[string]>;
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<[BigNumber]>;
        GLOW(overrides?: CallOverrides): Promise<[string]>;
        GRANTS_TREASURY(overrides?: CallOverrides): Promise<[string]>;
        SPEND_NOMINATIONS_ON_PROPOSAL_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        VETO_COUNCIL(overrides?: CallOverrides): Promise<[string]>;
        costForNewProposal(overrides?: CallOverrides): Promise<[BigNumber]>;
        createChangeGCARequirementsProposal(newRequirementsHash: BytesLike, maxNominations: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createChangeGCARequirementsProposalSigs(newRequirementsHash: BytesLike, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createGCACouncilElectionOrSlashProposal(agentsToSlash: string[], newGCAs: string[], maxNominations: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createGCACouncilElectionOrSlashProposalSigs(agentsToSlash: string[], newGCAs: string[], deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createGrantsProposal(grantsRecipient: string, amount: BigNumberish, hash: BytesLike, maxNominations: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createGrantsProposalSigs(grantsRecipient: string, amount: BigNumberish, hash: BytesLike, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createRFCProposal(hash: BytesLike, maxNominations: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createRFCProposalSigs(hash: BytesLike, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createSpendNominationsOnProposalDigest(proposalType: BigNumberish, nominationsToSpend: BigNumberish, nonce: BigNumberish, deadline: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        createVetoCouncilElectionOrSlash(oldMember: string, newMember: string, slashOldMember: boolean, maxNominations: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createVetoCouncilElectionOrSlashSigs(oldMember: string, newMember: string, slashOldMember: boolean, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        currentWeek(overrides?: CallOverrides): Promise<[BigNumber]>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            string,
            BigNumber[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
            salt: string;
            extensions: BigNumber[];
        }>;
        endorseGCAProposal(weekId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeProposalAtWeek(week: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getLastExecutedWeek(overrides?: CallOverrides): Promise<[BigNumber]>;
        getLastExpiredProposalId(overrides?: CallOverrides): Promise<[BigNumber]>;
        getNominationCostForProposalCreation(numActiveProposals: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getProposalStatus(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        grantNominations(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasEndorsedProposal(gca: string, weekId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        longStakerVotesForProposal(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        mostPopularProposalOfWeek(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        nominationsOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        numEndorsementsOnWeek(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalLongStakerVotes(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[Governance.ProposalLongStakerVotesStructOutput]>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[IGovernance.ProposalStructOutput]>;
        ratifyOrReject(weekOfMostPopularProposal: BigNumberish, trueForRatify: boolean, numVotes: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        selfIncrementNonce(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMostPopularProposalForCurrentWeek(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setProposalStatus(weekId: BigNumberish, status: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        spendNominationsOnProposalNonce(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        syncProposals(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateLastExpiredProposalId(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        useNominationsOnProposal(proposalId: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        vetoProposal(weekId: BigNumberish, proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    GCA(overrides?: CallOverrides): Promise<string>;
    GCC(overrides?: CallOverrides): Promise<string>;
    GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
    GLOW(overrides?: CallOverrides): Promise<string>;
    GRANTS_TREASURY(overrides?: CallOverrides): Promise<string>;
    SPEND_NOMINATIONS_ON_PROPOSAL_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    VETO_COUNCIL(overrides?: CallOverrides): Promise<string>;
    costForNewProposal(overrides?: CallOverrides): Promise<BigNumber>;
    createChangeGCARequirementsProposal(newRequirementsHash: BytesLike, maxNominations: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createChangeGCARequirementsProposalSigs(newRequirementsHash: BytesLike, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createGCACouncilElectionOrSlashProposal(agentsToSlash: string[], newGCAs: string[], maxNominations: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createGCACouncilElectionOrSlashProposalSigs(agentsToSlash: string[], newGCAs: string[], deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createGrantsProposal(grantsRecipient: string, amount: BigNumberish, hash: BytesLike, maxNominations: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createGrantsProposalSigs(grantsRecipient: string, amount: BigNumberish, hash: BytesLike, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createRFCProposal(hash: BytesLike, maxNominations: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createRFCProposalSigs(hash: BytesLike, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createSpendNominationsOnProposalDigest(proposalType: BigNumberish, nominationsToSpend: BigNumberish, nonce: BigNumberish, deadline: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
    createVetoCouncilElectionOrSlash(oldMember: string, newMember: string, slashOldMember: boolean, maxNominations: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createVetoCouncilElectionOrSlashSigs(oldMember: string, newMember: string, slashOldMember: boolean, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    currentWeek(overrides?: CallOverrides): Promise<BigNumber>;
    eip712Domain(overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        BigNumber,
        string,
        string,
        BigNumber[]
    ] & {
        fields: string;
        name: string;
        version: string;
        chainId: BigNumber;
        verifyingContract: string;
        salt: string;
        extensions: BigNumber[];
    }>;
    endorseGCAProposal(weekId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeProposalAtWeek(week: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getLastExecutedWeek(overrides?: CallOverrides): Promise<BigNumber>;
    getLastExpiredProposalId(overrides?: CallOverrides): Promise<BigNumber>;
    getNominationCostForProposalCreation(numActiveProposals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getProposalStatus(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;
    grantNominations(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasEndorsedProposal(gca: string, weekId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    longStakerVotesForProposal(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    mostPopularProposalOfWeek(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    nominationsOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    numEndorsementsOnWeek(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
    proposalLongStakerVotes(proposalId: BigNumberish, overrides?: CallOverrides): Promise<Governance.ProposalLongStakerVotesStructOutput>;
    proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<IGovernance.ProposalStructOutput>;
    ratifyOrReject(weekOfMostPopularProposal: BigNumberish, trueForRatify: boolean, numVotes: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    selfIncrementNonce(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMostPopularProposalForCurrentWeek(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setProposalStatus(weekId: BigNumberish, status: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    spendNominationsOnProposalNonce(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    syncProposals(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateLastExpiredProposalId(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    useNominationsOnProposal(proposalId: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    vetoProposal(weekId: BigNumberish, proposalId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        GCA(overrides?: CallOverrides): Promise<string>;
        GCC(overrides?: CallOverrides): Promise<string>;
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
        GLOW(overrides?: CallOverrides): Promise<string>;
        GRANTS_TREASURY(overrides?: CallOverrides): Promise<string>;
        SPEND_NOMINATIONS_ON_PROPOSAL_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        VETO_COUNCIL(overrides?: CallOverrides): Promise<string>;
        costForNewProposal(overrides?: CallOverrides): Promise<BigNumber>;
        createChangeGCARequirementsProposal(newRequirementsHash: BytesLike, maxNominations: BigNumberish, overrides?: CallOverrides): Promise<void>;
        createChangeGCARequirementsProposalSigs(newRequirementsHash: BytesLike, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: CallOverrides): Promise<void>;
        createGCACouncilElectionOrSlashProposal(agentsToSlash: string[], newGCAs: string[], maxNominations: BigNumberish, overrides?: CallOverrides): Promise<void>;
        createGCACouncilElectionOrSlashProposalSigs(agentsToSlash: string[], newGCAs: string[], deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: CallOverrides): Promise<void>;
        createGrantsProposal(grantsRecipient: string, amount: BigNumberish, hash: BytesLike, maxNominations: BigNumberish, overrides?: CallOverrides): Promise<void>;
        createGrantsProposalSigs(grantsRecipient: string, amount: BigNumberish, hash: BytesLike, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: CallOverrides): Promise<void>;
        createRFCProposal(hash: BytesLike, maxNominations: BigNumberish, overrides?: CallOverrides): Promise<void>;
        createRFCProposalSigs(hash: BytesLike, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: CallOverrides): Promise<void>;
        createSpendNominationsOnProposalDigest(proposalType: BigNumberish, nominationsToSpend: BigNumberish, nonce: BigNumberish, deadline: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        createVetoCouncilElectionOrSlash(oldMember: string, newMember: string, slashOldMember: boolean, maxNominations: BigNumberish, overrides?: CallOverrides): Promise<void>;
        createVetoCouncilElectionOrSlashSigs(oldMember: string, newMember: string, slashOldMember: boolean, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: CallOverrides): Promise<void>;
        currentWeek(overrides?: CallOverrides): Promise<BigNumber>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            string,
            BigNumber[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
            salt: string;
            extensions: BigNumber[];
        }>;
        endorseGCAProposal(weekId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        executeProposalAtWeek(week: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getLastExecutedWeek(overrides?: CallOverrides): Promise<BigNumber>;
        getLastExpiredProposalId(overrides?: CallOverrides): Promise<BigNumber>;
        getNominationCostForProposalCreation(numActiveProposals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getProposalStatus(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;
        grantNominations(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        hasEndorsedProposal(gca: string, weekId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        longStakerVotesForProposal(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        mostPopularProposalOfWeek(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        nominationsOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        numEndorsementsOnWeek(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
        proposalLongStakerVotes(proposalId: BigNumberish, overrides?: CallOverrides): Promise<Governance.ProposalLongStakerVotesStructOutput>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<IGovernance.ProposalStructOutput>;
        ratifyOrReject(weekOfMostPopularProposal: BigNumberish, trueForRatify: boolean, numVotes: BigNumberish, overrides?: CallOverrides): Promise<void>;
        selfIncrementNonce(overrides?: CallOverrides): Promise<void>;
        setMostPopularProposalForCurrentWeek(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setProposalStatus(weekId: BigNumberish, status: BigNumberish, overrides?: CallOverrides): Promise<void>;
        spendNominationsOnProposalNonce(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        syncProposals(overrides?: CallOverrides): Promise<void>;
        updateLastExpiredProposalId(overrides?: CallOverrides): Promise<void>;
        useNominationsOnProposal(proposalId: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        vetoProposal(weekId: BigNumberish, proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ChangeGCARequirementsProposalCreation(uint256,address,bytes32,uint256)"(proposalId?: BigNumberish | null, proposer?: string | null, requirementsHash?: null, nominationsUsed?: null): ChangeGCARequirementsProposalCreationEventFilter;
        ChangeGCARequirementsProposalCreation(proposalId?: BigNumberish | null, proposer?: string | null, requirementsHash?: null, nominationsUsed?: null): ChangeGCARequirementsProposalCreationEventFilter;
        "EIP712DomainChanged()"(): EIP712DomainChangedEventFilter;
        EIP712DomainChanged(): EIP712DomainChangedEventFilter;
        "GCACouncilElectionOrSlashCreation(uint256,address,address[],address[],uint256,uint256)"(proposalId?: BigNumberish | null, proposer?: string | null, agentsToSlash?: null, newGCAs?: null, proposalCreationTimestamp?: null, nominationsUsed?: null): GCACouncilElectionOrSlashCreationEventFilter;
        GCACouncilElectionOrSlashCreation(proposalId?: BigNumberish | null, proposer?: string | null, agentsToSlash?: null, newGCAs?: null, proposalCreationTimestamp?: null, nominationsUsed?: null): GCACouncilElectionOrSlashCreationEventFilter;
        "GrantsProposalCreation(uint256,address,address,uint256,bytes32,uint256)"(proposalId?: BigNumberish | null, proposer?: string | null, recipient?: null, amount?: null, hash?: null, nominationsUsed?: null): GrantsProposalCreationEventFilter;
        GrantsProposalCreation(proposalId?: BigNumberish | null, proposer?: string | null, recipient?: null, amount?: null, hash?: null, nominationsUsed?: null): GrantsProposalCreationEventFilter;
        "MostPopularProposalSet(uint256,uint256)"(weekId?: BigNumberish | null, proposalId?: BigNumberish | null): MostPopularProposalSetEventFilter;
        MostPopularProposalSet(weekId?: BigNumberish | null, proposalId?: BigNumberish | null): MostPopularProposalSetEventFilter;
        "NominationsUsedOnProposal(uint256,address,uint256)"(proposalId?: BigNumberish | null, spender?: string | null, amount?: null): NominationsUsedOnProposalEventFilter;
        NominationsUsedOnProposal(proposalId?: BigNumberish | null, spender?: string | null, amount?: null): NominationsUsedOnProposalEventFilter;
        "ProposalExecution(uint256,uint256,uint8,bool)"(week?: BigNumberish | null, proposalId?: null, proposalType?: null, success?: null): ProposalExecutionEventFilter;
        ProposalExecution(week?: BigNumberish | null, proposalId?: null, proposalType?: null, success?: null): ProposalExecutionEventFilter;
        "ProposalVetoed(uint256,address,uint256)"(weekId?: BigNumberish | null, vetoer?: string | null, proposalId?: null): ProposalVetoedEventFilter;
        ProposalVetoed(weekId?: BigNumberish | null, vetoer?: string | null, proposalId?: null): ProposalVetoedEventFilter;
        "RFCProposalCreation(uint256,address,bytes32,uint256)"(proposalId?: BigNumberish | null, proposer?: string | null, rfcHash?: null, nominationsUsed?: null): RFCProposalCreationEventFilter;
        RFCProposalCreation(proposalId?: BigNumberish | null, proposer?: string | null, rfcHash?: null, nominationsUsed?: null): RFCProposalCreationEventFilter;
        "RFCProposalExecuted(uint256,bytes32)"(proposalId?: BigNumberish | null, requirementsHash?: null): RFCProposalExecutedEventFilter;
        RFCProposalExecuted(proposalId?: BigNumberish | null, requirementsHash?: null): RFCProposalExecutedEventFilter;
        "RatifyCast(uint256,address,uint256)"(proposalId?: BigNumberish | null, voter?: string | null, numVotes?: null): RatifyCastEventFilter;
        RatifyCast(proposalId?: BigNumberish | null, voter?: string | null, numVotes?: null): RatifyCastEventFilter;
        "RejectCast(uint256,address,uint256)"(proposalId?: BigNumberish | null, voter?: string | null, numVotes?: null): RejectCastEventFilter;
        RejectCast(proposalId?: BigNumberish | null, voter?: string | null, numVotes?: null): RejectCastEventFilter;
        "VetoCouncilElectionOrSlash(uint256,address,address,address,bool,uint256)"(proposalId?: BigNumberish | null, proposer?: string | null, oldAgent?: null, newAgent?: null, slashOldAgent?: null, nominationsUsed?: null): VetoCouncilElectionOrSlashEventFilter;
        VetoCouncilElectionOrSlash(proposalId?: BigNumberish | null, proposer?: string | null, oldAgent?: null, newAgent?: null, slashOldAgent?: null, nominationsUsed?: null): VetoCouncilElectionOrSlashEventFilter;
    };
    estimateGas: {
        GCA(overrides?: CallOverrides): Promise<BigNumber>;
        GCC(overrides?: CallOverrides): Promise<BigNumber>;
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
        GLOW(overrides?: CallOverrides): Promise<BigNumber>;
        GRANTS_TREASURY(overrides?: CallOverrides): Promise<BigNumber>;
        SPEND_NOMINATIONS_ON_PROPOSAL_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        VETO_COUNCIL(overrides?: CallOverrides): Promise<BigNumber>;
        costForNewProposal(overrides?: CallOverrides): Promise<BigNumber>;
        createChangeGCARequirementsProposal(newRequirementsHash: BytesLike, maxNominations: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createChangeGCARequirementsProposalSigs(newRequirementsHash: BytesLike, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createGCACouncilElectionOrSlashProposal(agentsToSlash: string[], newGCAs: string[], maxNominations: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createGCACouncilElectionOrSlashProposalSigs(agentsToSlash: string[], newGCAs: string[], deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createGrantsProposal(grantsRecipient: string, amount: BigNumberish, hash: BytesLike, maxNominations: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createGrantsProposalSigs(grantsRecipient: string, amount: BigNumberish, hash: BytesLike, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createRFCProposal(hash: BytesLike, maxNominations: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createRFCProposalSigs(hash: BytesLike, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createSpendNominationsOnProposalDigest(proposalType: BigNumberish, nominationsToSpend: BigNumberish, nonce: BigNumberish, deadline: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        createVetoCouncilElectionOrSlash(oldMember: string, newMember: string, slashOldMember: boolean, maxNominations: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createVetoCouncilElectionOrSlashSigs(oldMember: string, newMember: string, slashOldMember: boolean, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        currentWeek(overrides?: CallOverrides): Promise<BigNumber>;
        eip712Domain(overrides?: CallOverrides): Promise<BigNumber>;
        endorseGCAProposal(weekId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeProposalAtWeek(week: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getLastExecutedWeek(overrides?: CallOverrides): Promise<BigNumber>;
        getLastExpiredProposalId(overrides?: CallOverrides): Promise<BigNumber>;
        getNominationCostForProposalCreation(numActiveProposals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getProposalStatus(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        grantNominations(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasEndorsedProposal(gca: string, weekId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        longStakerVotesForProposal(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        mostPopularProposalOfWeek(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        nominationsOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        numEndorsementsOnWeek(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
        proposalLongStakerVotes(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        ratifyOrReject(weekOfMostPopularProposal: BigNumberish, trueForRatify: boolean, numVotes: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        selfIncrementNonce(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMostPopularProposalForCurrentWeek(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setProposalStatus(weekId: BigNumberish, status: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        spendNominationsOnProposalNonce(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        syncProposals(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateLastExpiredProposalId(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        useNominationsOnProposal(proposalId: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        vetoProposal(weekId: BigNumberish, proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        GCA(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GCC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GLOW(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GRANTS_TREASURY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SPEND_NOMINATIONS_ON_PROPOSAL_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VETO_COUNCIL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        costForNewProposal(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createChangeGCARequirementsProposal(newRequirementsHash: BytesLike, maxNominations: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createChangeGCARequirementsProposalSigs(newRequirementsHash: BytesLike, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createGCACouncilElectionOrSlashProposal(agentsToSlash: string[], newGCAs: string[], maxNominations: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createGCACouncilElectionOrSlashProposalSigs(agentsToSlash: string[], newGCAs: string[], deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createGrantsProposal(grantsRecipient: string, amount: BigNumberish, hash: BytesLike, maxNominations: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createGrantsProposalSigs(grantsRecipient: string, amount: BigNumberish, hash: BytesLike, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createRFCProposal(hash: BytesLike, maxNominations: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createRFCProposalSigs(hash: BytesLike, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createSpendNominationsOnProposalDigest(proposalType: BigNumberish, nominationsToSpend: BigNumberish, nonce: BigNumberish, deadline: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createVetoCouncilElectionOrSlash(oldMember: string, newMember: string, slashOldMember: boolean, maxNominations: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createVetoCouncilElectionOrSlashSigs(oldMember: string, newMember: string, slashOldMember: boolean, deadlines: BigNumberish[], nominationsToSpend: BigNumberish[], signers: string[], sigs: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        currentWeek(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        eip712Domain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        endorseGCAProposal(weekId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeProposalAtWeek(week: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getLastExecutedWeek(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLastExpiredProposalId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNominationCostForProposalCreation(numActiveProposals: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProposalStatus(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantNominations(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasEndorsedProposal(gca: string, weekId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        longStakerVotesForProposal(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mostPopularProposalOfWeek(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nominationsOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        numEndorsementsOnWeek(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalLongStakerVotes(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ratifyOrReject(weekOfMostPopularProposal: BigNumberish, trueForRatify: boolean, numVotes: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        selfIncrementNonce(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMostPopularProposalForCurrentWeek(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setProposalStatus(weekId: BigNumberish, status: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        spendNominationsOnProposalNonce(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        syncProposals(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateLastExpiredProposalId(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        useNominationsOnProposal(proposalId: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        vetoProposal(weekId: BigNumberish, proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
