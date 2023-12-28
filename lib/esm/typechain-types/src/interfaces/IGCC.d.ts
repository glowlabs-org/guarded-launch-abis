import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface IGCCInterface extends utils.Interface {
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "commitAllowance(address,address)": FunctionFragment;
        "commitGCC(uint256,address,uint256)": FunctionFragment;
        "commitGCC(uint256,address,address,uint256)": FunctionFragment;
        "commitGCCFor(address,address,uint256,uint256)": FunctionFragment;
        "commitGCCFor(address,address,uint256,address,uint256)": FunctionFragment;
        "commitGCCForAuthorized(address,address,uint256,uint256,bytes,address,uint256)": FunctionFragment;
        "commitGCCForAuthorized(address,address,uint256,uint256,bytes,uint256)": FunctionFragment;
        "commitUSDC(uint256,address,uint256)": FunctionFragment;
        "commitUSDC(uint256,address,address,uint256)": FunctionFragment;
        "commitUSDCSignature(uint256,address,address,uint256,uint8,bytes32,bytes32,uint256)": FunctionFragment;
        "decreaseAllowances(address,uint256)": FunctionFragment;
        "decreaseCommitAllowance(address,uint256)": FunctionFragment;
        "increaseAllowances(address,uint256)": FunctionFragment;
        "increaseCommitAllowance(address,uint256)": FunctionFragment;
        "isBucketMinted(uint256)": FunctionFragment;
        "mintToCarbonCreditAuction(uint256,uint256)": FunctionFragment;
        "nextCommitNonce(address)": FunctionFragment;
        "setAllowances(address,uint256,uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowance" | "approve" | "balanceOf" | "commitAllowance" | "commitGCC(uint256,address,uint256)" | "commitGCC(uint256,address,address,uint256)" | "commitGCCFor(address,address,uint256,uint256)" | "commitGCCFor(address,address,uint256,address,uint256)" | "commitGCCForAuthorized(address,address,uint256,uint256,bytes,address,uint256)" | "commitGCCForAuthorized(address,address,uint256,uint256,bytes,uint256)" | "commitUSDC(uint256,address,uint256)" | "commitUSDC(uint256,address,address,uint256)" | "commitUSDCSignature" | "decreaseAllowances" | "decreaseCommitAllowance" | "increaseAllowances" | "increaseCommitAllowance" | "isBucketMinted" | "mintToCarbonCreditAuction" | "nextCommitNonce" | "setAllowances" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "commitAllowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "commitGCC(uint256,address,uint256)", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "commitGCC(uint256,address,address,uint256)", values: [BigNumberish, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "commitGCCFor(address,address,uint256,uint256)", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "commitGCCFor(address,address,uint256,address,uint256)", values: [string, string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "commitGCCForAuthorized(address,address,uint256,uint256,bytes,address,uint256)", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "commitGCCForAuthorized(address,address,uint256,uint256,bytes,uint256)", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "commitUSDC(uint256,address,uint256)", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "commitUSDC(uint256,address,address,uint256)", values: [BigNumberish, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "commitUSDCSignature", values: [
        BigNumberish,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "decreaseAllowances", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "decreaseCommitAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "increaseAllowances", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "increaseCommitAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isBucketMinted", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintToCarbonCreditAuction", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "nextCommitNonce", values: [string]): string;
    encodeFunctionData(functionFragment: "setAllowances", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitGCC(uint256,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitGCC(uint256,address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitGCCFor(address,address,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitGCCFor(address,address,uint256,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitGCCForAuthorized(address,address,uint256,uint256,bytes,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitGCCForAuthorized(address,address,uint256,uint256,bytes,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitUSDC(uint256,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitUSDC(uint256,address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitUSDCSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseCommitAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseCommitAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBucketMinted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintToCarbonCreditAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextCommitNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAllowances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "CommitGCCAllowance(address,address,uint256)": EventFragment;
        "GCCCommitted(address,address,uint256,uint256,uint256,address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "USDCCommitted(address,address,uint256,uint256,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CommitGCCAllowance"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GCCCommitted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "USDCCommitted"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface CommitGCCAllowanceEventObject {
    account: string;
    spender: string;
    value: BigNumber;
}
export type CommitGCCAllowanceEvent = TypedEvent<[
    string,
    string,
    BigNumber
], CommitGCCAllowanceEventObject>;
export type CommitGCCAllowanceEventFilter = TypedEventFilter<CommitGCCAllowanceEvent>;
export interface GCCCommittedEventObject {
    account: string;
    rewardAddress: string;
    gccAmount: BigNumber;
    usdcEffect: BigNumber;
    impactPower: BigNumber;
    referralAddress: string;
}
export type GCCCommittedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], GCCCommittedEventObject>;
export type GCCCommittedEventFilter = TypedEventFilter<GCCCommittedEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface USDCCommittedEventObject {
    account: string;
    rewardAddress: string;
    amount: BigNumber;
    impactPower: BigNumber;
    referralAddress: string;
}
export type USDCCommittedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    string
], USDCCommittedEventObject>;
export type USDCCommittedEventFilter = TypedEventFilter<USDCCommittedEvent>;
export interface IGCC extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGCCInterface;
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
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        commitAllowance(account: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        "commitGCC(uint256,address,uint256)"(amount: BigNumberish, rewardAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "commitGCC(uint256,address,address,uint256)"(amount: BigNumberish, rewardAddress: string, referralAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "commitGCCFor(address,address,uint256,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "commitGCCFor(address,address,uint256,address,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, referralAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "commitGCCForAuthorized(address,address,uint256,uint256,bytes,address,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, deadline: BigNumberish, signature: BytesLike, referralAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "commitGCCForAuthorized(address,address,uint256,uint256,bytes,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, deadline: BigNumberish, signature: BytesLike, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "commitUSDC(uint256,address,uint256)"(amount: BigNumberish, rewardAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "commitUSDC(uint256,address,address,uint256)"(amount: BigNumberish, rewardAddress: string, referralAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        commitUSDCSignature(amount: BigNumberish, rewardAddress: string, referralAddress: string, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        decreaseAllowances(spender: string, requestedDecrease: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        decreaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        increaseAllowances(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        increaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isBucketMinted(bucketId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        mintToCarbonCreditAuction(bucketId: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        nextCommitNonce(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        setAllowances(spender: string, transferAllowance: BigNumberish, committingAllowance: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    commitAllowance(account: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    "commitGCC(uint256,address,uint256)"(amount: BigNumberish, rewardAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "commitGCC(uint256,address,address,uint256)"(amount: BigNumberish, rewardAddress: string, referralAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "commitGCCFor(address,address,uint256,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, minImpactPower: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "commitGCCFor(address,address,uint256,address,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, referralAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "commitGCCForAuthorized(address,address,uint256,uint256,bytes,address,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, deadline: BigNumberish, signature: BytesLike, referralAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "commitGCCForAuthorized(address,address,uint256,uint256,bytes,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, deadline: BigNumberish, signature: BytesLike, minImpactPower: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "commitUSDC(uint256,address,uint256)"(amount: BigNumberish, rewardAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "commitUSDC(uint256,address,address,uint256)"(amount: BigNumberish, rewardAddress: string, referralAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    commitUSDCSignature(amount: BigNumberish, rewardAddress: string, referralAddress: string, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, minImpactPower: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    decreaseAllowances(spender: string, requestedDecrease: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    decreaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    increaseAllowances(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    increaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isBucketMinted(bucketId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    mintToCarbonCreditAuction(bucketId: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    nextCommitNonce(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    setAllowances(spender: string, transferAllowance: BigNumberish, committingAllowance: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        commitAllowance(account: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        "commitGCC(uint256,address,uint256)"(amount: BigNumberish, rewardAddress: string, minImpactPower: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            usdcEffect: BigNumber;
            impactPower: BigNumber;
        }>;
        "commitGCC(uint256,address,address,uint256)"(amount: BigNumberish, rewardAddress: string, referralAddress: string, minImpactPower: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            usdcEffect: BigNumber;
            impactPower: BigNumber;
        }>;
        "commitGCCFor(address,address,uint256,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, minImpactPower: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        "commitGCCFor(address,address,uint256,address,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, referralAddress: string, minImpactPower: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            usdcEffect: BigNumber;
            impactPower: BigNumber;
        }>;
        "commitGCCForAuthorized(address,address,uint256,uint256,bytes,address,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, deadline: BigNumberish, signature: BytesLike, referralAddress: string, minImpactPower: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            usdcEffect: BigNumber;
            impactPower: BigNumber;
        }>;
        "commitGCCForAuthorized(address,address,uint256,uint256,bytes,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, deadline: BigNumberish, signature: BytesLike, minImpactPower: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            usdcEffect: BigNumber;
            impactPower: BigNumber;
        }>;
        "commitUSDC(uint256,address,uint256)"(amount: BigNumberish, rewardAddress: string, minImpactPower: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "commitUSDC(uint256,address,address,uint256)"(amount: BigNumberish, rewardAddress: string, referralAddress: string, minImpactPower: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        commitUSDCSignature(amount: BigNumberish, rewardAddress: string, referralAddress: string, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, minImpactPower: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowances(spender: string, requestedDecrease: BigNumberish, overrides?: CallOverrides): Promise<void>;
        decreaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        increaseAllowances(spender: string, addedValue: BigNumberish, overrides?: CallOverrides): Promise<void>;
        increaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        isBucketMinted(bucketId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        mintToCarbonCreditAuction(bucketId: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        nextCommitNonce(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        setAllowances(spender: string, transferAllowance: BigNumberish, committingAllowance: BigNumberish, overrides?: CallOverrides): Promise<void>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "CommitGCCAllowance(address,address,uint256)"(account?: string | null, spender?: string | null, value?: null): CommitGCCAllowanceEventFilter;
        CommitGCCAllowance(account?: string | null, spender?: string | null, value?: null): CommitGCCAllowanceEventFilter;
        "GCCCommitted(address,address,uint256,uint256,uint256,address)"(account?: string | null, rewardAddress?: string | null, gccAmount?: null, usdcEffect?: null, impactPower?: null, referralAddress?: null): GCCCommittedEventFilter;
        GCCCommitted(account?: string | null, rewardAddress?: string | null, gccAmount?: null, usdcEffect?: null, impactPower?: null, referralAddress?: null): GCCCommittedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        "USDCCommitted(address,address,uint256,uint256,address)"(account?: string | null, rewardAddress?: string | null, amount?: null, impactPower?: null, referralAddress?: null): USDCCommittedEventFilter;
        USDCCommitted(account?: string | null, rewardAddress?: string | null, amount?: null, impactPower?: null, referralAddress?: null): USDCCommittedEventFilter;
    };
    estimateGas: {
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        commitAllowance(account: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        "commitGCC(uint256,address,uint256)"(amount: BigNumberish, rewardAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "commitGCC(uint256,address,address,uint256)"(amount: BigNumberish, rewardAddress: string, referralAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "commitGCCFor(address,address,uint256,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "commitGCCFor(address,address,uint256,address,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, referralAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "commitGCCForAuthorized(address,address,uint256,uint256,bytes,address,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, deadline: BigNumberish, signature: BytesLike, referralAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "commitGCCForAuthorized(address,address,uint256,uint256,bytes,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, deadline: BigNumberish, signature: BytesLike, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "commitUSDC(uint256,address,uint256)"(amount: BigNumberish, rewardAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "commitUSDC(uint256,address,address,uint256)"(amount: BigNumberish, rewardAddress: string, referralAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        commitUSDCSignature(amount: BigNumberish, rewardAddress: string, referralAddress: string, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        decreaseAllowances(spender: string, requestedDecrease: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        decreaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        increaseAllowances(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        increaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isBucketMinted(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        mintToCarbonCreditAuction(bucketId: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        nextCommitNonce(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        setAllowances(spender: string, transferAllowance: BigNumberish, committingAllowance: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        commitAllowance(account: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "commitGCC(uint256,address,uint256)"(amount: BigNumberish, rewardAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "commitGCC(uint256,address,address,uint256)"(amount: BigNumberish, rewardAddress: string, referralAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "commitGCCFor(address,address,uint256,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "commitGCCFor(address,address,uint256,address,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, referralAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "commitGCCForAuthorized(address,address,uint256,uint256,bytes,address,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, deadline: BigNumberish, signature: BytesLike, referralAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "commitGCCForAuthorized(address,address,uint256,uint256,bytes,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, deadline: BigNumberish, signature: BytesLike, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "commitUSDC(uint256,address,uint256)"(amount: BigNumberish, rewardAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "commitUSDC(uint256,address,address,uint256)"(amount: BigNumberish, rewardAddress: string, referralAddress: string, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        commitUSDCSignature(amount: BigNumberish, rewardAddress: string, referralAddress: string, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, minImpactPower: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        decreaseAllowances(spender: string, requestedDecrease: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        decreaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        increaseAllowances(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        increaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isBucketMinted(bucketId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintToCarbonCreditAuction(bucketId: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        nextCommitNonce(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAllowances(spender: string, transferAllowance: BigNumberish, committingAllowance: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
