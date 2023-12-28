import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface GrantsTreasuryInterface extends utils.Interface {
    functions: {
        "GENESIS_TIMESTAMP()": FunctionFragment;
        "GLOW_TOKEN()": FunctionFragment;
        "GOVERNANCE()": FunctionFragment;
        "allocateGrantFunds(address,uint256)": FunctionFragment;
        "claimGlowFromTreasury()": FunctionFragment;
        "claimGrantReward()": FunctionFragment;
        "cumulativeAllocated()": FunctionFragment;
        "cumulativePaidOut()": FunctionFragment;
        "recipientBalance(address)": FunctionFragment;
        "totalBalanceInGrantsTreasury()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "GENESIS_TIMESTAMP" | "GLOW_TOKEN" | "GOVERNANCE" | "allocateGrantFunds" | "claimGlowFromTreasury" | "claimGrantReward" | "cumulativeAllocated" | "cumulativePaidOut" | "recipientBalance" | "totalBalanceInGrantsTreasury"): FunctionFragment;
    encodeFunctionData(functionFragment: "GENESIS_TIMESTAMP", values?: undefined): string;
    encodeFunctionData(functionFragment: "GLOW_TOKEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "GOVERNANCE", values?: undefined): string;
    encodeFunctionData(functionFragment: "allocateGrantFunds", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimGlowFromTreasury", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimGrantReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "cumulativeAllocated", values?: undefined): string;
    encodeFunctionData(functionFragment: "cumulativePaidOut", values?: undefined): string;
    encodeFunctionData(functionFragment: "recipientBalance", values: [string]): string;
    encodeFunctionData(functionFragment: "totalBalanceInGrantsTreasury", values?: undefined): string;
    decodeFunctionResult(functionFragment: "GENESIS_TIMESTAMP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GLOW_TOKEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GOVERNANCE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allocateGrantFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimGlowFromTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimGrantReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cumulativeAllocated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cumulativePaidOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recipientBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBalanceInGrantsTreasury", data: BytesLike): Result;
    events: {
        "GrantFundsAllocated(address,uint256)": EventFragment;
        "GrantFundsAllocationFailed(address,uint256)": EventFragment;
        "GrantFundsClaimed(address,uint256)": EventFragment;
        "TreasurySynced(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "GrantFundsAllocated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GrantFundsAllocationFailed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GrantFundsClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TreasurySynced"): EventFragment;
}
export interface GrantFundsAllocatedEventObject {
    recipient: string;
    amount: BigNumber;
}
export type GrantFundsAllocatedEvent = TypedEvent<[
    string,
    BigNumber
], GrantFundsAllocatedEventObject>;
export type GrantFundsAllocatedEventFilter = TypedEventFilter<GrantFundsAllocatedEvent>;
export interface GrantFundsAllocationFailedEventObject {
    recipient: string;
    amount: BigNumber;
}
export type GrantFundsAllocationFailedEvent = TypedEvent<[
    string,
    BigNumber
], GrantFundsAllocationFailedEventObject>;
export type GrantFundsAllocationFailedEventFilter = TypedEventFilter<GrantFundsAllocationFailedEvent>;
export interface GrantFundsClaimedEventObject {
    to: string;
    amount: BigNumber;
}
export type GrantFundsClaimedEvent = TypedEvent<[
    string,
    BigNumber
], GrantFundsClaimedEventObject>;
export type GrantFundsClaimedEventFilter = TypedEventFilter<GrantFundsClaimedEvent>;
export interface TreasurySyncedEventObject {
    amount: BigNumber;
}
export type TreasurySyncedEvent = TypedEvent<[
    BigNumber
], TreasurySyncedEventObject>;
export type TreasurySyncedEventFilter = TypedEventFilter<TreasurySyncedEvent>;
export interface GrantsTreasury extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GrantsTreasuryInterface;
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
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<[BigNumber]>;
        GLOW_TOKEN(overrides?: CallOverrides): Promise<[string]>;
        GOVERNANCE(overrides?: CallOverrides): Promise<[string]>;
        allocateGrantFunds(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimGlowFromTreasury(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimGrantReward(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cumulativeAllocated(overrides?: CallOverrides): Promise<[BigNumber]>;
        cumulativePaidOut(overrides?: CallOverrides): Promise<[BigNumber]>;
        recipientBalance(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalBalanceInGrantsTreasury(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
    GLOW_TOKEN(overrides?: CallOverrides): Promise<string>;
    GOVERNANCE(overrides?: CallOverrides): Promise<string>;
    allocateGrantFunds(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimGlowFromTreasury(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimGrantReward(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cumulativeAllocated(overrides?: CallOverrides): Promise<BigNumber>;
    cumulativePaidOut(overrides?: CallOverrides): Promise<BigNumber>;
    recipientBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    totalBalanceInGrantsTreasury(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
        GLOW_TOKEN(overrides?: CallOverrides): Promise<string>;
        GOVERNANCE(overrides?: CallOverrides): Promise<string>;
        allocateGrantFunds(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        claimGlowFromTreasury(overrides?: CallOverrides): Promise<void>;
        claimGrantReward(overrides?: CallOverrides): Promise<void>;
        cumulativeAllocated(overrides?: CallOverrides): Promise<BigNumber>;
        cumulativePaidOut(overrides?: CallOverrides): Promise<BigNumber>;
        recipientBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        totalBalanceInGrantsTreasury(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "GrantFundsAllocated(address,uint256)"(recipient?: string | null, amount?: null): GrantFundsAllocatedEventFilter;
        GrantFundsAllocated(recipient?: string | null, amount?: null): GrantFundsAllocatedEventFilter;
        "GrantFundsAllocationFailed(address,uint256)"(recipient?: string | null, amount?: null): GrantFundsAllocationFailedEventFilter;
        GrantFundsAllocationFailed(recipient?: string | null, amount?: null): GrantFundsAllocationFailedEventFilter;
        "GrantFundsClaimed(address,uint256)"(to?: string | null, amount?: null): GrantFundsClaimedEventFilter;
        GrantFundsClaimed(to?: string | null, amount?: null): GrantFundsClaimedEventFilter;
        "TreasurySynced(uint256)"(amount?: null): TreasurySyncedEventFilter;
        TreasurySynced(amount?: null): TreasurySyncedEventFilter;
    };
    estimateGas: {
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
        GLOW_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;
        GOVERNANCE(overrides?: CallOverrides): Promise<BigNumber>;
        allocateGrantFunds(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimGlowFromTreasury(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimGrantReward(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cumulativeAllocated(overrides?: CallOverrides): Promise<BigNumber>;
        cumulativePaidOut(overrides?: CallOverrides): Promise<BigNumber>;
        recipientBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        totalBalanceInGrantsTreasury(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GLOW_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GOVERNANCE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allocateGrantFunds(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimGlowFromTreasury(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimGrantReward(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cumulativeAllocated(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cumulativePaidOut(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recipientBalance(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBalanceInGrantsTreasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
