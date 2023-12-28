import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface IUnifapV2PairInterface extends utils.Interface {
    functions: {
        "burn(address)": FunctionFragment;
        "getReserves()": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "mint(address)": FunctionFragment;
        "swap(uint256,uint256,address,bytes)": FunctionFragment;
        "sync()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "burn" | "getReserves" | "initialize" | "mint" | "swap" | "sync"): FunctionFragment;
    encodeFunctionData(functionFragment: "burn", values: [string]): string;
    encodeFunctionData(functionFragment: "getReserves", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string]): string;
    encodeFunctionData(functionFragment: "mint", values: [string]): string;
    encodeFunctionData(functionFragment: "swap", values: [BigNumberish, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "sync", values?: undefined): string;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sync", data: BytesLike): Result;
    events: {};
}
export interface IUnifapV2Pair extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUnifapV2PairInterface;
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
        burn(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getReserves(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, number]>;
        initialize(arg0: string, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mint(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swap(arg0: BigNumberish, arg1: BigNumberish, arg2: string, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sync(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    burn(arg0: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getReserves(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, number]>;
    initialize(arg0: string, arg1: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mint(arg0: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swap(arg0: BigNumberish, arg1: BigNumberish, arg2: string, arg3: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sync(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        burn(arg0: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getReserves(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, number]>;
        initialize(arg0: string, arg1: string, overrides?: CallOverrides): Promise<void>;
        mint(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        swap(arg0: BigNumberish, arg1: BigNumberish, arg2: string, arg3: BytesLike, overrides?: CallOverrides): Promise<void>;
        sync(overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        burn(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getReserves(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(arg0: string, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mint(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swap(arg0: BigNumberish, arg1: BigNumberish, arg2: string, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sync(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        burn(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(arg0: string, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mint(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swap(arg0: BigNumberish, arg1: BigNumberish, arg2: string, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sync(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
