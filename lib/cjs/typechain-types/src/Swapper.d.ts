import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface SwapperInterface extends utils.Interface {
    functions: {
        "GCC()": FunctionFragment;
        "UNISWAP_ROUTER()": FunctionFragment;
        "UNISWAP_V2_FACTORY()": FunctionFragment;
        "UNISWAP_V2_PAIR()": FunctionFragment;
        "USDC()": FunctionFragment;
        "findOptimalAmountToRetire(uint256,uint256)": FunctionFragment;
        "retireGCC(uint256)": FunctionFragment;
        "retireUSDC(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "GCC" | "UNISWAP_ROUTER" | "UNISWAP_V2_FACTORY" | "UNISWAP_V2_PAIR" | "USDC" | "findOptimalAmountToRetire" | "retireGCC" | "retireUSDC"): FunctionFragment;
    encodeFunctionData(functionFragment: "GCC", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNISWAP_ROUTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNISWAP_V2_FACTORY", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNISWAP_V2_PAIR", values?: undefined): string;
    encodeFunctionData(functionFragment: "USDC", values?: undefined): string;
    encodeFunctionData(functionFragment: "findOptimalAmountToRetire", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "retireGCC", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "retireUSDC", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "GCC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNISWAP_ROUTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNISWAP_V2_FACTORY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNISWAP_V2_PAIR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "USDC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "findOptimalAmountToRetire", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retireGCC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retireUSDC", data: BytesLike): Result;
    events: {};
}
export interface Swapper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SwapperInterface;
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
        findOptimalAmountToRetire(amountToRetire: BigNumberish, totalReservesOfToken: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        retireGCC(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        retireUSDC(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    GCC(overrides?: CallOverrides): Promise<string>;
    UNISWAP_ROUTER(overrides?: CallOverrides): Promise<string>;
    UNISWAP_V2_FACTORY(overrides?: CallOverrides): Promise<string>;
    UNISWAP_V2_PAIR(overrides?: CallOverrides): Promise<string>;
    USDC(overrides?: CallOverrides): Promise<string>;
    findOptimalAmountToRetire(amountToRetire: BigNumberish, totalReservesOfToken: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    retireGCC(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    retireUSDC(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        GCC(overrides?: CallOverrides): Promise<string>;
        UNISWAP_ROUTER(overrides?: CallOverrides): Promise<string>;
        UNISWAP_V2_FACTORY(overrides?: CallOverrides): Promise<string>;
        UNISWAP_V2_PAIR(overrides?: CallOverrides): Promise<string>;
        USDC(overrides?: CallOverrides): Promise<string>;
        findOptimalAmountToRetire(amountToRetire: BigNumberish, totalReservesOfToken: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        retireGCC(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        retireUSDC(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        GCC(overrides?: CallOverrides): Promise<BigNumber>;
        UNISWAP_ROUTER(overrides?: CallOverrides): Promise<BigNumber>;
        UNISWAP_V2_FACTORY(overrides?: CallOverrides): Promise<BigNumber>;
        UNISWAP_V2_PAIR(overrides?: CallOverrides): Promise<BigNumber>;
        USDC(overrides?: CallOverrides): Promise<BigNumber>;
        findOptimalAmountToRetire(amountToRetire: BigNumberish, totalReservesOfToken: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        retireGCC(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        retireUSDC(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        GCC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNISWAP_ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNISWAP_V2_FACTORY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNISWAP_V2_PAIR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        USDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        findOptimalAmountToRetire(amountToRetire: BigNumberish, totalReservesOfToken: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        retireGCC(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        retireUSDC(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
