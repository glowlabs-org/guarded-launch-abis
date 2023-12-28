import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
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
export interface MD2Interface extends utils.Interface {
    functions: {
        "OFFSET_LEFT()": FunctionFragment;
        "OFFSET_RIGHT()": FunctionFragment;
        "TOTAL_VESTING_PERIODS()": FunctionFragment;
        "addToCurrentBucket(uint256)": FunctionFragment;
        "currentBucket()": FunctionFragment;
        "genesisTimestampInternal()": FunctionFragment;
        "getAmountForTokenAndInitIfNot(uint256)": FunctionFragment;
        "getBucketTracker()": FunctionFragment;
        "rawRewardInStorage(uint256)": FunctionFragment;
        "reward(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "OFFSET_LEFT" | "OFFSET_RIGHT" | "TOTAL_VESTING_PERIODS" | "addToCurrentBucket" | "currentBucket" | "genesisTimestampInternal" | "getAmountForTokenAndInitIfNot" | "getBucketTracker" | "rawRewardInStorage" | "reward"): FunctionFragment;
    encodeFunctionData(functionFragment: "OFFSET_LEFT", values?: undefined): string;
    encodeFunctionData(functionFragment: "OFFSET_RIGHT", values?: undefined): string;
    encodeFunctionData(functionFragment: "TOTAL_VESTING_PERIODS", values?: undefined): string;
    encodeFunctionData(functionFragment: "addToCurrentBucket", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "currentBucket", values?: undefined): string;
    encodeFunctionData(functionFragment: "genesisTimestampInternal", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAmountForTokenAndInitIfNot", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBucketTracker", values?: undefined): string;
    encodeFunctionData(functionFragment: "rawRewardInStorage", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "reward", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "OFFSET_LEFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "OFFSET_RIGHT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TOTAL_VESTING_PERIODS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addToCurrentBucket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentBucket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "genesisTimestampInternal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountForTokenAndInitIfNot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBucketTracker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rawRewardInStorage", data: BytesLike): Result;
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
export interface MD2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MD2Interface;
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
        addToCurrentBucket(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        currentBucket(overrides?: CallOverrides): Promise<[BigNumber]>;
        genesisTimestampInternal(overrides?: CallOverrides): Promise<[BigNumber]>;
        getAmountForTokenAndInitIfNot(bucketId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getBucketTracker(overrides?: CallOverrides): Promise<[BucketSubmission.BucketTrackerStructOutput]>;
        rawRewardInStorage(bucketId: BigNumberish, overrides?: CallOverrides): Promise<[boolean, BigNumber, BigNumber]>;
        reward(id: BigNumberish, overrides?: CallOverrides): Promise<[BucketSubmission.WeeklyRewardStructOutput]>;
    };
    OFFSET_LEFT(overrides?: CallOverrides): Promise<BigNumber>;
    OFFSET_RIGHT(overrides?: CallOverrides): Promise<BigNumber>;
    TOTAL_VESTING_PERIODS(overrides?: CallOverrides): Promise<BigNumber>;
    addToCurrentBucket(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    currentBucket(overrides?: CallOverrides): Promise<BigNumber>;
    genesisTimestampInternal(overrides?: CallOverrides): Promise<BigNumber>;
    getAmountForTokenAndInitIfNot(bucketId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getBucketTracker(overrides?: CallOverrides): Promise<BucketSubmission.BucketTrackerStructOutput>;
    rawRewardInStorage(bucketId: BigNumberish, overrides?: CallOverrides): Promise<[boolean, BigNumber, BigNumber]>;
    reward(id: BigNumberish, overrides?: CallOverrides): Promise<BucketSubmission.WeeklyRewardStructOutput>;
    callStatic: {
        OFFSET_LEFT(overrides?: CallOverrides): Promise<BigNumber>;
        OFFSET_RIGHT(overrides?: CallOverrides): Promise<BigNumber>;
        TOTAL_VESTING_PERIODS(overrides?: CallOverrides): Promise<BigNumber>;
        addToCurrentBucket(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        currentBucket(overrides?: CallOverrides): Promise<BigNumber>;
        genesisTimestampInternal(overrides?: CallOverrides): Promise<BigNumber>;
        getAmountForTokenAndInitIfNot(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getBucketTracker(overrides?: CallOverrides): Promise<BucketSubmission.BucketTrackerStructOutput>;
        rawRewardInStorage(bucketId: BigNumberish, overrides?: CallOverrides): Promise<[boolean, BigNumber, BigNumber]>;
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
        addToCurrentBucket(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        currentBucket(overrides?: CallOverrides): Promise<BigNumber>;
        genesisTimestampInternal(overrides?: CallOverrides): Promise<BigNumber>;
        getAmountForTokenAndInitIfNot(bucketId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getBucketTracker(overrides?: CallOverrides): Promise<BigNumber>;
        rawRewardInStorage(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        reward(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        OFFSET_LEFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        OFFSET_RIGHT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TOTAL_VESTING_PERIODS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addToCurrentBucket(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        currentBucket(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        genesisTimestampInternal(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountForTokenAndInitIfNot(bucketId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getBucketTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rawRewardInStorage(bucketId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reward(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
