import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface MockSalaryHelperInterface extends utils.Interface {
    functions: {
        "CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH()": FunctionFragment;
        "REWARDS_PER_SECOND_FOR_ALL()": FunctionFragment;
        "SHARES_REQUIRED_PER_COMP_PLAN()": FunctionFragment;
        "amountWithdrawnAtPaymentNonce(address,uint256)": FunctionFragment;
        "claimGlowFromInflation()": FunctionFragment;
        "claimPayout(address,uint256,address[],uint256,bool,bytes)": FunctionFragment;
        "createRelayDigest(address,uint256,uint256)": FunctionFragment;
        "domainSeperatorV4Main()": FunctionFragment;
        "genesisTimestampWithin()": FunctionFragment;
        "getPayoutData(address,uint256,address[],uint256)": FunctionFragment;
        "isSlashed(address)": FunctionFragment;
        "nextRelayNonce(address)": FunctionFragment;
        "paymentNonce()": FunctionFragment;
        "paymentNonceToCompensationPlan(uint256,uint256)": FunctionFragment;
        "paymentNonceToShiftStartTimestamp(uint256)": FunctionFragment;
        "payoutNonceToGCAHash(uint256)": FunctionFragment;
        "transferGlow(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH" | "REWARDS_PER_SECOND_FOR_ALL" | "SHARES_REQUIRED_PER_COMP_PLAN" | "amountWithdrawnAtPaymentNonce" | "claimGlowFromInflation" | "claimPayout" | "createRelayDigest" | "domainSeperatorV4Main" | "genesisTimestampWithin" | "getPayoutData" | "isSlashed" | "nextRelayNonce" | "paymentNonce" | "paymentNonceToCompensationPlan" | "paymentNonceToShiftStartTimestamp" | "payoutNonceToGCAHash" | "transferGlow"): FunctionFragment;
    encodeFunctionData(functionFragment: "CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "REWARDS_PER_SECOND_FOR_ALL", values?: undefined): string;
    encodeFunctionData(functionFragment: "SHARES_REQUIRED_PER_COMP_PLAN", values?: undefined): string;
    encodeFunctionData(functionFragment: "amountWithdrawnAtPaymentNonce", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimGlowFromInflation", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimPayout", values: [string, BigNumberish, string[], BigNumberish, boolean, BytesLike]): string;
    encodeFunctionData(functionFragment: "createRelayDigest", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "domainSeperatorV4Main", values?: undefined): string;
    encodeFunctionData(functionFragment: "genesisTimestampWithin", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPayoutData", values: [string, BigNumberish, string[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "isSlashed", values: [string]): string;
    encodeFunctionData(functionFragment: "nextRelayNonce", values: [string]): string;
    encodeFunctionData(functionFragment: "paymentNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "paymentNonceToCompensationPlan", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "paymentNonceToShiftStartTimestamp", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "payoutNonceToGCAHash", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferGlow", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "REWARDS_PER_SECOND_FOR_ALL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SHARES_REQUIRED_PER_COMP_PLAN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "amountWithdrawnAtPaymentNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimGlowFromInflation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimPayout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createRelayDigest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "domainSeperatorV4Main", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "genesisTimestampWithin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPayoutData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSlashed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextRelayNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paymentNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paymentNonceToCompensationPlan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paymentNonceToShiftStartTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payoutNonceToGCAHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferGlow", data: BytesLike): Result;
    events: {};
}
export interface MockSalaryHelper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockSalaryHelperInterface;
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
        CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<[BigNumber]>;
        SHARES_REQUIRED_PER_COMP_PLAN(overrides?: CallOverrides): Promise<[BigNumber]>;
        amountWithdrawnAtPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimGlowFromInflation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimPayout(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, claimFromInflation: boolean, sig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createRelayDigest(relayer: string, paymentNonce: BigNumberish, relayNonce: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        domainSeperatorV4Main(overrides?: CallOverrides): Promise<[string]>;
        genesisTimestampWithin(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPayoutData(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            withdrawableAmount: BigNumber;
            slashableAmount: BigNumber;
            amountAlreadyWithdrawn: BigNumber;
        }>;
        isSlashed(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        nextRelayNonce(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        paymentNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        paymentNonceToCompensationPlan(nonce: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<[[number, number, number, number, number]]>;
        paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        payoutNonceToGCAHash(nonce: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        transferGlow(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<BigNumber>;
    SHARES_REQUIRED_PER_COMP_PLAN(overrides?: CallOverrides): Promise<BigNumber>;
    amountWithdrawnAtPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    claimGlowFromInflation(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimPayout(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, claimFromInflation: boolean, sig: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createRelayDigest(relayer: string, paymentNonce: BigNumberish, relayNonce: BigNumberish, overrides?: CallOverrides): Promise<string>;
    domainSeperatorV4Main(overrides?: CallOverrides): Promise<string>;
    genesisTimestampWithin(overrides?: CallOverrides): Promise<BigNumber>;
    getPayoutData(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        withdrawableAmount: BigNumber;
        slashableAmount: BigNumber;
        amountAlreadyWithdrawn: BigNumber;
    }>;
    isSlashed(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    nextRelayNonce(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    paymentNonce(overrides?: CallOverrides): Promise<BigNumber>;
    paymentNonceToCompensationPlan(nonce: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<[number, number, number, number, number]>;
    paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    payoutNonceToGCAHash(nonce: BigNumberish, overrides?: CallOverrides): Promise<string>;
    transferGlow(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<BigNumber>;
        SHARES_REQUIRED_PER_COMP_PLAN(overrides?: CallOverrides): Promise<BigNumber>;
        amountWithdrawnAtPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        claimGlowFromInflation(overrides?: CallOverrides): Promise<void>;
        claimPayout(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, claimFromInflation: boolean, sig: BytesLike, overrides?: CallOverrides): Promise<void>;
        createRelayDigest(relayer: string, paymentNonce: BigNumberish, relayNonce: BigNumberish, overrides?: CallOverrides): Promise<string>;
        domainSeperatorV4Main(overrides?: CallOverrides): Promise<string>;
        genesisTimestampWithin(overrides?: CallOverrides): Promise<BigNumber>;
        getPayoutData(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            withdrawableAmount: BigNumber;
            slashableAmount: BigNumber;
            amountAlreadyWithdrawn: BigNumber;
        }>;
        isSlashed(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        nextRelayNonce(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonce(overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonceToCompensationPlan(nonce: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<[number, number, number, number, number]>;
        paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        payoutNonceToGCAHash(nonce: BigNumberish, overrides?: CallOverrides): Promise<string>;
        transferGlow(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<BigNumber>;
        SHARES_REQUIRED_PER_COMP_PLAN(overrides?: CallOverrides): Promise<BigNumber>;
        amountWithdrawnAtPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        claimGlowFromInflation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimPayout(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, claimFromInflation: boolean, sig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createRelayDigest(relayer: string, paymentNonce: BigNumberish, relayNonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        domainSeperatorV4Main(overrides?: CallOverrides): Promise<BigNumber>;
        genesisTimestampWithin(overrides?: CallOverrides): Promise<BigNumber>;
        getPayoutData(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isSlashed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        nextRelayNonce(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonce(overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonceToCompensationPlan(nonce: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        payoutNonceToGCAHash(nonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        transferGlow(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REWARDS_PER_SECOND_FOR_ALL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SHARES_REQUIRED_PER_COMP_PLAN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        amountWithdrawnAtPaymentNonce(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimGlowFromInflation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimPayout(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, claimFromInflation: boolean, sig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createRelayDigest(relayer: string, paymentNonce: BigNumberish, relayNonce: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        domainSeperatorV4Main(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        genesisTimestampWithin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPayoutData(user: string, paymentNonce: BigNumberish, activeGCAsAtPaymentNonce: string[], userIndex: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isSlashed(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextRelayNonce(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paymentNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paymentNonceToCompensationPlan(nonce: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paymentNonceToShiftStartTimestamp(nonce: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        payoutNonceToGCAHash(nonce: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferGlow(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
