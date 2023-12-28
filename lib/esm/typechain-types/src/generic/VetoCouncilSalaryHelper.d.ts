import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
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
export interface VetoCouncilSalaryHelperInterface extends utils.Interface {
    functions: {
        "amountAlreadyWithdrawnFromPaymentNonce(address,uint256)": FunctionFragment;
        "memberStatus(address)": FunctionFragment;
        "paymentNonce()": FunctionFragment;
        "paymentNonceToShiftStartTimestamp(uint256)": FunctionFragment;
        "paymentNonceTomembersHash(uint256)": FunctionFragment;
        "payoutData(address,uint256,address[])": FunctionFragment;
        "vetoCouncilMembers()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "amountAlreadyWithdrawnFromPaymentNonce" | "memberStatus" | "paymentNonce" | "paymentNonceToShiftStartTimestamp" | "paymentNonceTomembersHash" | "payoutData" | "vetoCouncilMembers"): FunctionFragment;
    encodeFunctionData(functionFragment: "amountAlreadyWithdrawnFromPaymentNonce", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "memberStatus", values: [string]): string;
    encodeFunctionData(functionFragment: "paymentNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "paymentNonceToShiftStartTimestamp", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "paymentNonceTomembersHash", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "payoutData", values: [string, BigNumberish, string[]]): string;
    encodeFunctionData(functionFragment: "vetoCouncilMembers", values?: undefined): string;
    decodeFunctionResult(functionFragment: "amountAlreadyWithdrawnFromPaymentNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "memberStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paymentNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paymentNonceToShiftStartTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paymentNonceTomembersHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payoutData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vetoCouncilMembers", data: BytesLike): Result;
    events: {};
}
export interface VetoCouncilSalaryHelper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VetoCouncilSalaryHelperInterface;
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
        amountAlreadyWithdrawnFromPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        memberStatus(member: string, overrides?: CallOverrides): Promise<[StatusStructOutput]>;
        paymentNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        paymentNonceTomembersHash(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        payoutData(member: string, nonce: BigNumberish, members: string[], overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        vetoCouncilMembers(overrides?: CallOverrides): Promise<[string[]]>;
    };
    amountAlreadyWithdrawnFromPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    memberStatus(member: string, overrides?: CallOverrides): Promise<StatusStructOutput>;
    paymentNonce(overrides?: CallOverrides): Promise<BigNumber>;
    paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    paymentNonceTomembersHash(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    payoutData(member: string, nonce: BigNumberish, members: string[], overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    vetoCouncilMembers(overrides?: CallOverrides): Promise<string[]>;
    callStatic: {
        amountAlreadyWithdrawnFromPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        memberStatus(member: string, overrides?: CallOverrides): Promise<StatusStructOutput>;
        paymentNonce(overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonceTomembersHash(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        payoutData(member: string, nonce: BigNumberish, members: string[], overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        vetoCouncilMembers(overrides?: CallOverrides): Promise<string[]>;
    };
    filters: {};
    estimateGas: {
        amountAlreadyWithdrawnFromPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        memberStatus(member: string, overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonce(overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonceTomembersHash(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        payoutData(member: string, nonce: BigNumberish, members: string[], overrides?: CallOverrides): Promise<BigNumber>;
        vetoCouncilMembers(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        amountAlreadyWithdrawnFromPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        memberStatus(member: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paymentNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paymentNonceTomembersHash(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        payoutData(member: string, nonce: BigNumberish, members: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vetoCouncilMembers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
