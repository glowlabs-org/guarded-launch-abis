import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export declare namespace HoldingContract {
    type HoldingStruct = {
        amount: BigNumberish;
        timestamp: BigNumberish;
    };
    type HoldingStructOutput = [BigNumber, BigNumber] & {
        amount: BigNumber;
        timestamp: BigNumber;
    };
}
export interface HoldingContractInterface extends utils.Interface {
    functions: {
        "MINER_POOL()": FunctionFragment;
        "VETO_COUNCIL()": FunctionFragment;
        "addHolding(address,address,uint192)": FunctionFragment;
        "holdings(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "MINER_POOL" | "VETO_COUNCIL" | "addHolding" | "holdings"): FunctionFragment;
    encodeFunctionData(functionFragment: "MINER_POOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "VETO_COUNCIL", values?: undefined): string;
    encodeFunctionData(functionFragment: "addHolding", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "holdings", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "MINER_POOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VETO_COUNCIL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addHolding", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "holdings", data: BytesLike): Result;
    events: {};
}
export interface HoldingContract extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: HoldingContractInterface;
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
        MINER_POOL(overrides?: CallOverrides): Promise<[string]>;
        VETO_COUNCIL(overrides?: CallOverrides): Promise<[string]>;
        addHolding(user: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        holdings(user: string, token: string, overrides?: CallOverrides): Promise<[HoldingContract.HoldingStructOutput[]]>;
    };
    MINER_POOL(overrides?: CallOverrides): Promise<string>;
    VETO_COUNCIL(overrides?: CallOverrides): Promise<string>;
    addHolding(user: string, token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    holdings(user: string, token: string, overrides?: CallOverrides): Promise<HoldingContract.HoldingStructOutput[]>;
    callStatic: {
        MINER_POOL(overrides?: CallOverrides): Promise<string>;
        VETO_COUNCIL(overrides?: CallOverrides): Promise<string>;
        addHolding(user: string, token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        holdings(user: string, token: string, overrides?: CallOverrides): Promise<HoldingContract.HoldingStructOutput[]>;
    };
    filters: {};
    estimateGas: {
        MINER_POOL(overrides?: CallOverrides): Promise<BigNumber>;
        VETO_COUNCIL(overrides?: CallOverrides): Promise<BigNumber>;
        addHolding(user: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        holdings(user: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        MINER_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VETO_COUNCIL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addHolding(user: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        holdings(user: string, token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
