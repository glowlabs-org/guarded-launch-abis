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
export declare namespace BucketSubmission {
    type BucketTrackerStruct = {
        lastUpdatedBucket: BigNumberish;
        maxBucketId: BigNumberish;
        firstAddedBucketId: BigNumberish;
    };
    type BucketTrackerStructOutput = [number, number, number] & {
        lastUpdatedBucket: number;
        maxBucketId: number;
        firstAddedBucketId: number;
    };
    type WeeklyRewardStruct = {
        inheritedFromLastWeek: boolean;
        amountInBucket: BigNumberish;
        amountToDeduct: BigNumberish;
    };
    type WeeklyRewardStructOutput = [boolean, BigNumber, BigNumber] & {
        inheritedFromLastWeek: boolean;
        amountInBucket: BigNumber;
        amountToDeduct: BigNumber;
    };
}
export interface MinerPoolAndGCAInterface extends utils.Interface {
    functions: {
        "CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH()": FunctionFragment;
        "GCC()": FunctionFragment;
        "GENESIS_TIMESTAMP()": FunctionFragment;
        "GLOW_REWARDS_PER_BUCKET()": FunctionFragment;
        "GLOW_TOKEN()": FunctionFragment;
        "GOVERNANCE()": FunctionFragment;
        "HOLDING_CONTRACT()": FunctionFragment;
        "OFFSET_LEFT()": FunctionFragment;
        "OFFSET_RIGHT()": FunctionFragment;
        "REWARDS_PER_SECOND_FOR_ALL()": FunctionFragment;
        "SHARES_REQUIRED_PER_COMP_PLAN()": FunctionFragment;
        "TOTAL_VESTING_PERIODS()": FunctionFragment;
        "USDC()": FunctionFragment;
        "allGcas()": FunctionFragment;
        "amountWithdrawnAtPaymentNonce(address,uint256)": FunctionFragment;
        "bucket(uint256)": FunctionFragment;
        "bucketClaimBitmap(uint256,address)": FunctionFragment;
        "bucketDelayDuration()": FunctionFragment;
        "bucketEndSubmissionTimestampNotReinstated(uint256)": FunctionFragment;
        "bucketFinalizationTimestampNotReinstated(uint256)": FunctionFragment;
        "bucketGlobalState(uint256)": FunctionFragment;
        "bucketStartSubmissionTimestampNotReinstated(uint256)": FunctionFragment;
        "claimGlowFromInflation()": FunctionFragment;
        "claimPayout(address,uint256,address[],uint256,bool,bytes)": FunctionFragment;
        "claimRewardFromBucket(uint256,uint256,uint256,bytes32[],uint256,address,bool,bytes)": FunctionFragment;
        "createClaimRewardFromBucketDigest(uint256,uint256,uint256,uint256,bool)": FunctionFragment;
        "createRelayDigest(address,uint256,uint256)": FunctionFragment;
        "currentBucket()": FunctionFragment;
        "delayBucketFinalization(uint256)": FunctionFragment;
        "donateToUSDCMinerRewardsPool(uint256)": FunctionFragment;
        "donateToUSDCMinerRewardsPoolEarlyLiquidity(uint256)": FunctionFragment;
        "earlyLiquidity()": FunctionFragment;
        "eip712Domain()": FunctionFragment;
        "executeAgainstHash(address[],address[],uint256)": FunctionFragment;
        "gcaAgents(uint256)": FunctionFragment;
        "gcaPayoutData(address)": FunctionFragment;
        "getBucketTracker()": FunctionFragment;
        "getPayoutData(address,uint256,address[],uint256)": FunctionFragment;
        "getProposalHashes(uint256,uint256)": FunctionFragment;
        "getProposalHashes()": FunctionFragment;
        "handleMintToCarbonCreditAuction(uint256)": FunctionFragment;
        "hasBucketBeenDelayed(uint256)": FunctionFragment;
        "isBucketFinalized(uint256)": FunctionFragment;
        "isGCA(address)": FunctionFragment;
        "isGCA(address,uint256)": FunctionFragment;
        "isSlashed(address)": FunctionFragment;
        "nextProposalIndexToUpdate()": FunctionFragment;
        "nextRelayNonce(address)": FunctionFragment;
        "paymentNonce()": FunctionFragment;
        "paymentNonceToCompensationPlan(uint256,uint256)": FunctionFragment;
        "paymentNonceToShiftStartTimestamp(uint256)": FunctionFragment;
        "payoutNonceToGCAHash(uint256)": FunctionFragment;
        "proposalHashes(uint256)": FunctionFragment;
        "pushHash(bytes32,bool)": FunctionFragment;
        "requirementsHash()": FunctionFragment;
        "reward(uint256)": FunctionFragment;
        "setRequirementsHash(bytes32)": FunctionFragment;
        "slashNonce()": FunctionFragment;
        "slashNonceToSlashTimestamp(uint256)": FunctionFragment;
        "submitCompensationPlan(uint32[5],uint256)": FunctionFragment;
        "submitWeeklyReport(uint256,uint256,uint256,uint256,bytes32)": FunctionFragment;
        "submitWeeklyReportWithBytes(uint256,uint256,uint256,uint256,bytes32,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH" | "GCC" | "GENESIS_TIMESTAMP" | "GLOW_REWARDS_PER_BUCKET" | "GLOW_TOKEN" | "GOVERNANCE" | "HOLDING_CONTRACT" | "OFFSET_LEFT" | "OFFSET_RIGHT" | "REWARDS_PER_SECOND_FOR_ALL" | "SHARES_REQUIRED_PER_COMP_PLAN" | "TOTAL_VESTING_PERIODS" | "USDC" | "allGcas" | "amountWithdrawnAtPaymentNonce" | "bucket" | "bucketClaimBitmap" | "bucketDelayDuration" | "bucketEndSubmissionTimestampNotReinstated" | "bucketFinalizationTimestampNotReinstated" | "bucketGlobalState" | "bucketStartSubmissionTimestampNotReinstated" | "claimGlowFromInflation" | "claimPayout" | "claimRewardFromBucket" | "createClaimRewardFromBucketDigest" | "createRelayDigest" | "currentBucket" | "delayBucketFinalization" | "donateToUSDCMinerRewardsPool" | "donateToUSDCMinerRewardsPoolEarlyLiquidity" | "earlyLiquidity" | "eip712Domain" | "executeAgainstHash" | "gcaAgents" | "gcaPayoutData" | "getBucketTracker" | "getPayoutData" | "getProposalHashes(uint256,uint256)" | "getProposalHashes()" | "handleMintToCarbonCreditAuction" | "hasBucketBeenDelayed" | "isBucketFinalized" | "isGCA(address)" | "isGCA(address,uint256)" | "isSlashed" | "nextProposalIndexToUpdate" | "nextRelayNonce" | "paymentNonce" | "paymentNonceToCompensationPlan" | "paymentNonceToShiftStartTimestamp" | "payoutNonceToGCAHash" | "proposalHashes" | "pushHash" | "requirementsHash" | "reward" | "setRequirementsHash" | "slashNonce" | "slashNonceToSlashTimestamp" | "submitCompensationPlan" | "submitWeeklyReport" | "submitWeeklyReportWithBytes"): FunctionFragment;
    encodeFunctionData(functionFragment: "CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "GCC", values?: undefined): string;
    encodeFunctionData(functionFragment: "GENESIS_TIMESTAMP", values?: undefined): string;
    encodeFunctionData(functionFragment: "GLOW_REWARDS_PER_BUCKET", values?: undefined): string;
    encodeFunctionData(functionFragment: "GLOW_TOKEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "GOVERNANCE", values?: undefined): string;
    encodeFunctionData(functionFragment: "HOLDING_CONTRACT", values?: undefined): string;
    encodeFunctionData(functionFragment: "OFFSET_LEFT", values?: undefined): string;
    encodeFunctionData(functionFragment: "OFFSET_RIGHT", values?: undefined): string;
    encodeFunctionData(functionFragment: "REWARDS_PER_SECOND_FOR_ALL", values?: undefined): string;
    encodeFunctionData(functionFragment: "SHARES_REQUIRED_PER_COMP_PLAN", values?: undefined): string;
    encodeFunctionData(functionFragment: "TOTAL_VESTING_PERIODS", values?: undefined): string;
    encodeFunctionData(functionFragment: "USDC", values?: undefined): string;
    encodeFunctionData(functionFragment: "allGcas", values?: undefined): string;
    encodeFunctionData(functionFragment: "amountWithdrawnAtPaymentNonce", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "bucket", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "bucketClaimBitmap", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "bucketDelayDuration", values?: undefined): string;
    encodeFunctionData(functionFragment: "bucketEndSubmissionTimestampNotReinstated", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "bucketFinalizationTimestampNotReinstated", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "bucketGlobalState", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "bucketStartSubmissionTimestampNotReinstated", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimGlowFromInflation", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimPayout", values: [string, BigNumberish, string[], BigNumberish, boolean, BytesLike]): string;
    encodeFunctionData(functionFragment: "claimRewardFromBucket", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike[],
        BigNumberish,
        string,
        boolean,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "createClaimRewardFromBucketDigest", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "createRelayDigest", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "currentBucket", values?: undefined): string;
    encodeFunctionData(functionFragment: "delayBucketFinalization", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "donateToUSDCMinerRewardsPool", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "donateToUSDCMinerRewardsPoolEarlyLiquidity", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "earlyLiquidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeAgainstHash", values: [string[], string[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "gcaAgents", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "gcaPayoutData", values: [string]): string;
    encodeFunctionData(functionFragment: "getBucketTracker", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPayoutData", values: [string, BigNumberish, string[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "getProposalHashes(uint256,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getProposalHashes()", values?: undefined): string;
    encodeFunctionData(functionFragment: "handleMintToCarbonCreditAuction", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "hasBucketBeenDelayed", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isBucketFinalized", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isGCA(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "isGCA(address,uint256)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isSlashed", values: [string]): string;
    encodeFunctionData(functionFragment: "nextProposalIndexToUpdate", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextRelayNonce", values: [string]): string;
    encodeFunctionData(functionFragment: "paymentNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "paymentNonceToCompensationPlan", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "paymentNonceToShiftStartTimestamp", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "payoutNonceToGCAHash", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposalHashes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pushHash", values: [BytesLike, boolean]): string;
    encodeFunctionData(functionFragment: "requirementsHash", values?: undefined): string;
    encodeFunctionData(functionFragment: "reward", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRequirementsHash", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "slashNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "slashNonceToSlashTimestamp", values: [BigNumberish]): string;
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
    encodeFunctionData(functionFragment: "submitWeeklyReport", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "submitWeeklyReportWithBytes", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GCC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GENESIS_TIMESTAMP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GLOW_REWARDS_PER_BUCKET", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GLOW_TOKEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GOVERNANCE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "HOLDING_CONTRACT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "OFFSET_LEFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "OFFSET_RIGHT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "REWARDS_PER_SECOND_FOR_ALL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SHARES_REQUIRED_PER_COMP_PLAN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TOTAL_VESTING_PERIODS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "USDC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allGcas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "amountWithdrawnAtPaymentNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bucket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bucketClaimBitmap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bucketDelayDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bucketEndSubmissionTimestampNotReinstated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bucketFinalizationTimestampNotReinstated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bucketGlobalState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bucketStartSubmissionTimestampNotReinstated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimGlowFromInflation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimPayout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewardFromBucket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createClaimRewardFromBucketDigest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createRelayDigest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentBucket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delayBucketFinalization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "donateToUSDCMinerRewardsPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "donateToUSDCMinerRewardsPoolEarlyLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "earlyLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeAgainstHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gcaAgents", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gcaPayoutData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBucketTracker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPayoutData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposalHashes(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposalHashes()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleMintToCarbonCreditAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasBucketBeenDelayed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBucketFinalized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGCA(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGCA(address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSlashed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextProposalIndexToUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextRelayNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paymentNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paymentNonceToCompensationPlan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paymentNonceToShiftStartTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payoutNonceToGCAHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalHashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pushHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requirementsHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRequirementsHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slashNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slashNonceToSlashTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitCompensationPlan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitWeeklyReport", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitWeeklyReportWithBytes", data: BytesLike): Result;
    events: {
        "AmountDonatedToBucket(uint256,uint256)": EventFragment;
        "BucketSubmissionEvent(uint256,address,uint256,uint256,uint256,uint256,bytes32,bytes)": EventFragment;
        "CompensationPlanSubmitted(address,uint32[5])": EventFragment;
        "EIP712DomainChanged()": EventFragment;
        "GCAPayoutClaimed(address,uint256,uint256)": EventFragment;
        "GCAsSlashed(address[])": EventFragment;
        "NewGCAsAppointed(address[])": EventFragment;
        "ProposalHashPushed(bytes32)": EventFragment;
        "ProposalHashUpdate(uint256,bytes32)": EventFragment;
        "RequirementsHashUpdated(bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AmountDonatedToBucket"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BucketSubmissionEvent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CompensationPlanSubmitted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EIP712DomainChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GCAPayoutClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GCAsSlashed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewGCAsAppointed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalHashPushed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalHashUpdate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RequirementsHashUpdated"): EventFragment;
}
export interface AmountDonatedToBucketEventObject {
    bucketId: BigNumber;
    totalAmountDonated: BigNumber;
}
export type AmountDonatedToBucketEvent = TypedEvent<[
    BigNumber,
    BigNumber
], AmountDonatedToBucketEventObject>;
export type AmountDonatedToBucketEventFilter = TypedEventFilter<AmountDonatedToBucketEvent>;
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
export interface EIP712DomainChangedEventObject {
}
export type EIP712DomainChangedEvent = TypedEvent<[
], EIP712DomainChangedEventObject>;
export type EIP712DomainChangedEventFilter = TypedEventFilter<EIP712DomainChangedEvent>;
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
export interface MinerPoolAndGCA extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MinerPoolAndGCAInterface;
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
        CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        GCC(overrides?: CallOverrides): Promise<[string]>;
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<[BigNumber]>;
        GLOW_REWARDS_PER_BUCKET(overrides?: CallOverrides): Promise<[BigNumber]>;
        GLOW_TOKEN(overrides?: CallOverrides): Promise<[string]>;
        GOVERNANCE(overrides?: CallOverrides): Promise<[string]>;
        HOLDING_CONTRACT(overrides?: CallOverrides): Promise<[string]>;
        OFFSET_LEFT(overrides?: CallOverrides): Promise<[BigNumber]>;
        OFFSET_RIGHT(overrides?: CallOverrides): Promise<[BigNumber]>;
        REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<[BigNumber]>;
        SHARES_REQUIRED_PER_COMP_PLAN(overrides?: CallOverrides): Promise<[BigNumber]>;
        TOTAL_VESTING_PERIODS(overrides?: CallOverrides): Promise<[BigNumber]>;
        USDC(overrides?: CallOverrides): Promise<[string]>;
        allGcas(overrides?: CallOverrides): Promise<[string[]]>;
        amountWithdrawnAtPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        bucket(bucketId: BigNumberish, overrides?: CallOverrides): Promise<[IGCA.BucketStructOutput] & {
            bucket: IGCA.BucketStructOutput;
        }>;
        bucketClaimBitmap(bucketId: BigNumberish, user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        bucketDelayDuration(overrides?: CallOverrides): Promise<[BigNumber]>;
        bucketEndSubmissionTimestampNotReinstated(bucketId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        bucketFinalizationTimestampNotReinstated(bucketId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        bucketGlobalState(bucketId: BigNumberish, overrides?: CallOverrides): Promise<[IGCA.BucketGlobalStateStructOutput]>;
        bucketStartSubmissionTimestampNotReinstated(bucketId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimGlowFromInflation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimPayout(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, claimFromInflation: boolean, sig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimRewardFromBucket(bucketId: BigNumberish, glwWeight: BigNumberish, usdcWeight: BigNumberish, proof: BytesLike[], index: BigNumberish, user: string, claimFromInflation: boolean, signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createClaimRewardFromBucketDigest(bucketId: BigNumberish, glwWeight: BigNumberish, usdcWeight: BigNumberish, index: BigNumberish, claimFromInflation: boolean, overrides?: CallOverrides): Promise<[string]>;
        createRelayDigest(relayer: string, paymentNonce: BigNumberish, relayNonce: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        currentBucket(overrides?: CallOverrides): Promise<[BigNumber]>;
        delayBucketFinalization(bucketId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        donateToUSDCMinerRewardsPool(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        donateToUSDCMinerRewardsPoolEarlyLiquidity(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        earlyLiquidity(overrides?: CallOverrides): Promise<[string]>;
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
        executeAgainstHash(gcasToSlash: string[], newGCAs: string[], proposalCreationTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gcaAgents(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        gcaPayoutData(gca: string, overrides?: CallOverrides): Promise<[IGCA.GCAPayoutStructOutput]>;
        getBucketTracker(overrides?: CallOverrides): Promise<[BucketSubmission.BucketTrackerStructOutput]>;
        getPayoutData(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            withdrawableAmount: BigNumber;
            slashableAmount: BigNumber;
            amountAlreadyWithdrawn: BigNumber;
        }>;
        "getProposalHashes(uint256,uint256)"(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<[string[]]>;
        "getProposalHashes()"(overrides?: CallOverrides): Promise<[string[]]>;
        handleMintToCarbonCreditAuction(bucketId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasBucketBeenDelayed(bucketId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        isBucketFinalized(bucketId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        "isGCA(address)"(account: string, overrides?: CallOverrides): Promise<[boolean]>;
        "isGCA(address,uint256)"(account: string, index: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        isSlashed(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        nextProposalIndexToUpdate(overrides?: CallOverrides): Promise<[BigNumber]>;
        nextRelayNonce(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        paymentNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        paymentNonceToCompensationPlan(nonce: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<[[number, number, number, number, number]]>;
        paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        payoutNonceToGCAHash(nonce: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        proposalHashes(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        pushHash(hash: BytesLike, incrementSlashNonce: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        requirementsHash(overrides?: CallOverrides): Promise<[string]>;
        reward(id: BigNumberish, overrides?: CallOverrides): Promise<[BucketSubmission.WeeklyRewardStructOutput]>;
        setRequirementsHash(_requirementsHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        slashNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        slashNonceToSlashTimestamp(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        submitCompensationPlan(plan: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ], indexOfGCA: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        submitWeeklyReport(bucketId: BigNumberish, totalNewGCC: BigNumberish, totalGlwRewardsWeight: BigNumberish, totalGRCRewardsWeight: BigNumberish, root: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        submitWeeklyReportWithBytes(bucketId: BigNumberish, totalNewGCC: BigNumberish, totalGlwRewardsWeight: BigNumberish, totalGRCRewardsWeight: BigNumberish, root: BytesLike, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    GCC(overrides?: CallOverrides): Promise<string>;
    GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
    GLOW_REWARDS_PER_BUCKET(overrides?: CallOverrides): Promise<BigNumber>;
    GLOW_TOKEN(overrides?: CallOverrides): Promise<string>;
    GOVERNANCE(overrides?: CallOverrides): Promise<string>;
    HOLDING_CONTRACT(overrides?: CallOverrides): Promise<string>;
    OFFSET_LEFT(overrides?: CallOverrides): Promise<BigNumber>;
    OFFSET_RIGHT(overrides?: CallOverrides): Promise<BigNumber>;
    REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<BigNumber>;
    SHARES_REQUIRED_PER_COMP_PLAN(overrides?: CallOverrides): Promise<BigNumber>;
    TOTAL_VESTING_PERIODS(overrides?: CallOverrides): Promise<BigNumber>;
    USDC(overrides?: CallOverrides): Promise<string>;
    allGcas(overrides?: CallOverrides): Promise<string[]>;
    amountWithdrawnAtPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    bucket(bucketId: BigNumberish, overrides?: CallOverrides): Promise<IGCA.BucketStructOutput>;
    bucketClaimBitmap(bucketId: BigNumberish, user: string, overrides?: CallOverrides): Promise<BigNumber>;
    bucketDelayDuration(overrides?: CallOverrides): Promise<BigNumber>;
    bucketEndSubmissionTimestampNotReinstated(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    bucketFinalizationTimestampNotReinstated(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    bucketGlobalState(bucketId: BigNumberish, overrides?: CallOverrides): Promise<IGCA.BucketGlobalStateStructOutput>;
    bucketStartSubmissionTimestampNotReinstated(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    claimGlowFromInflation(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimPayout(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, claimFromInflation: boolean, sig: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimRewardFromBucket(bucketId: BigNumberish, glwWeight: BigNumberish, usdcWeight: BigNumberish, proof: BytesLike[], index: BigNumberish, user: string, claimFromInflation: boolean, signature: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createClaimRewardFromBucketDigest(bucketId: BigNumberish, glwWeight: BigNumberish, usdcWeight: BigNumberish, index: BigNumberish, claimFromInflation: boolean, overrides?: CallOverrides): Promise<string>;
    createRelayDigest(relayer: string, paymentNonce: BigNumberish, relayNonce: BigNumberish, overrides?: CallOverrides): Promise<string>;
    currentBucket(overrides?: CallOverrides): Promise<BigNumber>;
    delayBucketFinalization(bucketId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    donateToUSDCMinerRewardsPool(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    donateToUSDCMinerRewardsPoolEarlyLiquidity(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    earlyLiquidity(overrides?: CallOverrides): Promise<string>;
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
    executeAgainstHash(gcasToSlash: string[], newGCAs: string[], proposalCreationTimestamp: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gcaAgents(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    gcaPayoutData(gca: string, overrides?: CallOverrides): Promise<IGCA.GCAPayoutStructOutput>;
    getBucketTracker(overrides?: CallOverrides): Promise<BucketSubmission.BucketTrackerStructOutput>;
    getPayoutData(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        withdrawableAmount: BigNumber;
        slashableAmount: BigNumber;
        amountAlreadyWithdrawn: BigNumber;
    }>;
    "getProposalHashes(uint256,uint256)"(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<string[]>;
    "getProposalHashes()"(overrides?: CallOverrides): Promise<string[]>;
    handleMintToCarbonCreditAuction(bucketId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasBucketBeenDelayed(bucketId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    isBucketFinalized(bucketId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    "isGCA(address)"(account: string, overrides?: CallOverrides): Promise<boolean>;
    "isGCA(address,uint256)"(account: string, index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    isSlashed(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    nextProposalIndexToUpdate(overrides?: CallOverrides): Promise<BigNumber>;
    nextRelayNonce(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    paymentNonce(overrides?: CallOverrides): Promise<BigNumber>;
    paymentNonceToCompensationPlan(nonce: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<[number, number, number, number, number]>;
    paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    payoutNonceToGCAHash(nonce: BigNumberish, overrides?: CallOverrides): Promise<string>;
    proposalHashes(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    pushHash(hash: BytesLike, incrementSlashNonce: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    requirementsHash(overrides?: CallOverrides): Promise<string>;
    reward(id: BigNumberish, overrides?: CallOverrides): Promise<BucketSubmission.WeeklyRewardStructOutput>;
    setRequirementsHash(_requirementsHash: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    slashNonce(overrides?: CallOverrides): Promise<BigNumber>;
    slashNonceToSlashTimestamp(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    submitCompensationPlan(plan: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ], indexOfGCA: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    submitWeeklyReport(bucketId: BigNumberish, totalNewGCC: BigNumberish, totalGlwRewardsWeight: BigNumberish, totalGRCRewardsWeight: BigNumberish, root: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    submitWeeklyReportWithBytes(bucketId: BigNumberish, totalNewGCC: BigNumberish, totalGlwRewardsWeight: BigNumberish, totalGRCRewardsWeight: BigNumberish, root: BytesLike, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        GCC(overrides?: CallOverrides): Promise<string>;
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
        GLOW_REWARDS_PER_BUCKET(overrides?: CallOverrides): Promise<BigNumber>;
        GLOW_TOKEN(overrides?: CallOverrides): Promise<string>;
        GOVERNANCE(overrides?: CallOverrides): Promise<string>;
        HOLDING_CONTRACT(overrides?: CallOverrides): Promise<string>;
        OFFSET_LEFT(overrides?: CallOverrides): Promise<BigNumber>;
        OFFSET_RIGHT(overrides?: CallOverrides): Promise<BigNumber>;
        REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<BigNumber>;
        SHARES_REQUIRED_PER_COMP_PLAN(overrides?: CallOverrides): Promise<BigNumber>;
        TOTAL_VESTING_PERIODS(overrides?: CallOverrides): Promise<BigNumber>;
        USDC(overrides?: CallOverrides): Promise<string>;
        allGcas(overrides?: CallOverrides): Promise<string[]>;
        amountWithdrawnAtPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        bucket(bucketId: BigNumberish, overrides?: CallOverrides): Promise<IGCA.BucketStructOutput>;
        bucketClaimBitmap(bucketId: BigNumberish, user: string, overrides?: CallOverrides): Promise<BigNumber>;
        bucketDelayDuration(overrides?: CallOverrides): Promise<BigNumber>;
        bucketEndSubmissionTimestampNotReinstated(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        bucketFinalizationTimestampNotReinstated(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        bucketGlobalState(bucketId: BigNumberish, overrides?: CallOverrides): Promise<IGCA.BucketGlobalStateStructOutput>;
        bucketStartSubmissionTimestampNotReinstated(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        claimGlowFromInflation(overrides?: CallOverrides): Promise<void>;
        claimPayout(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, claimFromInflation: boolean, sig: BytesLike, overrides?: CallOverrides): Promise<void>;
        claimRewardFromBucket(bucketId: BigNumberish, glwWeight: BigNumberish, usdcWeight: BigNumberish, proof: BytesLike[], index: BigNumberish, user: string, claimFromInflation: boolean, signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        createClaimRewardFromBucketDigest(bucketId: BigNumberish, glwWeight: BigNumberish, usdcWeight: BigNumberish, index: BigNumberish, claimFromInflation: boolean, overrides?: CallOverrides): Promise<string>;
        createRelayDigest(relayer: string, paymentNonce: BigNumberish, relayNonce: BigNumberish, overrides?: CallOverrides): Promise<string>;
        currentBucket(overrides?: CallOverrides): Promise<BigNumber>;
        delayBucketFinalization(bucketId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        donateToUSDCMinerRewardsPool(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        donateToUSDCMinerRewardsPoolEarlyLiquidity(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        earlyLiquidity(overrides?: CallOverrides): Promise<string>;
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
        executeAgainstHash(gcasToSlash: string[], newGCAs: string[], proposalCreationTimestamp: BigNumberish, overrides?: CallOverrides): Promise<void>;
        gcaAgents(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        gcaPayoutData(gca: string, overrides?: CallOverrides): Promise<IGCA.GCAPayoutStructOutput>;
        getBucketTracker(overrides?: CallOverrides): Promise<BucketSubmission.BucketTrackerStructOutput>;
        getPayoutData(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            withdrawableAmount: BigNumber;
            slashableAmount: BigNumber;
            amountAlreadyWithdrawn: BigNumber;
        }>;
        "getProposalHashes(uint256,uint256)"(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<string[]>;
        "getProposalHashes()"(overrides?: CallOverrides): Promise<string[]>;
        handleMintToCarbonCreditAuction(bucketId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        hasBucketBeenDelayed(bucketId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        isBucketFinalized(bucketId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        "isGCA(address)"(account: string, overrides?: CallOverrides): Promise<boolean>;
        "isGCA(address,uint256)"(account: string, index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        isSlashed(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        nextProposalIndexToUpdate(overrides?: CallOverrides): Promise<BigNumber>;
        nextRelayNonce(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonce(overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonceToCompensationPlan(nonce: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<[number, number, number, number, number]>;
        paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        payoutNonceToGCAHash(nonce: BigNumberish, overrides?: CallOverrides): Promise<string>;
        proposalHashes(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        pushHash(hash: BytesLike, incrementSlashNonce: boolean, overrides?: CallOverrides): Promise<void>;
        requirementsHash(overrides?: CallOverrides): Promise<string>;
        reward(id: BigNumberish, overrides?: CallOverrides): Promise<BucketSubmission.WeeklyRewardStructOutput>;
        setRequirementsHash(_requirementsHash: BytesLike, overrides?: CallOverrides): Promise<void>;
        slashNonce(overrides?: CallOverrides): Promise<BigNumber>;
        slashNonceToSlashTimestamp(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        submitCompensationPlan(plan: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ], indexOfGCA: BigNumberish, overrides?: CallOverrides): Promise<void>;
        submitWeeklyReport(bucketId: BigNumberish, totalNewGCC: BigNumberish, totalGlwRewardsWeight: BigNumberish, totalGRCRewardsWeight: BigNumberish, root: BytesLike, overrides?: CallOverrides): Promise<void>;
        submitWeeklyReportWithBytes(bucketId: BigNumberish, totalNewGCC: BigNumberish, totalGlwRewardsWeight: BigNumberish, totalGRCRewardsWeight: BigNumberish, root: BytesLike, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AmountDonatedToBucket(uint256,uint256)"(bucketId?: BigNumberish | null, totalAmountDonated?: null): AmountDonatedToBucketEventFilter;
        AmountDonatedToBucket(bucketId?: BigNumberish | null, totalAmountDonated?: null): AmountDonatedToBucketEventFilter;
        "BucketSubmissionEvent(uint256,address,uint256,uint256,uint256,uint256,bytes32,bytes)"(bucketId?: BigNumberish | null, gca?: null, slashNonce?: null, totalNewGCC?: null, totalGlwRewardsWeight?: null, totalGRCRewardsWeight?: null, root?: null, extraData?: null): BucketSubmissionEventEventFilter;
        BucketSubmissionEvent(bucketId?: BigNumberish | null, gca?: null, slashNonce?: null, totalNewGCC?: null, totalGlwRewardsWeight?: null, totalGRCRewardsWeight?: null, root?: null, extraData?: null): BucketSubmissionEventEventFilter;
        "CompensationPlanSubmitted(address,uint32[5])"(agent?: string | null, plan?: null): CompensationPlanSubmittedEventFilter;
        CompensationPlanSubmitted(agent?: string | null, plan?: null): CompensationPlanSubmittedEventFilter;
        "EIP712DomainChanged()"(): EIP712DomainChangedEventFilter;
        EIP712DomainChanged(): EIP712DomainChangedEventFilter;
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
        CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        GCC(overrides?: CallOverrides): Promise<BigNumber>;
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
        GLOW_REWARDS_PER_BUCKET(overrides?: CallOverrides): Promise<BigNumber>;
        GLOW_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;
        GOVERNANCE(overrides?: CallOverrides): Promise<BigNumber>;
        HOLDING_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;
        OFFSET_LEFT(overrides?: CallOverrides): Promise<BigNumber>;
        OFFSET_RIGHT(overrides?: CallOverrides): Promise<BigNumber>;
        REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<BigNumber>;
        SHARES_REQUIRED_PER_COMP_PLAN(overrides?: CallOverrides): Promise<BigNumber>;
        TOTAL_VESTING_PERIODS(overrides?: CallOverrides): Promise<BigNumber>;
        USDC(overrides?: CallOverrides): Promise<BigNumber>;
        allGcas(overrides?: CallOverrides): Promise<BigNumber>;
        amountWithdrawnAtPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        bucket(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        bucketClaimBitmap(bucketId: BigNumberish, user: string, overrides?: CallOverrides): Promise<BigNumber>;
        bucketDelayDuration(overrides?: CallOverrides): Promise<BigNumber>;
        bucketEndSubmissionTimestampNotReinstated(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        bucketFinalizationTimestampNotReinstated(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        bucketGlobalState(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        bucketStartSubmissionTimestampNotReinstated(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        claimGlowFromInflation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimPayout(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, claimFromInflation: boolean, sig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimRewardFromBucket(bucketId: BigNumberish, glwWeight: BigNumberish, usdcWeight: BigNumberish, proof: BytesLike[], index: BigNumberish, user: string, claimFromInflation: boolean, signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createClaimRewardFromBucketDigest(bucketId: BigNumberish, glwWeight: BigNumberish, usdcWeight: BigNumberish, index: BigNumberish, claimFromInflation: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        createRelayDigest(relayer: string, paymentNonce: BigNumberish, relayNonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        currentBucket(overrides?: CallOverrides): Promise<BigNumber>;
        delayBucketFinalization(bucketId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        donateToUSDCMinerRewardsPool(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        donateToUSDCMinerRewardsPoolEarlyLiquidity(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        earlyLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
        eip712Domain(overrides?: CallOverrides): Promise<BigNumber>;
        executeAgainstHash(gcasToSlash: string[], newGCAs: string[], proposalCreationTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gcaAgents(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        gcaPayoutData(gca: string, overrides?: CallOverrides): Promise<BigNumber>;
        getBucketTracker(overrides?: CallOverrides): Promise<BigNumber>;
        getPayoutData(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "getProposalHashes(uint256,uint256)"(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "getProposalHashes()"(overrides?: CallOverrides): Promise<BigNumber>;
        handleMintToCarbonCreditAuction(bucketId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasBucketBeenDelayed(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isBucketFinalized(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "isGCA(address)"(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "isGCA(address,uint256)"(account: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isSlashed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        nextProposalIndexToUpdate(overrides?: CallOverrides): Promise<BigNumber>;
        nextRelayNonce(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonce(overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonceToCompensationPlan(nonce: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        payoutNonceToGCAHash(nonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposalHashes(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        pushHash(hash: BytesLike, incrementSlashNonce: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        requirementsHash(overrides?: CallOverrides): Promise<BigNumber>;
        reward(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setRequirementsHash(_requirementsHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        slashNonce(overrides?: CallOverrides): Promise<BigNumber>;
        slashNonceToSlashTimestamp(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        submitCompensationPlan(plan: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ], indexOfGCA: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        submitWeeklyReport(bucketId: BigNumberish, totalNewGCC: BigNumberish, totalGlwRewardsWeight: BigNumberish, totalGRCRewardsWeight: BigNumberish, root: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        submitWeeklyReportWithBytes(bucketId: BigNumberish, totalNewGCC: BigNumberish, totalGlwRewardsWeight: BigNumberish, totalGRCRewardsWeight: BigNumberish, root: BytesLike, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GCC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GLOW_REWARDS_PER_BUCKET(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GLOW_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GOVERNANCE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        HOLDING_CONTRACT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        OFFSET_LEFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        OFFSET_RIGHT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SHARES_REQUIRED_PER_COMP_PLAN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TOTAL_VESTING_PERIODS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        USDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allGcas(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        amountWithdrawnAtPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bucket(bucketId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bucketClaimBitmap(bucketId: BigNumberish, user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bucketDelayDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bucketEndSubmissionTimestampNotReinstated(bucketId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bucketFinalizationTimestampNotReinstated(bucketId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bucketGlobalState(bucketId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bucketStartSubmissionTimestampNotReinstated(bucketId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimGlowFromInflation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimPayout(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, claimFromInflation: boolean, sig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimRewardFromBucket(bucketId: BigNumberish, glwWeight: BigNumberish, usdcWeight: BigNumberish, proof: BytesLike[], index: BigNumberish, user: string, claimFromInflation: boolean, signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createClaimRewardFromBucketDigest(bucketId: BigNumberish, glwWeight: BigNumberish, usdcWeight: BigNumberish, index: BigNumberish, claimFromInflation: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createRelayDigest(relayer: string, paymentNonce: BigNumberish, relayNonce: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentBucket(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delayBucketFinalization(bucketId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        donateToUSDCMinerRewardsPool(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        donateToUSDCMinerRewardsPoolEarlyLiquidity(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        earlyLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        eip712Domain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeAgainstHash(gcasToSlash: string[], newGCAs: string[], proposalCreationTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gcaAgents(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gcaPayoutData(gca: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBucketTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPayoutData(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getProposalHashes(uint256,uint256)"(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getProposalHashes()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        handleMintToCarbonCreditAuction(bucketId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasBucketBeenDelayed(bucketId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBucketFinalized(bucketId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "isGCA(address)"(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "isGCA(address,uint256)"(account: string, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isSlashed(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextProposalIndexToUpdate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextRelayNonce(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paymentNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paymentNonceToCompensationPlan(nonce: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        payoutNonceToGCAHash(nonce: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalHashes(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pushHash(hash: BytesLike, incrementSlashNonce: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        requirementsHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reward(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setRequirementsHash(_requirementsHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        slashNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        slashNonceToSlashTimestamp(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        submitCompensationPlan(plan: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ], indexOfGCA: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        submitWeeklyReport(bucketId: BigNumberish, totalNewGCC: BigNumberish, totalGlwRewardsWeight: BigNumberish, totalGRCRewardsWeight: BigNumberish, root: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        submitWeeklyReportWithBytes(bucketId: BigNumberish, totalNewGCC: BigNumberish, totalGlwRewardsWeight: BigNumberish, totalGRCRewardsWeight: BigNumberish, root: BytesLike, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
