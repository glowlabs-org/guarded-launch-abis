import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface IGovernanceInterface extends utils.Interface {
    functions: {
        "endorseGCAProposal(uint256)": FunctionFragment;
        "executeProposalAtWeek(uint256)": FunctionFragment;
        "grantNominations(address,uint256)": FunctionFragment;
        "syncProposals()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "endorseGCAProposal" | "executeProposalAtWeek" | "grantNominations" | "syncProposals"): FunctionFragment;
    encodeFunctionData(functionFragment: "endorseGCAProposal", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeProposalAtWeek", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "grantNominations", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "syncProposals", values?: undefined): string;
    decodeFunctionResult(functionFragment: "endorseGCAProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeProposalAtWeek", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantNominations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "syncProposals", data: BytesLike): Result;
    events: {
        "ChangeGCARequirementsProposalCreation(uint256,address,bytes32,uint256)": EventFragment;
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
export interface IGovernance extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGovernanceInterface;
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
        endorseGCAProposal(weekId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeProposalAtWeek(weekId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        grantNominations(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        syncProposals(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    endorseGCAProposal(weekId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeProposalAtWeek(weekId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    grantNominations(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    syncProposals(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        endorseGCAProposal(weekId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        executeProposalAtWeek(weekId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        grantNominations(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        syncProposals(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ChangeGCARequirementsProposalCreation(uint256,address,bytes32,uint256)"(proposalId?: BigNumberish | null, proposer?: string | null, requirementsHash?: null, nominationsUsed?: null): ChangeGCARequirementsProposalCreationEventFilter;
        ChangeGCARequirementsProposalCreation(proposalId?: BigNumberish | null, proposer?: string | null, requirementsHash?: null, nominationsUsed?: null): ChangeGCARequirementsProposalCreationEventFilter;
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
        endorseGCAProposal(weekId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeProposalAtWeek(weekId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        grantNominations(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        syncProposals(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        endorseGCAProposal(weekId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeProposalAtWeek(weekId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        grantNominations(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        syncProposals(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
