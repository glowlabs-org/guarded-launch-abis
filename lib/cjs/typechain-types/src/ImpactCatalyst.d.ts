import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface ImpactCatalystInterface extends utils.Interface {
    functions: {
        "GCC()": FunctionFragment;
        "UNISWAP_ROUTER()": FunctionFragment;
        "UNISWAP_V2_FACTORY()": FunctionFragment;
        "UNISWAP_V2_PAIR()": FunctionFragment;
        "USDC()": FunctionFragment;
        "commitGCC(uint256,uint256)": FunctionFragment;
        "commitUSDC(uint256,uint256)": FunctionFragment;
        "estimateGCCCommitImpactPower(uint256)": FunctionFragment;
        "estimateUSDCCommitImpactPower(uint256)": FunctionFragment;
        "findOptimalAmountToSwap(uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "GCC" | "UNISWAP_ROUTER" | "UNISWAP_V2_FACTORY" | "UNISWAP_V2_PAIR" | "USDC" | "commitGCC" | "commitUSDC" | "estimateGCCCommitImpactPower" | "estimateUSDCCommitImpactPower" | "findOptimalAmountToSwap"): FunctionFragment;
    encodeFunctionData(functionFragment: "GCC", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNISWAP_ROUTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNISWAP_V2_FACTORY", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNISWAP_V2_PAIR", values?: undefined): string;
    encodeFunctionData(functionFragment: "USDC", values?: undefined): string;
    encodeFunctionData(functionFragment: "commitGCC", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "commitUSDC", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "estimateGCCCommitImpactPower", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "estimateUSDCCommitImpactPower", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "findOptimalAmountToSwap", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "GCC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNISWAP_ROUTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNISWAP_V2_FACTORY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNISWAP_V2_PAIR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "USDC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitGCC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitUSDC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateGCCCommitImpactPower", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateUSDCCommitImpactPower", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "findOptimalAmountToSwap", data: BytesLike): Result;
    events: {};
}
export interface ImpactCatalyst extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ImpactCatalystInterface;
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
        GCC(overrides?: CallOverrides): Promise<[string]>;
        UNISWAP_ROUTER(overrides?: CallOverrides): Promise<[string]>;
        UNISWAP_V2_FACTORY(overrides?: CallOverrides): Promise<[string]>;
        UNISWAP_V2_PAIR(overrides?: CallOverrides): Promise<[string]>;
        USDC(overrides?: CallOverrides): Promise<[string]>;
        commitGCC(amount: BigNumberish, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        commitUSDC(amount: BigNumberish, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        estimateGCCCommitImpactPower(amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            expectedImpactPower: BigNumber;
        }>;
        estimateUSDCCommitImpactPower(amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            expectedImpactPower: BigNumber;
        }>;
        findOptimalAmountToSwap(amountTocommit: BigNumberish, totalReservesOfToken: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    GCC(overrides?: CallOverrides): Promise<string>;
    UNISWAP_ROUTER(overrides?: CallOverrides): Promise<string>;
    UNISWAP_V2_FACTORY(overrides?: CallOverrides): Promise<string>;
    UNISWAP_V2_PAIR(overrides?: CallOverrides): Promise<string>;
    USDC(overrides?: CallOverrides): Promise<string>;
    commitGCC(amount: BigNumberish, minImpactPower: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    commitUSDC(amount: BigNumberish, minImpactPower: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    estimateGCCCommitImpactPower(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    estimateUSDCCommitImpactPower(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    findOptimalAmountToSwap(amountTocommit: BigNumberish, totalReservesOfToken: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        GCC(overrides?: CallOverrides): Promise<string>;
        UNISWAP_ROUTER(overrides?: CallOverrides): Promise<string>;
        UNISWAP_V2_FACTORY(overrides?: CallOverrides): Promise<string>;
        UNISWAP_V2_PAIR(overrides?: CallOverrides): Promise<string>;
        USDC(overrides?: CallOverrides): Promise<string>;
        commitGCC(amount: BigNumberish, minImpactPower: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            usdcEffect: BigNumber;
            nominations: BigNumber;
        }>;
        commitUSDC(amount: BigNumberish, minImpactPower: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        estimateGCCCommitImpactPower(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        estimateUSDCCommitImpactPower(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        findOptimalAmountToSwap(amountTocommit: BigNumberish, totalReservesOfToken: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        GCC(overrides?: CallOverrides): Promise<BigNumber>;
        UNISWAP_ROUTER(overrides?: CallOverrides): Promise<BigNumber>;
        UNISWAP_V2_FACTORY(overrides?: CallOverrides): Promise<BigNumber>;
        UNISWAP_V2_PAIR(overrides?: CallOverrides): Promise<BigNumber>;
        USDC(overrides?: CallOverrides): Promise<BigNumber>;
        commitGCC(amount: BigNumberish, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        commitUSDC(amount: BigNumberish, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        estimateGCCCommitImpactPower(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        estimateUSDCCommitImpactPower(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        findOptimalAmountToSwap(amountTocommit: BigNumberish, totalReservesOfToken: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        GCC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNISWAP_ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNISWAP_V2_FACTORY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNISWAP_V2_PAIR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        USDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        commitGCC(amount: BigNumberish, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        commitUSDC(amount: BigNumberish, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        estimateGCCCommitImpactPower(amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateUSDCCommitImpactPower(amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        findOptimalAmountToSwap(amountTocommit: BigNumberish, totalReservesOfToken: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
