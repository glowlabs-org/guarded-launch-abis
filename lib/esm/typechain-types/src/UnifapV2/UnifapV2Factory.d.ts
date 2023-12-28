import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface UnifapV2FactoryInterface extends utils.Interface {
    functions: {
        "allPairs(uint256)": FunctionFragment;
        "createPair(address,address)": FunctionFragment;
        "getAllPairLength()": FunctionFragment;
        "getAllPairsIndex(uint256)": FunctionFragment;
        "pairs(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allPairs" | "createPair" | "getAllPairLength" | "getAllPairsIndex" | "pairs"): FunctionFragment;
    encodeFunctionData(functionFragment: "allPairs", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "createPair", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getAllPairLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllPairsIndex", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pairs", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "allPairs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllPairLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllPairsIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairs", data: BytesLike): Result;
    events: {
        "PairCreated(address,address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PairCreated"): EventFragment;
}
export interface PairCreatedEventObject {
    token0: string;
    token1: string;
    pair: string;
    arg3: BigNumber;
}
export type PairCreatedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], PairCreatedEventObject>;
export type PairCreatedEventFilter = TypedEventFilter<PairCreatedEvent>;
export interface UnifapV2Factory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UnifapV2FactoryInterface;
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
        allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        createPair(tokenA: string, tokenB: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAllPairLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        getAllPairsIndex(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        pairs(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[string]>;
    };
    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    createPair(tokenA: string, tokenB: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAllPairLength(overrides?: CallOverrides): Promise<BigNumber>;
    getAllPairsIndex(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    pairs(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        createPair(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<string>;
        getAllPairLength(overrides?: CallOverrides): Promise<BigNumber>;
        getAllPairsIndex(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        pairs(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "PairCreated(address,address,address,uint256)"(token0?: string | null, token1?: string | null, pair?: null, arg3?: null): PairCreatedEventFilter;
        PairCreated(token0?: string | null, token1?: string | null, pair?: null, arg3?: null): PairCreatedEventFilter;
    };
    estimateGas: {
        allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        createPair(tokenA: string, tokenB: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAllPairLength(overrides?: CallOverrides): Promise<BigNumber>;
        getAllPairsIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        pairs(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createPair(tokenA: string, tokenB: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAllPairLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllPairsIndex(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairs(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
