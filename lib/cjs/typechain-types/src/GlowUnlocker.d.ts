import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface GlowUnlockerInterface extends utils.Interface {
    functions: {
        "amountUnlockable(address)": FunctionFragment;
        "claim(address)": FunctionFragment;
        "genesisTimestamp()": FunctionFragment;
        "glow()": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "lastClaimedTimestamp(address)": FunctionFragment;
        "nextReward(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "amountUnlockable" | "claim" | "genesisTimestamp" | "glow" | "initialize" | "lastClaimedTimestamp" | "nextReward" | "owner" | "renounceOwnership" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "amountUnlockable", values: [string]): string;
    encodeFunctionData(functionFragment: "claim", values: [string]): string;
    encodeFunctionData(functionFragment: "genesisTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "glow", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "lastClaimedTimestamp", values: [string]): string;
    encodeFunctionData(functionFragment: "nextReward", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "amountUnlockable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "genesisTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "glow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastClaimedTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface GlowUnlocker extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GlowUnlockerInterface;
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
        amountUnlockable(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        claim(to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        genesisTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        glow(overrides?: CallOverrides): Promise<[string]>;
        initialize(_glow: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lastClaimedTimestamp(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        nextReward(from: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    amountUnlockable(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    claim(to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    genesisTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    glow(overrides?: CallOverrides): Promise<string>;
    initialize(_glow: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lastClaimedTimestamp(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    nextReward(from: string, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        amountUnlockable(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        claim(to: string, overrides?: CallOverrides): Promise<void>;
        genesisTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        glow(overrides?: CallOverrides): Promise<string>;
        initialize(_glow: string, overrides?: CallOverrides): Promise<void>;
        lastClaimedTimestamp(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        nextReward(from: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        amountUnlockable(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        claim(to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        genesisTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        glow(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_glow: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lastClaimedTimestamp(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        nextReward(from: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        amountUnlockable(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claim(to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        genesisTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        glow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_glow: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lastClaimedTimestamp(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextReward(from: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
