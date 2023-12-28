import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface BatchRetireInterface extends utils.Interface {
    functions: {
        "GCC()": FunctionFragment;
        "USDC()": FunctionFragment;
        "retireGCC(uint256,bytes)": FunctionFragment;
        "retireUSDC(uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "GCC" | "USDC" | "retireGCC" | "retireUSDC"): FunctionFragment;
    encodeFunctionData(functionFragment: "GCC", values?: undefined): string;
    encodeFunctionData(functionFragment: "USDC", values?: undefined): string;
    encodeFunctionData(functionFragment: "retireGCC", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "retireUSDC", values: [BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "GCC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "USDC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retireGCC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retireUSDC", data: BytesLike): Result;
    events: {
        "GCCEmission(bytes)": EventFragment;
        "USDCEmission(bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "GCCEmission"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "USDCEmission"): EventFragment;
}
export interface GCCEmissionEventObject {
    data: string;
}
export type GCCEmissionEvent = TypedEvent<[string], GCCEmissionEventObject>;
export type GCCEmissionEventFilter = TypedEventFilter<GCCEmissionEvent>;
export interface USDCEmissionEventObject {
    data: string;
}
export type USDCEmissionEvent = TypedEvent<[string], USDCEmissionEventObject>;
export type USDCEmissionEventFilter = TypedEventFilter<USDCEmissionEvent>;
export interface BatchRetire extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BatchRetireInterface;
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
        USDC(overrides?: CallOverrides): Promise<[string]>;
        retireGCC(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        retireUSDC(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    GCC(overrides?: CallOverrides): Promise<string>;
    USDC(overrides?: CallOverrides): Promise<string>;
    retireGCC(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    retireUSDC(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        GCC(overrides?: CallOverrides): Promise<string>;
        USDC(overrides?: CallOverrides): Promise<string>;
        retireGCC(amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        retireUSDC(amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "GCCEmission(bytes)"(data?: null): GCCEmissionEventFilter;
        GCCEmission(data?: null): GCCEmissionEventFilter;
        "USDCEmission(bytes)"(data?: null): USDCEmissionEventFilter;
        USDCEmission(data?: null): USDCEmissionEventFilter;
    };
    estimateGas: {
        GCC(overrides?: CallOverrides): Promise<BigNumber>;
        USDC(overrides?: CallOverrides): Promise<BigNumber>;
        retireGCC(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        retireUSDC(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        GCC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        USDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        retireGCC(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        retireUSDC(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
