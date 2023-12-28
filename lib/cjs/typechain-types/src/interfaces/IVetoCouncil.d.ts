import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface IVetoCouncilInterface extends utils.Interface {
    functions: {
        "addAndRemoveCouncilMember(address,address,bool)": FunctionFragment;
        "claimPayout(address,uint256,bool,address[])": FunctionFragment;
        "isCouncilMember(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addAndRemoveCouncilMember" | "claimPayout" | "isCouncilMember"): FunctionFragment;
    encodeFunctionData(functionFragment: "addAndRemoveCouncilMember", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "claimPayout", values: [string, BigNumberish, boolean, string[]]): string;
    encodeFunctionData(functionFragment: "isCouncilMember", values: [string]): string;
    decodeFunctionResult(functionFragment: "addAndRemoveCouncilMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimPayout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCouncilMember", data: BytesLike): Result;
    events: {
        "CouncilMemberPayout(address,uint256,uint256)": EventFragment;
        "VetoCouncilSeatsEdited(address,address,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CouncilMemberPayout"): EventFragment;
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
export interface IVetoCouncil extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IVetoCouncilInterface;
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
        addAndRemoveCouncilMember(oldMember: string, newMember: string, slashOldMember: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimPayout(member: string, nonce: BigNumberish, sync: boolean, members: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isCouncilMember(member: string, overrides?: CallOverrides): Promise<[boolean]>;
    };
    addAndRemoveCouncilMember(oldMember: string, newMember: string, slashOldMember: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimPayout(member: string, nonce: BigNumberish, sync: boolean, members: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isCouncilMember(member: string, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        addAndRemoveCouncilMember(oldMember: string, newMember: string, slashOldMember: boolean, overrides?: CallOverrides): Promise<boolean>;
        claimPayout(member: string, nonce: BigNumberish, sync: boolean, members: string[], overrides?: CallOverrides): Promise<void>;
        isCouncilMember(member: string, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "CouncilMemberPayout(address,uint256,uint256)"(account?: string | null, amountNow?: null, amountToBeVested?: null): CouncilMemberPayoutEventFilter;
        CouncilMemberPayout(account?: string | null, amountNow?: null, amountToBeVested?: null): CouncilMemberPayoutEventFilter;
        "VetoCouncilSeatsEdited(address,address,bool)"(oldMember?: string | null, newMember?: string | null, slashOldMember?: null): VetoCouncilSeatsEditedEventFilter;
        VetoCouncilSeatsEdited(oldMember?: string | null, newMember?: string | null, slashOldMember?: null): VetoCouncilSeatsEditedEventFilter;
    };
    estimateGas: {
        addAndRemoveCouncilMember(oldMember: string, newMember: string, slashOldMember: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimPayout(member: string, nonce: BigNumberish, sync: boolean, members: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isCouncilMember(member: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addAndRemoveCouncilMember(oldMember: string, newMember: string, slashOldMember: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimPayout(member: string, nonce: BigNumberish, sync: boolean, members: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isCouncilMember(member: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
