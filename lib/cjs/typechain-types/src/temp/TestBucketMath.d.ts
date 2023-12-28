import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface TestBucketMathInterface extends utils.Interface {
    functions: {
        "BUCKET_LENGTH()": FunctionFragment;
        "BUCKET_VESTING_SHIFT()": FunctionFragment;
        "VESTING_WEEK_LENGTH()": FunctionFragment;
        "deposit(uint256)": FunctionFragment;
        "getBucketValue(uint256)": FunctionFragment;
        "getCurrentBucket()": FunctionFragment;
        "lastUpdatedWeek()": FunctionFragment;
        "totalDeposit(uint256)": FunctionFragment;
        "totalDeposited()": FunctionFragment;
        "totalToDeduce(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BUCKET_LENGTH" | "BUCKET_VESTING_SHIFT" | "VESTING_WEEK_LENGTH" | "deposit" | "getBucketValue" | "getCurrentBucket" | "lastUpdatedWeek" | "totalDeposit" | "totalDeposited" | "totalToDeduce"): FunctionFragment;
    encodeFunctionData(functionFragment: "BUCKET_LENGTH", values?: undefined): string;
    encodeFunctionData(functionFragment: "BUCKET_VESTING_SHIFT", values?: undefined): string;
    encodeFunctionData(functionFragment: "VESTING_WEEK_LENGTH", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBucketValue", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCurrentBucket", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastUpdatedWeek", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalDeposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalDeposited", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalToDeduce", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "BUCKET_LENGTH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "BUCKET_VESTING_SHIFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VESTING_WEEK_LENGTH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBucketValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentBucket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastUpdatedWeek", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalDeposited", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalToDeduce", data: BytesLike): Result;
    events: {};
}
export interface TestBucketMath extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TestBucketMathInterface;
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
        BUCKET_LENGTH(overrides?: CallOverrides): Promise<[BigNumber]>;
        BUCKET_VESTING_SHIFT(overrides?: CallOverrides): Promise<[BigNumber]>;
        VESTING_WEEK_LENGTH(overrides?: CallOverrides): Promise<[BigNumber]>;
        deposit(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getBucketValue(bucketId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getCurrentBucket(overrides?: CallOverrides): Promise<[BigNumber]>;
        lastUpdatedWeek(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalDeposit(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalDeposited(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalToDeduce(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    BUCKET_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
    BUCKET_VESTING_SHIFT(overrides?: CallOverrides): Promise<BigNumber>;
    VESTING_WEEK_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
    deposit(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getBucketValue(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getCurrentBucket(overrides?: CallOverrides): Promise<BigNumber>;
    lastUpdatedWeek(overrides?: CallOverrides): Promise<BigNumber>;
    totalDeposit(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    totalDeposited(overrides?: CallOverrides): Promise<BigNumber>;
    totalToDeduce(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        BUCKET_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
        BUCKET_VESTING_SHIFT(overrides?: CallOverrides): Promise<BigNumber>;
        VESTING_WEEK_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getBucketValue(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBucket(overrides?: CallOverrides): Promise<BigNumber>;
        lastUpdatedWeek(overrides?: CallOverrides): Promise<BigNumber>;
        totalDeposit(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalDeposited(overrides?: CallOverrides): Promise<BigNumber>;
        totalToDeduce(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        BUCKET_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
        BUCKET_VESTING_SHIFT(overrides?: CallOverrides): Promise<BigNumber>;
        VESTING_WEEK_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getBucketValue(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBucket(overrides?: CallOverrides): Promise<BigNumber>;
        lastUpdatedWeek(overrides?: CallOverrides): Promise<BigNumber>;
        totalDeposit(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalDeposited(overrides?: CallOverrides): Promise<BigNumber>;
        totalToDeduce(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        BUCKET_LENGTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        BUCKET_VESTING_SHIFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VESTING_WEEK_LENGTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getBucketValue(bucketId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentBucket(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastUpdatedWeek(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalDeposit(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalDeposited(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalToDeduce(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
