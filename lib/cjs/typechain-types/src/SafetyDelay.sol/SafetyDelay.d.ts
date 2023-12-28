import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
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
export interface SafetyDelayInterface extends utils.Interface {
    functions: {
        "DEFAULT_DELAY()": FunctionFragment;
        "FIVE_WEEKS()": FunctionFragment;
        "MINER_POOL()": FunctionFragment;
        "NINETY_DAYS()": FunctionFragment;
        "VETO_COUNCIL()": FunctionFragment;
        "VETO_HOLDING_DELAY()": FunctionFragment;
        "addHolding(address,address,uint192)": FunctionFragment;
        "claimHoldingSingleton(address,address)": FunctionFragment;
        "claimHoldings((address,address)[])": FunctionFragment;
        "delayNetwork()": FunctionFragment;
        "holdings(address,address)": FunctionFragment;
        "isNetworkFrozen()": FunctionFragment;
        "minimumWithdrawTimestamp()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_DELAY" | "FIVE_WEEKS" | "MINER_POOL" | "NINETY_DAYS" | "VETO_COUNCIL" | "VETO_HOLDING_DELAY" | "addHolding" | "claimHoldingSingleton" | "claimHoldings" | "delayNetwork" | "holdings" | "isNetworkFrozen" | "minimumWithdrawTimestamp"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "FIVE_WEEKS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MINER_POOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "NINETY_DAYS", values?: undefined): string;
    encodeFunctionData(functionFragment: "VETO_COUNCIL", values?: undefined): string;
    encodeFunctionData(functionFragment: "VETO_HOLDING_DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "addHolding", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimHoldingSingleton", values: [string, string]): string;
    encodeFunctionData(functionFragment: "claimHoldings", values: [ClaimHoldingArgsStruct[]]): string;
    encodeFunctionData(functionFragment: "delayNetwork", values?: undefined): string;
    encodeFunctionData(functionFragment: "holdings", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isNetworkFrozen", values?: undefined): string;
    encodeFunctionData(functionFragment: "minimumWithdrawTimestamp", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FIVE_WEEKS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MINER_POOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NINETY_DAYS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VETO_COUNCIL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VETO_HOLDING_DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addHolding", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimHoldingSingleton", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimHoldings", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delayNetwork", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "holdings", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isNetworkFrozen", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minimumWithdrawTimestamp", data: BytesLike): Result;
    events: {
        "HoldingAdded(address,address,uint192)": EventFragment;
        "HoldingClaimed(address,address,uint192)": EventFragment;
        "NetworkDelay(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "HoldingAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "HoldingClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NetworkDelay"): EventFragment;
}
export interface HoldingAddedEventObject {
    user: string;
    token: string;
    amount: BigNumber;
}
export type HoldingAddedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], HoldingAddedEventObject>;
export type HoldingAddedEventFilter = TypedEventFilter<HoldingAddedEvent>;
export interface HoldingClaimedEventObject {
    user: string;
    token: string;
    amount: BigNumber;
}
export type HoldingClaimedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], HoldingClaimedEventObject>;
export type HoldingClaimedEventFilter = TypedEventFilter<HoldingClaimedEvent>;
export interface NetworkDelayEventObject {
    vetoAgent: string;
    timestamp: BigNumber;
}
export type NetworkDelayEvent = TypedEvent<[
    string,
    BigNumber
], NetworkDelayEventObject>;
export type NetworkDelayEventFilter = TypedEventFilter<NetworkDelayEvent>;
export interface SafetyDelay extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SafetyDelayInterface;
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
        DEFAULT_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        FIVE_WEEKS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MINER_POOL(overrides?: CallOverrides): Promise<[string]>;
        NINETY_DAYS(overrides?: CallOverrides): Promise<[BigNumber]>;
        VETO_COUNCIL(overrides?: CallOverrides): Promise<[string]>;
        VETO_HOLDING_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        addHolding(user: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimHoldingSingleton(user: string, token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimHoldings(args: ClaimHoldingArgsStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delayNetwork(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        holdings(user: string, token: string, overrides?: CallOverrides): Promise<[HoldingStructOutput]>;
        isNetworkFrozen(overrides?: CallOverrides): Promise<[boolean]>;
        minimumWithdrawTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    DEFAULT_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
    FIVE_WEEKS(overrides?: CallOverrides): Promise<BigNumber>;
    MINER_POOL(overrides?: CallOverrides): Promise<string>;
    NINETY_DAYS(overrides?: CallOverrides): Promise<BigNumber>;
    VETO_COUNCIL(overrides?: CallOverrides): Promise<string>;
    VETO_HOLDING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
    addHolding(user: string, token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimHoldingSingleton(user: string, token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimHoldings(args: ClaimHoldingArgsStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delayNetwork(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    holdings(user: string, token: string, overrides?: CallOverrides): Promise<HoldingStructOutput>;
    isNetworkFrozen(overrides?: CallOverrides): Promise<boolean>;
    minimumWithdrawTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        DEFAULT_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        FIVE_WEEKS(overrides?: CallOverrides): Promise<BigNumber>;
        MINER_POOL(overrides?: CallOverrides): Promise<string>;
        NINETY_DAYS(overrides?: CallOverrides): Promise<BigNumber>;
        VETO_COUNCIL(overrides?: CallOverrides): Promise<string>;
        VETO_HOLDING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        addHolding(user: string, token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        claimHoldingSingleton(user: string, token: string, overrides?: CallOverrides): Promise<void>;
        claimHoldings(args: ClaimHoldingArgsStruct[], overrides?: CallOverrides): Promise<void>;
        delayNetwork(overrides?: CallOverrides): Promise<void>;
        holdings(user: string, token: string, overrides?: CallOverrides): Promise<HoldingStructOutput>;
        isNetworkFrozen(overrides?: CallOverrides): Promise<boolean>;
        minimumWithdrawTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "HoldingAdded(address,address,uint192)"(user?: string | null, token?: string | null, amount?: null): HoldingAddedEventFilter;
        HoldingAdded(user?: string | null, token?: string | null, amount?: null): HoldingAddedEventFilter;
        "HoldingClaimed(address,address,uint192)"(user?: string | null, token?: string | null, amount?: null): HoldingClaimedEventFilter;
        HoldingClaimed(user?: string | null, token?: string | null, amount?: null): HoldingClaimedEventFilter;
        "NetworkDelay(address,uint256)"(vetoAgent?: null, timestamp?: null): NetworkDelayEventFilter;
        NetworkDelay(vetoAgent?: null, timestamp?: null): NetworkDelayEventFilter;
    };
    estimateGas: {
        DEFAULT_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        FIVE_WEEKS(overrides?: CallOverrides): Promise<BigNumber>;
        MINER_POOL(overrides?: CallOverrides): Promise<BigNumber>;
        NINETY_DAYS(overrides?: CallOverrides): Promise<BigNumber>;
        VETO_COUNCIL(overrides?: CallOverrides): Promise<BigNumber>;
        VETO_HOLDING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        addHolding(user: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimHoldingSingleton(user: string, token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimHoldings(args: ClaimHoldingArgsStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delayNetwork(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        holdings(user: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
        isNetworkFrozen(overrides?: CallOverrides): Promise<BigNumber>;
        minimumWithdrawTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FIVE_WEEKS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MINER_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NINETY_DAYS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VETO_COUNCIL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VETO_HOLDING_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addHolding(user: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimHoldingSingleton(user: string, token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimHoldings(args: ClaimHoldingArgsStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delayNetwork(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        holdings(user: string, token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isNetworkFrozen(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minimumWithdrawTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
