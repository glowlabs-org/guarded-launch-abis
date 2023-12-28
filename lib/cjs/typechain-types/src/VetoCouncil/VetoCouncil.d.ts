import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export type StatusStruct = {
    isActive: boolean;
    isSlashed: boolean;
    indexInArray: BigNumberish;
};
export type StatusStructOutput = [boolean, boolean, number] & {
    isActive: boolean;
    isSlashed: boolean;
    indexInArray: number;
};
export interface VetoCouncilInterface extends utils.Interface {
    functions: {
        "GENESIS_TIMESTAMP()": FunctionFragment;
        "GLOW_TOKEN()": FunctionFragment;
        "GOVERNANCE()": FunctionFragment;
        "MAX_COUNCIL_MEMBERS()": FunctionFragment;
        "REWARDS_PER_SECOND_FOR_ALL()": FunctionFragment;
        "VESTING_REWARDS_PER_SECOND_FOR_ALL()": FunctionFragment;
        "addAndRemoveCouncilMember(address,address,bool)": FunctionFragment;
        "amountAlreadyWithdrawnFromPaymentNonce(address,uint256)": FunctionFragment;
        "claimPayout(address,uint256,bool,address[])": FunctionFragment;
        "isCouncilMember(address)": FunctionFragment;
        "memberStatus(address)": FunctionFragment;
        "numberOfCouncilMembers()": FunctionFragment;
        "paymentNonce()": FunctionFragment;
        "paymentNonceToShiftStartTimestamp(uint256)": FunctionFragment;
        "paymentNonceTomembersHash(uint256)": FunctionFragment;
        "payoutData(address,uint256,address[])": FunctionFragment;
        "pullGlowFromInflation()": FunctionFragment;
        "vetoCouncilMembers()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "GENESIS_TIMESTAMP" | "GLOW_TOKEN" | "GOVERNANCE" | "MAX_COUNCIL_MEMBERS" | "REWARDS_PER_SECOND_FOR_ALL" | "VESTING_REWARDS_PER_SECOND_FOR_ALL" | "addAndRemoveCouncilMember" | "amountAlreadyWithdrawnFromPaymentNonce" | "claimPayout" | "isCouncilMember" | "memberStatus" | "numberOfCouncilMembers" | "paymentNonce" | "paymentNonceToShiftStartTimestamp" | "paymentNonceTomembersHash" | "payoutData" | "pullGlowFromInflation" | "vetoCouncilMembers"): FunctionFragment;
    encodeFunctionData(functionFragment: "GENESIS_TIMESTAMP", values?: undefined): string;
    encodeFunctionData(functionFragment: "GLOW_TOKEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "GOVERNANCE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_COUNCIL_MEMBERS", values?: undefined): string;
    encodeFunctionData(functionFragment: "REWARDS_PER_SECOND_FOR_ALL", values?: undefined): string;
    encodeFunctionData(functionFragment: "VESTING_REWARDS_PER_SECOND_FOR_ALL", values?: undefined): string;
    encodeFunctionData(functionFragment: "addAndRemoveCouncilMember", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "amountAlreadyWithdrawnFromPaymentNonce", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimPayout", values: [string, BigNumberish, boolean, string[]]): string;
    encodeFunctionData(functionFragment: "isCouncilMember", values: [string]): string;
    encodeFunctionData(functionFragment: "memberStatus", values: [string]): string;
    encodeFunctionData(functionFragment: "numberOfCouncilMembers", values?: undefined): string;
    encodeFunctionData(functionFragment: "paymentNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "paymentNonceToShiftStartTimestamp", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "paymentNonceTomembersHash", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "payoutData", values: [string, BigNumberish, string[]]): string;
    encodeFunctionData(functionFragment: "pullGlowFromInflation", values?: undefined): string;
    encodeFunctionData(functionFragment: "vetoCouncilMembers", values?: undefined): string;
    decodeFunctionResult(functionFragment: "GENESIS_TIMESTAMP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GLOW_TOKEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GOVERNANCE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_COUNCIL_MEMBERS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "REWARDS_PER_SECOND_FOR_ALL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VESTING_REWARDS_PER_SECOND_FOR_ALL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAndRemoveCouncilMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "amountAlreadyWithdrawnFromPaymentNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimPayout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCouncilMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "memberStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numberOfCouncilMembers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paymentNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paymentNonceToShiftStartTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paymentNonceTomembersHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payoutData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pullGlowFromInflation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vetoCouncilMembers", data: BytesLike): Result;
    events: {
        "CouncilMemberPayout(address,uint256,uint256)": EventFragment;
        "PayoutClaimed(address,uint256,uint256)": EventFragment;
        "VetoCouncilSeatsEdited(address,address,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CouncilMemberPayout"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PayoutClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VetoCouncilSeatsEdited"): EventFragment;
}
export interface CouncilMemberPayoutEventObject {
    account: string;
    amountNow: BigNumber;
    amountToBeVested: BigNumber;
}
export type CouncilMemberPayoutEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], CouncilMemberPayoutEventObject>;
export type CouncilMemberPayoutEventFilter = TypedEventFilter<CouncilMemberPayoutEvent>;
export interface PayoutClaimedEventObject {
    member: string;
    nonce: BigNumber;
    amount: BigNumber;
}
export type PayoutClaimedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], PayoutClaimedEventObject>;
export type PayoutClaimedEventFilter = TypedEventFilter<PayoutClaimedEvent>;
export interface VetoCouncilSeatsEditedEventObject {
    oldMember: string;
    newMember: string;
    slashOldMember: boolean;
}
export type VetoCouncilSeatsEditedEvent = TypedEvent<[
    string,
    string,
    boolean
], VetoCouncilSeatsEditedEventObject>;
export type VetoCouncilSeatsEditedEventFilter = TypedEventFilter<VetoCouncilSeatsEditedEvent>;
export interface VetoCouncil extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VetoCouncilInterface;
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
        MAX_COUNCIL_MEMBERS(overrides?: CallOverrides): Promise<[BigNumber]>;
        REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<[BigNumber]>;
        VESTING_REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<[BigNumber]>;
        addAndRemoveCouncilMember(oldMember: string, newMember: string, slashOldMember: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        amountAlreadyWithdrawnFromPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimPayout(member: string, nonce: BigNumberish, sync: boolean, members: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isCouncilMember(member: string, overrides?: CallOverrides): Promise<[boolean]>;
        memberStatus(member: string, overrides?: CallOverrides): Promise<[StatusStructOutput]>;
        numberOfCouncilMembers(overrides?: CallOverrides): Promise<[BigNumber]>;
        paymentNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        paymentNonceTomembersHash(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        payoutData(member: string, nonce: BigNumberish, members: string[], overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        pullGlowFromInflation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        vetoCouncilMembers(overrides?: CallOverrides): Promise<[string[]]>;
    };
    GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
    GLOW_TOKEN(overrides?: CallOverrides): Promise<string>;
    GOVERNANCE(overrides?: CallOverrides): Promise<string>;
    MAX_COUNCIL_MEMBERS(overrides?: CallOverrides): Promise<BigNumber>;
    REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<BigNumber>;
    VESTING_REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<BigNumber>;
    addAndRemoveCouncilMember(oldMember: string, newMember: string, slashOldMember: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    amountAlreadyWithdrawnFromPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    claimPayout(member: string, nonce: BigNumberish, sync: boolean, members: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isCouncilMember(member: string, overrides?: CallOverrides): Promise<boolean>;
    memberStatus(member: string, overrides?: CallOverrides): Promise<StatusStructOutput>;
    numberOfCouncilMembers(overrides?: CallOverrides): Promise<BigNumber>;
    paymentNonce(overrides?: CallOverrides): Promise<BigNumber>;
    paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    paymentNonceTomembersHash(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    payoutData(member: string, nonce: BigNumberish, members: string[], overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    pullGlowFromInflation(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    vetoCouncilMembers(overrides?: CallOverrides): Promise<string[]>;
    callStatic: {
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
        GLOW_TOKEN(overrides?: CallOverrides): Promise<string>;
        GOVERNANCE(overrides?: CallOverrides): Promise<string>;
        MAX_COUNCIL_MEMBERS(overrides?: CallOverrides): Promise<BigNumber>;
        REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<BigNumber>;
        VESTING_REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<BigNumber>;
        addAndRemoveCouncilMember(oldMember: string, newMember: string, slashOldMember: boolean, overrides?: CallOverrides): Promise<boolean>;
        amountAlreadyWithdrawnFromPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        claimPayout(member: string, nonce: BigNumberish, sync: boolean, members: string[], overrides?: CallOverrides): Promise<void>;
        isCouncilMember(member: string, overrides?: CallOverrides): Promise<boolean>;
        memberStatus(member: string, overrides?: CallOverrides): Promise<StatusStructOutput>;
        numberOfCouncilMembers(overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonce(overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonceTomembersHash(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        payoutData(member: string, nonce: BigNumberish, members: string[], overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        pullGlowFromInflation(overrides?: CallOverrides): Promise<void>;
        vetoCouncilMembers(overrides?: CallOverrides): Promise<string[]>;
    };
    filters: {
        "CouncilMemberPayout(address,uint256,uint256)"(account?: string | null, amountNow?: null, amountToBeVested?: null): CouncilMemberPayoutEventFilter;
        CouncilMemberPayout(account?: string | null, amountNow?: null, amountToBeVested?: null): CouncilMemberPayoutEventFilter;
        "PayoutClaimed(address,uint256,uint256)"(member?: string | null, nonce?: BigNumberish | null, amount?: null): PayoutClaimedEventFilter;
        PayoutClaimed(member?: string | null, nonce?: BigNumberish | null, amount?: null): PayoutClaimedEventFilter;
        "VetoCouncilSeatsEdited(address,address,bool)"(oldMember?: string | null, newMember?: string | null, slashOldMember?: null): VetoCouncilSeatsEditedEventFilter;
        VetoCouncilSeatsEdited(oldMember?: string | null, newMember?: string | null, slashOldMember?: null): VetoCouncilSeatsEditedEventFilter;
    };
    estimateGas: {
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
        GLOW_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;
        GOVERNANCE(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_COUNCIL_MEMBERS(overrides?: CallOverrides): Promise<BigNumber>;
        REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<BigNumber>;
        VESTING_REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<BigNumber>;
        addAndRemoveCouncilMember(oldMember: string, newMember: string, slashOldMember: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        amountAlreadyWithdrawnFromPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        claimPayout(member: string, nonce: BigNumberish, sync: boolean, members: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isCouncilMember(member: string, overrides?: CallOverrides): Promise<BigNumber>;
        memberStatus(member: string, overrides?: CallOverrides): Promise<BigNumber>;
        numberOfCouncilMembers(overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonce(overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonceTomembersHash(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        payoutData(member: string, nonce: BigNumberish, members: string[], overrides?: CallOverrides): Promise<BigNumber>;
        pullGlowFromInflation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        vetoCouncilMembers(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GLOW_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GOVERNANCE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_COUNCIL_MEMBERS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VESTING_REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAndRemoveCouncilMember(oldMember: string, newMember: string, slashOldMember: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        amountAlreadyWithdrawnFromPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimPayout(member: string, nonce: BigNumberish, sync: boolean, members: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isCouncilMember(member: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        memberStatus(member: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        numberOfCouncilMembers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paymentNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paymentNonceTomembersHash(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        payoutData(member: string, nonce: BigNumberish, members: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pullGlowFromInflation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        vetoCouncilMembers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
