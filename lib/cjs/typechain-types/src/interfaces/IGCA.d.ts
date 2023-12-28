import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace IGCA {
    type ReportStruct = {
        totalNewGCC: BigNumberish;
        totalGLWRewardsWeight: BigNumberish;
        totalGRCRewardsWeight: BigNumberish;
        merkleRoot: BytesLike;
        proposingAgent: string;
    };
    type ReportStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string
    ] & {
        totalNewGCC: BigNumber;
        totalGLWRewardsWeight: BigNumber;
        totalGRCRewardsWeight: BigNumber;
        merkleRoot: string;
        proposingAgent: string;
    };
    type BucketStruct = {
        originalNonce: BigNumberish;
        lastUpdatedNonce: BigNumberish;
        finalizationTimestamp: BigNumberish;
        reports: IGCA.ReportStruct[];
    };
    type BucketStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        IGCA.ReportStructOutput[]
    ] & {
        originalNonce: BigNumber;
        lastUpdatedNonce: BigNumber;
        finalizationTimestamp: BigNumber;
        reports: IGCA.ReportStructOutput[];
    };
    type BucketGlobalStateStruct = {
        totalNewGCC: BigNumberish;
        totalGLWRewardsWeight: BigNumberish;
        totalGRCRewardsWeight: BigNumberish;
    };
    type BucketGlobalStateStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        totalNewGCC: BigNumber;
        totalGLWRewardsWeight: BigNumber;
        totalGRCRewardsWeight: BigNumber;
    };
    type GCAPayoutStruct = {
        lastClaimedTimestamp: BigNumberish;
        maxClaimTimestamp: BigNumberish;
        totalSlashableBalance: BigNumberish;
    };
    type GCAPayoutStructOutput = [BigNumber, BigNumber, BigNumber] & {
        lastClaimedTimestamp: BigNumber;
        maxClaimTimestamp: BigNumber;
        totalSlashableBalance: BigNumber;
    };
}
export interface IGCAInterface extends utils.Interface {
    functions: {
        "allGcas()": FunctionFragment;
        "bucket(uint256)": FunctionFragment;
        "bucketGlobalState(uint256)": FunctionFragment;
        "claimGlowFromInflation()": FunctionFragment;
        "gcaPayoutData(address)": FunctionFragment;
        "getProposalHashes(uint256,uint256)": FunctionFragment;
        "getProposalHashes()": FunctionFragment;
        "isBucketFinalized(uint256)": FunctionFragment;
        "isGCA(address)": FunctionFragment;
        "isGCA(address,uint256)": FunctionFragment;
        "pushHash(bytes32,bool)": FunctionFragment;
        "setRequirementsHash(bytes32)": FunctionFragment;
        "submitCompensationPlan(uint32[5],uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allGcas" | "bucket" | "bucketGlobalState" | "claimGlowFromInflation" | "gcaPayoutData" | "getProposalHashes(uint256,uint256)" | "getProposalHashes()" | "isBucketFinalized" | "isGCA(address)" | "isGCA(address,uint256)" | "pushHash" | "setRequirementsHash" | "submitCompensationPlan"): FunctionFragment;
    encodeFunctionData(functionFragment: "allGcas", values?: undefined): string;
    encodeFunctionData(functionFragment: "bucket", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "bucketGlobalState", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimGlowFromInflation", values?: undefined): string;
    encodeFunctionData(functionFragment: "gcaPayoutData", values: [string]): string;
    encodeFunctionData(functionFragment: "getProposalHashes(uint256,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getProposalHashes()", values?: undefined): string;
    encodeFunctionData(functionFragment: "isBucketFinalized", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isGCA(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "isGCA(address,uint256)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "pushHash", values: [BytesLike, boolean]): string;
    encodeFunctionData(functionFragment: "setRequirementsHash", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "submitCompensationPlan", values: [
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "allGcas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bucket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bucketGlobalState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimGlowFromInflation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gcaPayoutData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposalHashes(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposalHashes()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBucketFinalized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGCA(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGCA(address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pushHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRequirementsHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitCompensationPlan", data: BytesLike): Result;
    events: {
        "BucketSubmissionEvent(uint256,address,uint256,uint256,uint256,uint256,bytes32,bytes)": EventFragment;
        "CompensationPlanSubmitted(address,uint32[5])": EventFragment;
        "GCAPayoutClaimed(address,uint256,uint256)": EventFragment;
        "GCAsSlashed(address[])": EventFragment;
        "NewGCAsAppointed(address[])": EventFragment;
        "ProposalHashPushed(bytes32)": EventFragment;
        "ProposalHashUpdate(uint256,bytes32)": EventFragment;
        "RequirementsHashUpdated(bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BucketSubmissionEvent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CompensationPlanSubmitted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GCAPayoutClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GCAsSlashed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewGCAsAppointed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalHashPushed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalHashUpdate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RequirementsHashUpdated"): EventFragment;
}
export interface BucketSubmissionEventEventObject {
    bucketId: BigNumber;
    gca: string;
    slashNonce: BigNumber;
    totalNewGCC: BigNumber;
    totalGlwRewardsWeight: BigNumber;
    totalGRCRewardsWeight: BigNumber;
    root: string;
    extraData: string;
}
export type BucketSubmissionEventEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
], BucketSubmissionEventEventObject>;
export type BucketSubmissionEventEventFilter = TypedEventFilter<BucketSubmissionEventEvent>;
export interface CompensationPlanSubmittedEventObject {
    agent: string;
    plan: [number, number, number, number, number];
}
export type CompensationPlanSubmittedEvent = TypedEvent<[
    string,
    [number, number, number, number, number]
], CompensationPlanSubmittedEventObject>;
export type CompensationPlanSubmittedEventFilter = TypedEventFilter<CompensationPlanSubmittedEvent>;
export interface GCAPayoutClaimedEventObject {
    agent: string;
    amount: BigNumber;
    totalSlashableBalance: BigNumber;
}
export type GCAPayoutClaimedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], GCAPayoutClaimedEventObject>;
export type GCAPayoutClaimedEventFilter = TypedEventFilter<GCAPayoutClaimedEvent>;
export interface GCAsSlashedEventObject {
    slashedGcas: string[];
}
export type GCAsSlashedEvent = TypedEvent<[string[]], GCAsSlashedEventObject>;
export type GCAsSlashedEventFilter = TypedEventFilter<GCAsSlashedEvent>;
export interface NewGCAsAppointedEventObject {
    newGcas: string[];
}
export type NewGCAsAppointedEvent = TypedEvent<[
    string[]
], NewGCAsAppointedEventObject>;
export type NewGCAsAppointedEventFilter = TypedEventFilter<NewGCAsAppointedEvent>;
export interface ProposalHashPushedEventObject {
    proposalHash: string;
}
export type ProposalHashPushedEvent = TypedEvent<[
    string
], ProposalHashPushedEventObject>;
export type ProposalHashPushedEventFilter = TypedEventFilter<ProposalHashPushedEvent>;
export interface ProposalHashUpdateEventObject {
    index: BigNumber;
    proposalHash: string;
}
export type ProposalHashUpdateEvent = TypedEvent<[
    BigNumber,
    string
], ProposalHashUpdateEventObject>;
export type ProposalHashUpdateEventFilter = TypedEventFilter<ProposalHashUpdateEvent>;
export interface RequirementsHashUpdatedEventObject {
    requirementsHash: string;
}
export type RequirementsHashUpdatedEvent = TypedEvent<[
    string
], RequirementsHashUpdatedEventObject>;
export type RequirementsHashUpdatedEventFilter = TypedEventFilter<RequirementsHashUpdatedEvent>;
export interface IGCA extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGCAInterface;
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
        allGcas(overrides?: CallOverrides): Promise<[string[]]>;
        bucket(bucketId: BigNumberish, overrides?: CallOverrides): Promise<[IGCA.BucketStructOutput]>;
        bucketGlobalState(bucketId: BigNumberish, overrides?: CallOverrides): Promise<[IGCA.BucketGlobalStateStructOutput]>;
        claimGlowFromInflation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gcaPayoutData(gca: string, overrides?: CallOverrides): Promise<[IGCA.GCAPayoutStructOutput]>;
        "getProposalHashes(uint256,uint256)"(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<[string[]]>;
        "getProposalHashes()"(overrides?: CallOverrides): Promise<[string[]]>;
        isBucketFinalized(bucketId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        "isGCA(address)"(account: string, overrides?: CallOverrides): Promise<[boolean]>;
        "isGCA(address,uint256)"(account: string, index: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        pushHash(hash: BytesLike, incrementSlashNonce: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRequirementsHash(_requirementsHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        submitCompensationPlan(plan: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ], indexOfGCA: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    allGcas(overrides?: CallOverrides): Promise<string[]>;
    bucket(bucketId: BigNumberish, overrides?: CallOverrides): Promise<IGCA.BucketStructOutput>;
    bucketGlobalState(bucketId: BigNumberish, overrides?: CallOverrides): Promise<IGCA.BucketGlobalStateStructOutput>;
    claimGlowFromInflation(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gcaPayoutData(gca: string, overrides?: CallOverrides): Promise<IGCA.GCAPayoutStructOutput>;
    "getProposalHashes(uint256,uint256)"(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<string[]>;
    "getProposalHashes()"(overrides?: CallOverrides): Promise<string[]>;
    isBucketFinalized(bucketId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    "isGCA(address)"(account: string, overrides?: CallOverrides): Promise<boolean>;
    "isGCA(address,uint256)"(account: string, index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    pushHash(hash: BytesLike, incrementSlashNonce: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRequirementsHash(_requirementsHash: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    submitCompensationPlan(plan: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ], indexOfGCA: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allGcas(overrides?: CallOverrides): Promise<string[]>;
        bucket(bucketId: BigNumberish, overrides?: CallOverrides): Promise<IGCA.BucketStructOutput>;
        bucketGlobalState(bucketId: BigNumberish, overrides?: CallOverrides): Promise<IGCA.BucketGlobalStateStructOutput>;
        claimGlowFromInflation(overrides?: CallOverrides): Promise<void>;
        gcaPayoutData(gca: string, overrides?: CallOverrides): Promise<IGCA.GCAPayoutStructOutput>;
        "getProposalHashes(uint256,uint256)"(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<string[]>;
        "getProposalHashes()"(overrides?: CallOverrides): Promise<string[]>;
        isBucketFinalized(bucketId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        "isGCA(address)"(account: string, overrides?: CallOverrides): Promise<boolean>;
        "isGCA(address,uint256)"(account: string, index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        pushHash(hash: BytesLike, incrementSlashNonce: boolean, overrides?: CallOverrides): Promise<void>;
        setRequirementsHash(_requirementsHash: BytesLike, overrides?: CallOverrides): Promise<void>;
        submitCompensationPlan(plan: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ], indexOfGCA: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "BucketSubmissionEvent(uint256,address,uint256,uint256,uint256,uint256,bytes32,bytes)"(bucketId?: BigNumberish | null, gca?: null, slashNonce?: null, totalNewGCC?: null, totalGlwRewardsWeight?: null, totalGRCRewardsWeight?: null, root?: null, extraData?: null): BucketSubmissionEventEventFilter;
        BucketSubmissionEvent(bucketId?: BigNumberish | null, gca?: null, slashNonce?: null, totalNewGCC?: null, totalGlwRewardsWeight?: null, totalGRCRewardsWeight?: null, root?: null, extraData?: null): BucketSubmissionEventEventFilter;
        "CompensationPlanSubmitted(address,uint32[5])"(agent?: string | null, plan?: null): CompensationPlanSubmittedEventFilter;
        CompensationPlanSubmitted(agent?: string | null, plan?: null): CompensationPlanSubmittedEventFilter;
        "GCAPayoutClaimed(address,uint256,uint256)"(agent?: string | null, amount?: null, totalSlashableBalance?: null): GCAPayoutClaimedEventFilter;
        GCAPayoutClaimed(agent?: string | null, amount?: null, totalSlashableBalance?: null): GCAPayoutClaimedEventFilter;
        "GCAsSlashed(address[])"(slashedGcas?: null): GCAsSlashedEventFilter;
        GCAsSlashed(slashedGcas?: null): GCAsSlashedEventFilter;
        "NewGCAsAppointed(address[])"(newGcas?: null): NewGCAsAppointedEventFilter;
        NewGCAsAppointed(newGcas?: null): NewGCAsAppointedEventFilter;
        "ProposalHashPushed(bytes32)"(proposalHash?: null): ProposalHashPushedEventFilter;
        ProposalHashPushed(proposalHash?: null): ProposalHashPushedEventFilter;
        "ProposalHashUpdate(uint256,bytes32)"(index?: BigNumberish | null, proposalHash?: null): ProposalHashUpdateEventFilter;
        ProposalHashUpdate(index?: BigNumberish | null, proposalHash?: null): ProposalHashUpdateEventFilter;
        "RequirementsHashUpdated(bytes32)"(requirementsHash?: null): RequirementsHashUpdatedEventFilter;
        RequirementsHashUpdated(requirementsHash?: null): RequirementsHashUpdatedEventFilter;
    };
    estimateGas: {
        allGcas(overrides?: CallOverrides): Promise<BigNumber>;
        bucket(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        bucketGlobalState(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        claimGlowFromInflation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gcaPayoutData(gca: string, overrides?: CallOverrides): Promise<BigNumber>;
        "getProposalHashes(uint256,uint256)"(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "getProposalHashes()"(overrides?: CallOverrides): Promise<BigNumber>;
        isBucketFinalized(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "isGCA(address)"(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "isGCA(address,uint256)"(account: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        pushHash(hash: BytesLike, incrementSlashNonce: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRequirementsHash(_requirementsHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        submitCompensationPlan(plan: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ], indexOfGCA: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allGcas(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bucket(bucketId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bucketGlobalState(bucketId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimGlowFromInflation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gcaPayoutData(gca: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getProposalHashes(uint256,uint256)"(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getProposalHashes()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBucketFinalized(bucketId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "isGCA(address)"(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "isGCA(address,uint256)"(account: string, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pushHash(hash: BytesLike, incrementSlashNonce: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRequirementsHash(_requirementsHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        submitCompensationPlan(plan: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ], indexOfGCA: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
