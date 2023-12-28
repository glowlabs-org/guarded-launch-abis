import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface IUnifapV2FactoryInterface extends utils.Interface {
    functions: {
        "createPair(address,address)": FunctionFragment;
        "pairs(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createPair" | "pairs"): FunctionFragment;
    encodeFunctionData(functionFragment: "createPair", values: [string, string]): string;
    encodeFunctionData(functionFragment: "pairs", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "createPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairs", data: BytesLike): Result;
    events: {};
}
export interface IUnifapV2Factory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUnifapV2FactoryInterface;
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
        createPair(arg0: string, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pairs(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<[string]>;
    };
    createPair(arg0: string, arg1: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pairs(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        createPair(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>;
        pairs(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        createPair(arg0: string, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pairs(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        createPair(arg0: string, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pairs(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
