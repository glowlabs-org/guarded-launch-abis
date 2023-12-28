import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export type ClaimHoldingArgsStruct = {
    user: string;
    token: string;
};
export type ClaimHoldingArgsStructOutput = [string, string] & {
    user: string;
    token: string;
};
export type HoldingStruct = {
    amount: BigNumberish;
    expirationTimestamp: BigNumberish;
};
export type HoldingStructOutput = [BigNumber, BigNumber] & {
    amount: BigNumber;
    expirationTimestamp: BigNumber;
};
export interface ISafetyDelayInterface extends utils.Interface {
    functions: {
        "addHolding(address,address,uint192)": FunctionFragment;
        "claimHoldings((address,address)[])": FunctionFragment;
        "holdings(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addHolding" | "claimHoldings" | "holdings"): FunctionFragment;
    encodeFunctionData(functionFragment: "addHolding", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimHoldings", values: [ClaimHoldingArgsStruct[]]): string;
    encodeFunctionData(functionFragment: "holdings", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "addHolding", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimHoldings", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "holdings", data: BytesLike): Result;
    events: {};
}
export interface ISafetyDelay extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISafetyDelayInterface;
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
        addHolding(user: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimHoldings(args: ClaimHoldingArgsStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        holdings(user: string, token: string, overrides?: CallOverrides): Promise<[HoldingStructOutput]>;
    };
    addHolding(user: string, token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimHoldings(args: ClaimHoldingArgsStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    holdings(user: string, token: string, overrides?: CallOverrides): Promise<HoldingStructOutput>;
    callStatic: {
        addHolding(user: string, token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        claimHoldings(args: ClaimHoldingArgsStruct[], overrides?: CallOverrides): Promise<void>;
        holdings(user: string, token: string, overrides?: CallOverrides): Promise<HoldingStructOutput>;
    };
    filters: {};
    estimateGas: {
        addHolding(user: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimHoldings(args: ClaimHoldingArgsStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        holdings(user: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addHolding(user: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimHoldings(args: ClaimHoldingArgsStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        holdings(user: string, token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
