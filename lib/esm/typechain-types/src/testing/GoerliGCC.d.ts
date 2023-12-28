import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface GoerliGCCInterface extends utils.Interface {
    functions: {
        "CARBON_CREDIT_AUCTION()": FunctionFragment;
        "COMMIT_PERMIT_TYPEHASH()": FunctionFragment;
        "GCA_AND_MINER_POOL_CONTRACT()": FunctionFragment;
        "GLOW()": FunctionFragment;
        "GOVERNANCE()": FunctionFragment;
        "IMPACT_CATALYST()": FunctionFragment;
        "UNISWAP_ROUTER()": FunctionFragment;
        "USDC()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "burnFrom(address,uint256)": FunctionFragment;
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
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "decreaseAllowances(address,uint256)": FunctionFragment;
        "decreaseCommitAllowance(address,uint256)": FunctionFragment;
        "domainSeparatorV4()": FunctionFragment;
        "eip712Domain()": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "increaseAllowances(address,uint256)": FunctionFragment;
        "increaseCommitAllowance(address,uint256)": FunctionFragment;
        "isBucketMinted(uint256)": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "mintToCarbonCreditAuction(uint256,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "nextCommitNonce(address)": FunctionFragment;
        "setAllowances(address,uint256,uint256)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalImpactPowerEarned(address)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "CARBON_CREDIT_AUCTION" | "COMMIT_PERMIT_TYPEHASH" | "GCA_AND_MINER_POOL_CONTRACT" | "GLOW" | "GOVERNANCE" | "IMPACT_CATALYST" | "UNISWAP_ROUTER" | "USDC" | "allowance" | "approve" | "balanceOf" | "burn" | "burnFrom" | "commitAllowance" | "commitGCC(uint256,address,uint256)" | "commitGCC(uint256,address,address,uint256)" | "commitGCCFor(address,address,uint256,uint256)" | "commitGCCFor(address,address,uint256,address,uint256)" | "commitGCCForAuthorized(address,address,uint256,uint256,bytes,address,uint256)" | "commitGCCForAuthorized(address,address,uint256,uint256,bytes,uint256)" | "commitUSDC(uint256,address,uint256)" | "commitUSDC(uint256,address,address,uint256)" | "commitUSDCSignature" | "decimals" | "decreaseAllowance" | "decreaseAllowances" | "decreaseCommitAllowance" | "domainSeparatorV4" | "eip712Domain" | "increaseAllowance" | "increaseAllowances" | "increaseCommitAllowance" | "isBucketMinted" | "mint" | "mintToCarbonCreditAuction" | "name" | "nextCommitNonce" | "setAllowances" | "symbol" | "totalImpactPowerEarned" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "CARBON_CREDIT_AUCTION", values?: undefined): string;
    encodeFunctionData(functionFragment: "COMMIT_PERMIT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "GCA_AND_MINER_POOL_CONTRACT", values?: undefined): string;
    encodeFunctionData(functionFragment: "GLOW", values?: undefined): string;
    encodeFunctionData(functionFragment: "GOVERNANCE", values?: undefined): string;
    encodeFunctionData(functionFragment: "IMPACT_CATALYST", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNISWAP_ROUTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "USDC", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "burnFrom", values: [string, BigNumberish]): string;
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
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "decreaseAllowances", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "decreaseCommitAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "domainSeparatorV4", values?: undefined): string;
    encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "increaseAllowances", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "increaseCommitAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isBucketMinted", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintToCarbonCreditAuction", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextCommitNonce", values: [string]): string;
    encodeFunctionData(functionFragment: "setAllowances", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalImpactPowerEarned", values: [string]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "CARBON_CREDIT_AUCTION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "COMMIT_PERMIT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GCA_AND_MINER_POOL_CONTRACT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GLOW", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GOVERNANCE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "IMPACT_CATALYST", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNISWAP_ROUTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "USDC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
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
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseCommitAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "domainSeparatorV4", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseCommitAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBucketMinted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintToCarbonCreditAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextCommitNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAllowances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalImpactPowerEarned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "CommitGCCAllowance(address,address,uint256)": EventFragment;
        "EIP712DomainChanged()": EventFragment;
        "GCCCommitted(address,address,uint256,uint256,uint256,address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "USDCCommitted(address,address,uint256,uint256,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CommitGCCAllowance"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EIP712DomainChanged"): EventFragment;
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
export interface EIP712DomainChangedEventObject {
}
export type EIP712DomainChangedEvent = TypedEvent<[
], EIP712DomainChangedEventObject>;
export type EIP712DomainChangedEventFilter = TypedEventFilter<EIP712DomainChangedEvent>;
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
export interface GoerliGCC extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GoerliGCCInterface;
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
        CARBON_CREDIT_AUCTION(overrides?: CallOverrides): Promise<[string]>;
        COMMIT_PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        GCA_AND_MINER_POOL_CONTRACT(overrides?: CallOverrides): Promise<[string]>;
        GLOW(overrides?: CallOverrides): Promise<[string]>;
        GOVERNANCE(overrides?: CallOverrides): Promise<[string]>;
        IMPACT_CATALYST(overrides?: CallOverrides): Promise<[string]>;
        UNISWAP_ROUTER(overrides?: CallOverrides): Promise<[string]>;
        USDC(overrides?: CallOverrides): Promise<[string]>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        burnFrom(account: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
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
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: string, requestedDecrease: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        decreaseAllowances(spender: string, requestedDecrease: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        decreaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        domainSeparatorV4(overrides?: CallOverrides): Promise<[string]>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            string,
            BigNumber[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
            salt: string;
            extensions: BigNumber[];
        }>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        increaseAllowances(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        increaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isBucketMinted(bucketId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        mint(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintToCarbonCreditAuction(bucketId: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nextCommitNonce(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        setAllowances(spender: string, transferAllowance: BigNumberish, committingAllowance: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalImpactPowerEarned(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    CARBON_CREDIT_AUCTION(overrides?: CallOverrides): Promise<string>;
    COMMIT_PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    GCA_AND_MINER_POOL_CONTRACT(overrides?: CallOverrides): Promise<string>;
    GLOW(overrides?: CallOverrides): Promise<string>;
    GOVERNANCE(overrides?: CallOverrides): Promise<string>;
    IMPACT_CATALYST(overrides?: CallOverrides): Promise<string>;
    UNISWAP_ROUTER(overrides?: CallOverrides): Promise<string>;
    USDC(overrides?: CallOverrides): Promise<string>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    burnFrom(account: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
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
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: string, requestedDecrease: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    decreaseAllowances(spender: string, requestedDecrease: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    decreaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    domainSeparatorV4(overrides?: CallOverrides): Promise<string>;
    eip712Domain(overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        BigNumber,
        string,
        string,
        BigNumber[]
    ] & {
        fields: string;
        name: string;
        version: string;
        chainId: BigNumber;
        verifyingContract: string;
        salt: string;
        extensions: BigNumber[];
    }>;
    increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    increaseAllowances(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    increaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isBucketMinted(bucketId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    mint(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintToCarbonCreditAuction(bucketId: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    nextCommitNonce(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    setAllowances(spender: string, transferAllowance: BigNumberish, committingAllowance: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalImpactPowerEarned(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        CARBON_CREDIT_AUCTION(overrides?: CallOverrides): Promise<string>;
        COMMIT_PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        GCA_AND_MINER_POOL_CONTRACT(overrides?: CallOverrides): Promise<string>;
        GLOW(overrides?: CallOverrides): Promise<string>;
        GOVERNANCE(overrides?: CallOverrides): Promise<string>;
        IMPACT_CATALYST(overrides?: CallOverrides): Promise<string>;
        UNISWAP_ROUTER(overrides?: CallOverrides): Promise<string>;
        USDC(overrides?: CallOverrides): Promise<string>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        burnFrom(account: string, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        commitAllowance(account: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        "commitGCC(uint256,address,uint256)"(amount: BigNumberish, rewardAddress: string, minImpactPower: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
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
        "commitGCCForAuthorized(address,address,uint256,uint256,bytes,address,uint256)"(from: string, rewardAddress: string, amount: BigNumberish, deadline: BigNumberish, signature: BytesLike, referralAddress: string, minImpactPower: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
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
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: string, requestedDecrease: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        decreaseAllowances(spender: string, requestedDecrease: BigNumberish, overrides?: CallOverrides): Promise<void>;
        decreaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        domainSeparatorV4(overrides?: CallOverrides): Promise<string>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            string,
            BigNumber[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
            salt: string;
            extensions: BigNumber[];
        }>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        increaseAllowances(spender: string, addedValue: BigNumberish, overrides?: CallOverrides): Promise<void>;
        increaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        isBucketMinted(bucketId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        mint(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        mintToCarbonCreditAuction(bucketId: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        nextCommitNonce(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        setAllowances(spender: string, transferAllowance: BigNumberish, committingAllowance: BigNumberish, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalImpactPowerEarned(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "CommitGCCAllowance(address,address,uint256)"(account?: string | null, spender?: string | null, value?: null): CommitGCCAllowanceEventFilter;
        CommitGCCAllowance(account?: string | null, spender?: string | null, value?: null): CommitGCCAllowanceEventFilter;
        "EIP712DomainChanged()"(): EIP712DomainChangedEventFilter;
        EIP712DomainChanged(): EIP712DomainChangedEventFilter;
        "GCCCommitted(address,address,uint256,uint256,uint256,address)"(account?: string | null, rewardAddress?: string | null, gccAmount?: null, usdcEffect?: null, impactPower?: null, referralAddress?: null): GCCCommittedEventFilter;
        GCCCommitted(account?: string | null, rewardAddress?: string | null, gccAmount?: null, usdcEffect?: null, impactPower?: null, referralAddress?: null): GCCCommittedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        "USDCCommitted(address,address,uint256,uint256,address)"(account?: string | null, rewardAddress?: string | null, amount?: null, impactPower?: null, referralAddress?: null): USDCCommittedEventFilter;
        USDCCommitted(account?: string | null, rewardAddress?: string | null, amount?: null, impactPower?: null, referralAddress?: null): USDCCommittedEventFilter;
    };
    estimateGas: {
        CARBON_CREDIT_AUCTION(overrides?: CallOverrides): Promise<BigNumber>;
        COMMIT_PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        GCA_AND_MINER_POOL_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;
        GLOW(overrides?: CallOverrides): Promise<BigNumber>;
        GOVERNANCE(overrides?: CallOverrides): Promise<BigNumber>;
        IMPACT_CATALYST(overrides?: CallOverrides): Promise<BigNumber>;
        UNISWAP_ROUTER(overrides?: CallOverrides): Promise<BigNumber>;
        USDC(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        burnFrom(account: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
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
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: string, requestedDecrease: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        decreaseAllowances(spender: string, requestedDecrease: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        decreaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        domainSeparatorV4(overrides?: CallOverrides): Promise<BigNumber>;
        eip712Domain(overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        increaseAllowances(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        increaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isBucketMinted(bucketId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        mint(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintToCarbonCreditAuction(bucketId: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nextCommitNonce(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        setAllowances(spender: string, transferAllowance: BigNumberish, committingAllowance: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalImpactPowerEarned(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        CARBON_CREDIT_AUCTION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        COMMIT_PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GCA_AND_MINER_POOL_CONTRACT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GLOW(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GOVERNANCE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        IMPACT_CATALYST(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNISWAP_ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        USDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        burnFrom(account: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
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
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: string, requestedDecrease: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        decreaseAllowances(spender: string, requestedDecrease: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        decreaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        domainSeparatorV4(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        eip712Domain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        increaseAllowances(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        increaseCommitAllowance(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isBucketMinted(bucketId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintToCarbonCreditAuction(bucketId: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextCommitNonce(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAllowances(spender: string, transferAllowance: BigNumberish, committingAllowance: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalImpactPowerEarned(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
