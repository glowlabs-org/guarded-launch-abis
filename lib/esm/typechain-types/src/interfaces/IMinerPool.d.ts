import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface IMinerPoolInterface extends utils.Interface {
    functions: {
        "claimRewardFromBucket(uint256,uint256,uint256,bytes32[],uint256,address,bool,bytes)": FunctionFragment;
        "createClaimRewardFromBucketDigest(uint256,uint256,uint256,uint256,bool)": FunctionFragment;
        "delayBucketFinalization(uint256)": FunctionFragment;
        "donateToUSDCMinerRewardsPool(uint256)": FunctionFragment;
        "donateToUSDCMinerRewardsPoolEarlyLiquidity(uint256)": FunctionFragment;
        "hasBucketBeenDelayed(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claimRewardFromBucket" | "createClaimRewardFromBucketDigest" | "delayBucketFinalization" | "donateToUSDCMinerRewardsPool" | "donateToUSDCMinerRewardsPoolEarlyLiquidity" | "hasBucketBeenDelayed"): FunctionFragment;
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
    encodeFunctionData(functionFragment: "delayBucketFinalization", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "donateToUSDCMinerRewardsPool", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "donateToUSDCMinerRewardsPoolEarlyLiquidity", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "hasBucketBeenDelayed", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "claimRewardFromBucket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createClaimRewardFromBucketDigest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delayBucketFinalization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "donateToUSDCMinerRewardsPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "donateToUSDCMinerRewardsPoolEarlyLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasBucketBeenDelayed", data: BytesLike): Result;
    events: {};
}
export interface IMinerPool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IMinerPoolInterface;
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
        claimRewardFromBucket(bucketId: BigNumberish, glwWeight: BigNumberish, USDCWeight: BigNumberish, proof: BytesLike[], index: BigNumberish, user: string, claimFromInflation: boolean, signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createClaimRewardFromBucketDigest(bucketId: BigNumberish, glwWeight: BigNumberish, USDCWeight: BigNumberish, index: BigNumberish, claimFromInflation: boolean, overrides?: CallOverrides): Promise<[string]>;
        delayBucketFinalization(bucketId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        donateToUSDCMinerRewardsPool(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        donateToUSDCMinerRewardsPoolEarlyLiquidity(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasBucketBeenDelayed(bucketId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
    };
    claimRewardFromBucket(bucketId: BigNumberish, glwWeight: BigNumberish, USDCWeight: BigNumberish, proof: BytesLike[], index: BigNumberish, user: string, claimFromInflation: boolean, signature: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createClaimRewardFromBucketDigest(bucketId: BigNumberish, glwWeight: BigNumberish, USDCWeight: BigNumberish, index: BigNumberish, claimFromInflation: boolean, overrides?: CallOverrides): Promise<string>;
    delayBucketFinalization(bucketId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    donateToUSDCMinerRewardsPool(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    donateToUSDCMinerRewardsPoolEarlyLiquidity(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasBucketBeenDelayed(bucketId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        claimRewardFromBucket(bucketId: BigNumberish, glwWeight: BigNumberish, USDCWeight: BigNumberish, proof: BytesLike[], index: BigNumberish, user: string, claimFromInflation: boolean, signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        createClaimRewardFromBucketDigest(bucketId: BigNumberish, glwWeight: BigNumberish, USDCWeight: BigNumberish, index: BigNumberish, claimFromInflation: boolean, overrides?: CallOverrides): Promise<string>;
        delayBucketFinalization(bucketId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        donateToUSDCMinerRewardsPool(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        donateToUSDCMinerRewardsPoolEarlyLiquidity(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        hasBucketBeenDelayed(bucketId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        claimRewardFromBucket(bucketId: BigNumberish, glwWeight: BigNumberish, USDCWeight: BigNumberish, proof: BytesLike[], index: BigNumberish, user: string, claimFromInflation: boolean, signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createClaimRewardFromBucketDigest(bucketId: BigNumberish, glwWeight: BigNumberish, USDCWeight: BigNumberish, index: BigNumberish, claimFromInflation: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        delayBucketFinalization(bucketId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        donateToUSDCMinerRewardsPool(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        donateToUSDCMinerRewardsPoolEarlyLiquidity(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasBucketBeenDelayed(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        claimRewardFromBucket(bucketId: BigNumberish, glwWeight: BigNumberish, USDCWeight: BigNumberish, proof: BytesLike[], index: BigNumberish, user: string, claimFromInflation: boolean, signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createClaimRewardFromBucketDigest(bucketId: BigNumberish, glwWeight: BigNumberish, USDCWeight: BigNumberish, index: BigNumberish, claimFromInflation: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delayBucketFinalization(bucketId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        donateToUSDCMinerRewardsPool(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        donateToUSDCMinerRewardsPoolEarlyLiquidity(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasBucketBeenDelayed(bucketId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
