import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
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
export interface BucketSubmissionInterface extends utils.Interface {
    functions: {
        "OFFSET_LEFT()": FunctionFragment;
        "OFFSET_RIGHT()": FunctionFragment;
        "TOTAL_VESTING_PERIODS()": FunctionFragment;
        "currentBucket()": FunctionFragment;
        "getBucketTracker()": FunctionFragment;
        "reward(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "OFFSET_LEFT" | "OFFSET_RIGHT" | "TOTAL_VESTING_PERIODS" | "currentBucket" | "getBucketTracker" | "reward"): FunctionFragment;
    encodeFunctionData(functionFragment: "OFFSET_LEFT", values?: undefined): string;
    encodeFunctionData(functionFragment: "OFFSET_RIGHT", values?: undefined): string;
    encodeFunctionData(functionFragment: "TOTAL_VESTING_PERIODS", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentBucket", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBucketTracker", values?: undefined): string;
    encodeFunctionData(functionFragment: "reward", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "OFFSET_LEFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "OFFSET_RIGHT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TOTAL_VESTING_PERIODS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentBucket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBucketTracker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reward", data: BytesLike): Result;
    events: {
        "AmountDonatedToBucket(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AmountDonatedToBucket"): EventFragment;
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
export interface BucketSubmission extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BucketSubmissionInterface;
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
        OFFSET_LEFT(overrides?: CallOverrides): Promise<[BigNumber]>;
        OFFSET_RIGHT(overrides?: CallOverrides): Promise<[BigNumber]>;
        TOTAL_VESTING_PERIODS(overrides?: CallOverrides): Promise<[BigNumber]>;
        currentBucket(overrides?: CallOverrides): Promise<[BigNumber]>;
        getBucketTracker(overrides?: CallOverrides): Promise<[BucketSubmission.BucketTrackerStructOutput]>;
        reward(id: BigNumberish, overrides?: CallOverrides): Promise<[BucketSubmission.WeeklyRewardStructOutput]>;
    };
    OFFSET_LEFT(overrides?: CallOverrides): Promise<BigNumber>;
    OFFSET_RIGHT(overrides?: CallOverrides): Promise<BigNumber>;
    TOTAL_VESTING_PERIODS(overrides?: CallOverrides): Promise<BigNumber>;
    currentBucket(overrides?: CallOverrides): Promise<BigNumber>;
    getBucketTracker(overrides?: CallOverrides): Promise<BucketSubmission.BucketTrackerStructOutput>;
    reward(id: BigNumberish, overrides?: CallOverrides): Promise<BucketSubmission.WeeklyRewardStructOutput>;
    callStatic: {
        OFFSET_LEFT(overrides?: CallOverrides): Promise<BigNumber>;
        OFFSET_RIGHT(overrides?: CallOverrides): Promise<BigNumber>;
        TOTAL_VESTING_PERIODS(overrides?: CallOverrides): Promise<BigNumber>;
        currentBucket(overrides?: CallOverrides): Promise<BigNumber>;
        getBucketTracker(overrides?: CallOverrides): Promise<BucketSubmission.BucketTrackerStructOutput>;
        reward(id: BigNumberish, overrides?: CallOverrides): Promise<BucketSubmission.WeeklyRewardStructOutput>;
    };
    filters: {
        "AmountDonatedToBucket(uint256,uint256)"(bucketId?: BigNumberish | null, totalAmountDonated?: null): AmountDonatedToBucketEventFilter;
        AmountDonatedToBucket(bucketId?: BigNumberish | null, totalAmountDonated?: null): AmountDonatedToBucketEventFilter;
    };
    estimateGas: {
        OFFSET_LEFT(overrides?: CallOverrides): Promise<BigNumber>;
        OFFSET_RIGHT(overrides?: CallOverrides): Promise<BigNumber>;
        TOTAL_VESTING_PERIODS(overrides?: CallOverrides): Promise<BigNumber>;
        currentBucket(overrides?: CallOverrides): Promise<BigNumber>;
        getBucketTracker(overrides?: CallOverrides): Promise<BigNumber>;
        reward(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        OFFSET_LEFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        OFFSET_RIGHT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TOTAL_VESTING_PERIODS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentBucket(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBucketTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reward(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
