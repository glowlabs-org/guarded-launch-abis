import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export declare namespace IGlow {
    type PointersStruct = {
        tail: BigNumberish;
        head: BigNumberish;
    };
    type PointersStructOutput = [BigNumber, BigNumber] & {
        tail: BigNumber;
        head: BigNumber;
    };
    type UnstakedPositionStruct = {
        amount: BigNumberish;
        cooldownEnd: BigNumberish;
    };
    type UnstakedPositionStructOutput = [BigNumber, BigNumber] & {
        amount: BigNumber;
        cooldownEnd: BigNumber;
    };
}
export interface GoerliGlowGuardedLaunchInterface extends utils.Interface {
    functions: {
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "EARLY_LIQUIDITY_ADDRESS()": FunctionFragment;
        "EMERGENCY_COOLDOWN_PERIOD()": FunctionFragment;
        "GCA_AND_MINER_POOL_ADDRESS()": FunctionFragment;
        "GCA_AND_MINER_POOL_INFLATION_PER_SECOND()": FunctionFragment;
        "GENESIS_TIMESTAMP()": FunctionFragment;
        "GRANTS_TREASURY_ADDRESS()": FunctionFragment;
        "GRANTS_TREASURY_INFLATION_PER_SECOND()": FunctionFragment;
        "MAX_UNSTAKES_BEFORE_EMERGENCY_COOLDOWN()": FunctionFragment;
        "USDG()": FunctionFragment;
        "VETO_COUNCIL_ADDRESS()": FunctionFragment;
        "VETO_COUNCIL_INFLATION_PER_SECOND()": FunctionFragment;
        "accountUnstakedPositionPointers(address)": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "allowlistedContracts(address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "claimGLWFromGCAAndMinerPool()": FunctionFragment;
        "claimGLWFromGrantsTreasury()": FunctionFragment;
        "claimGLWFromVetoCouncil()": FunctionFragment;
        "claimUnstakedTokens(uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "eip712Domain()": FunctionFragment;
        "emergencyLastUnstakeTimestamp(address)": FunctionFragment;
        "freezeContract()": FunctionFragment;
        "gcaAndMinerPoolLastClaimedTimestamp()": FunctionFragment;
        "gcaInflationData()": FunctionFragment;
        "glowUnlocker()": FunctionFragment;
        "grantsTreasuryInflationData()": FunctionFragment;
        "grantsTreasuryLastClaimedTimestamp()": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "numStaked(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "permanentlyFreezeTransfers()": FunctionFragment;
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "stake(uint256)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unstake(uint256)": FunctionFragment;
        "unstakedPositionsOf(address,uint256,uint256)": FunctionFragment;
        "unstakedPositionsOf(address)": FunctionFragment;
        "vetoCouncilInflationData()": FunctionFragment;
        "vetoCouncilLastClaimedTimestamp()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DOMAIN_SEPARATOR" | "EARLY_LIQUIDITY_ADDRESS" | "EMERGENCY_COOLDOWN_PERIOD" | "GCA_AND_MINER_POOL_ADDRESS" | "GCA_AND_MINER_POOL_INFLATION_PER_SECOND" | "GENESIS_TIMESTAMP" | "GRANTS_TREASURY_ADDRESS" | "GRANTS_TREASURY_INFLATION_PER_SECOND" | "MAX_UNSTAKES_BEFORE_EMERGENCY_COOLDOWN" | "USDG" | "VETO_COUNCIL_ADDRESS" | "VETO_COUNCIL_INFLATION_PER_SECOND" | "accountUnstakedPositionPointers" | "allowance" | "allowlistedContracts" | "approve" | "balanceOf" | "claimGLWFromGCAAndMinerPool" | "claimGLWFromGrantsTreasury" | "claimGLWFromVetoCouncil" | "claimUnstakedTokens" | "decimals" | "decreaseAllowance" | "eip712Domain" | "emergencyLastUnstakeTimestamp" | "freezeContract" | "gcaAndMinerPoolLastClaimedTimestamp" | "gcaInflationData" | "glowUnlocker" | "grantsTreasuryInflationData" | "grantsTreasuryLastClaimedTimestamp" | "increaseAllowance" | "mint" | "name" | "nonces" | "numStaked" | "owner" | "permanentlyFreezeTransfers" | "permit" | "renounceOwnership" | "stake" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "transferOwnership" | "unstake" | "unstakedPositionsOf(address,uint256,uint256)" | "unstakedPositionsOf(address)" | "vetoCouncilInflationData" | "vetoCouncilLastClaimedTimestamp"): FunctionFragment;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "EARLY_LIQUIDITY_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "EMERGENCY_COOLDOWN_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "GCA_AND_MINER_POOL_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "GCA_AND_MINER_POOL_INFLATION_PER_SECOND", values?: undefined): string;
    encodeFunctionData(functionFragment: "GENESIS_TIMESTAMP", values?: undefined): string;
    encodeFunctionData(functionFragment: "GRANTS_TREASURY_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "GRANTS_TREASURY_INFLATION_PER_SECOND", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_UNSTAKES_BEFORE_EMERGENCY_COOLDOWN", values?: undefined): string;
    encodeFunctionData(functionFragment: "USDG", values?: undefined): string;
    encodeFunctionData(functionFragment: "VETO_COUNCIL_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "VETO_COUNCIL_INFLATION_PER_SECOND", values?: undefined): string;
    encodeFunctionData(functionFragment: "accountUnstakedPositionPointers", values: [string]): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "allowlistedContracts", values: [string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "claimGLWFromGCAAndMinerPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimGLWFromGrantsTreasury", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimGLWFromVetoCouncil", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimUnstakedTokens", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
    encodeFunctionData(functionFragment: "emergencyLastUnstakeTimestamp", values: [string]): string;
    encodeFunctionData(functionFragment: "freezeContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "gcaAndMinerPoolLastClaimedTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "gcaInflationData", values?: undefined): string;
    encodeFunctionData(functionFragment: "glowUnlocker", values?: undefined): string;
    encodeFunctionData(functionFragment: "grantsTreasuryInflationData", values?: undefined): string;
    encodeFunctionData(functionFragment: "grantsTreasuryLastClaimedTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [string]): string;
    encodeFunctionData(functionFragment: "numStaked", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "permanentlyFreezeTransfers", values?: undefined): string;
    encodeFunctionData(functionFragment: "permit", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "unstake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "unstakedPositionsOf(address,uint256,uint256)", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "unstakedPositionsOf(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "vetoCouncilInflationData", values?: undefined): string;
    encodeFunctionData(functionFragment: "vetoCouncilLastClaimedTimestamp", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "EARLY_LIQUIDITY_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "EMERGENCY_COOLDOWN_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GCA_AND_MINER_POOL_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GCA_AND_MINER_POOL_INFLATION_PER_SECOND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GENESIS_TIMESTAMP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GRANTS_TREASURY_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GRANTS_TREASURY_INFLATION_PER_SECOND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_UNSTAKES_BEFORE_EMERGENCY_COOLDOWN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "USDG", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VETO_COUNCIL_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VETO_COUNCIL_INFLATION_PER_SECOND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accountUnstakedPositionPointers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowlistedContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimGLWFromGCAAndMinerPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimGLWFromGrantsTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimGLWFromVetoCouncil", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimUnstakedTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyLastUnstakeTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "freezeContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gcaAndMinerPoolLastClaimedTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gcaInflationData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "glowUnlocker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantsTreasuryInflationData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantsTreasuryLastClaimedTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numStaked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permanentlyFreezeTransfers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstakedPositionsOf(address,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstakedPositionsOf(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vetoCouncilInflationData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vetoCouncilLastClaimedTimestamp", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ClaimUnstakedGLW(address,uint256)": EventFragment;
        "EIP712DomainChanged()": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "PermanentFreeze()": EventFragment;
        "Stake(address,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Unstake(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimUnstakedGLW"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EIP712DomainChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PermanentFreeze"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Stake"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unstake"): EventFragment;
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
export interface ClaimUnstakedGLWEventObject {
    user: string;
    amount: BigNumber;
}
export type ClaimUnstakedGLWEvent = TypedEvent<[
    string,
    BigNumber
], ClaimUnstakedGLWEventObject>;
export type ClaimUnstakedGLWEventFilter = TypedEventFilter<ClaimUnstakedGLWEvent>;
export interface EIP712DomainChangedEventObject {
}
export type EIP712DomainChangedEvent = TypedEvent<[
], EIP712DomainChangedEventObject>;
export type EIP712DomainChangedEventFilter = TypedEventFilter<EIP712DomainChangedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PermanentFreezeEventObject {
}
export type PermanentFreezeEvent = TypedEvent<[], PermanentFreezeEventObject>;
export type PermanentFreezeEventFilter = TypedEventFilter<PermanentFreezeEvent>;
export interface StakeEventObject {
    user: string;
    amount: BigNumber;
}
export type StakeEvent = TypedEvent<[string, BigNumber], StakeEventObject>;
export type StakeEventFilter = TypedEventFilter<StakeEvent>;
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
export interface UnstakeEventObject {
    user: string;
    amount: BigNumber;
}
export type UnstakeEvent = TypedEvent<[string, BigNumber], UnstakeEventObject>;
export type UnstakeEventFilter = TypedEventFilter<UnstakeEvent>;
export interface GoerliGlowGuardedLaunch extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GoerliGlowGuardedLaunchInterface;
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
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        EARLY_LIQUIDITY_ADDRESS(overrides?: CallOverrides): Promise<[string]>;
        EMERGENCY_COOLDOWN_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;
        GCA_AND_MINER_POOL_ADDRESS(overrides?: CallOverrides): Promise<[string]>;
        GCA_AND_MINER_POOL_INFLATION_PER_SECOND(overrides?: CallOverrides): Promise<[BigNumber]>;
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<[BigNumber]>;
        GRANTS_TREASURY_ADDRESS(overrides?: CallOverrides): Promise<[string]>;
        GRANTS_TREASURY_INFLATION_PER_SECOND(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_UNSTAKES_BEFORE_EMERGENCY_COOLDOWN(overrides?: CallOverrides): Promise<[BigNumber]>;
        USDG(overrides?: CallOverrides): Promise<[string]>;
        VETO_COUNCIL_ADDRESS(overrides?: CallOverrides): Promise<[string]>;
        VETO_COUNCIL_INFLATION_PER_SECOND(overrides?: CallOverrides): Promise<[BigNumber]>;
        accountUnstakedPositionPointers(account: string, overrides?: CallOverrides): Promise<[IGlow.PointersStructOutput]>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        allowlistedContracts(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimGLWFromGCAAndMinerPool(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimGLWFromGrantsTreasury(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimGLWFromVetoCouncil(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimUnstakedTokens(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: string, requestedDecrease: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
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
        emergencyLastUnstakeTimestamp(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        freezeContract(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gcaAndMinerPoolLastClaimedTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        gcaInflationData(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalAlreadyClaimed: BigNumber;
            totalToClaim: BigNumber;
        }>;
        glowUnlocker(overrides?: CallOverrides): Promise<[string]>;
        grantsTreasuryInflationData(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalAlreadyClaimed: BigNumber;
            totalToClaim: BigNumber;
        }>;
        grantsTreasuryLastClaimedTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mint(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        numStaked(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        permanentlyFreezeTransfers(overrides?: CallOverrides): Promise<[boolean]>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stake(stakeAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unstake(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "unstakedPositionsOf(address,uint256,uint256)"(account: string, start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<[IGlow.UnstakedPositionStructOutput[]]>;
        "unstakedPositionsOf(address)"(account: string, overrides?: CallOverrides): Promise<[IGlow.UnstakedPositionStructOutput[]]>;
        vetoCouncilInflationData(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalAlreadyClaimed: BigNumber;
            totalToClaim: BigNumber;
        }>;
        vetoCouncilLastClaimedTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    EARLY_LIQUIDITY_ADDRESS(overrides?: CallOverrides): Promise<string>;
    EMERGENCY_COOLDOWN_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    GCA_AND_MINER_POOL_ADDRESS(overrides?: CallOverrides): Promise<string>;
    GCA_AND_MINER_POOL_INFLATION_PER_SECOND(overrides?: CallOverrides): Promise<BigNumber>;
    GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
    GRANTS_TREASURY_ADDRESS(overrides?: CallOverrides): Promise<string>;
    GRANTS_TREASURY_INFLATION_PER_SECOND(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_UNSTAKES_BEFORE_EMERGENCY_COOLDOWN(overrides?: CallOverrides): Promise<BigNumber>;
    USDG(overrides?: CallOverrides): Promise<string>;
    VETO_COUNCIL_ADDRESS(overrides?: CallOverrides): Promise<string>;
    VETO_COUNCIL_INFLATION_PER_SECOND(overrides?: CallOverrides): Promise<BigNumber>;
    accountUnstakedPositionPointers(account: string, overrides?: CallOverrides): Promise<IGlow.PointersStructOutput>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    allowlistedContracts(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    approve(spender: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    claimGLWFromGCAAndMinerPool(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimGLWFromGrantsTreasury(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimGLWFromVetoCouncil(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimUnstakedTokens(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: string, requestedDecrease: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
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
    emergencyLastUnstakeTimestamp(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    freezeContract(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gcaAndMinerPoolLastClaimedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    gcaInflationData(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        totalAlreadyClaimed: BigNumber;
        totalToClaim: BigNumber;
    }>;
    glowUnlocker(overrides?: CallOverrides): Promise<string>;
    grantsTreasuryInflationData(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        totalAlreadyClaimed: BigNumber;
        totalToClaim: BigNumber;
    }>;
    grantsTreasuryLastClaimedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mint(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    numStaked(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    permanentlyFreezeTransfers(overrides?: CallOverrides): Promise<boolean>;
    permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stake(stakeAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unstake(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "unstakedPositionsOf(address,uint256,uint256)"(account: string, start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<IGlow.UnstakedPositionStructOutput[]>;
    "unstakedPositionsOf(address)"(account: string, overrides?: CallOverrides): Promise<IGlow.UnstakedPositionStructOutput[]>;
    vetoCouncilInflationData(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        totalAlreadyClaimed: BigNumber;
        totalToClaim: BigNumber;
    }>;
    vetoCouncilLastClaimedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        EARLY_LIQUIDITY_ADDRESS(overrides?: CallOverrides): Promise<string>;
        EMERGENCY_COOLDOWN_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        GCA_AND_MINER_POOL_ADDRESS(overrides?: CallOverrides): Promise<string>;
        GCA_AND_MINER_POOL_INFLATION_PER_SECOND(overrides?: CallOverrides): Promise<BigNumber>;
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
        GRANTS_TREASURY_ADDRESS(overrides?: CallOverrides): Promise<string>;
        GRANTS_TREASURY_INFLATION_PER_SECOND(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_UNSTAKES_BEFORE_EMERGENCY_COOLDOWN(overrides?: CallOverrides): Promise<BigNumber>;
        USDG(overrides?: CallOverrides): Promise<string>;
        VETO_COUNCIL_ADDRESS(overrides?: CallOverrides): Promise<string>;
        VETO_COUNCIL_INFLATION_PER_SECOND(overrides?: CallOverrides): Promise<BigNumber>;
        accountUnstakedPositionPointers(account: string, overrides?: CallOverrides): Promise<IGlow.PointersStructOutput>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        allowlistedContracts(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        approve(spender: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimGLWFromGCAAndMinerPool(overrides?: CallOverrides): Promise<BigNumber>;
        claimGLWFromGrantsTreasury(overrides?: CallOverrides): Promise<BigNumber>;
        claimGLWFromVetoCouncil(overrides?: CallOverrides): Promise<BigNumber>;
        claimUnstakedTokens(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: string, requestedDecrease: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
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
        emergencyLastUnstakeTimestamp(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        freezeContract(overrides?: CallOverrides): Promise<void>;
        gcaAndMinerPoolLastClaimedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        gcaInflationData(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalAlreadyClaimed: BigNumber;
            totalToClaim: BigNumber;
        }>;
        glowUnlocker(overrides?: CallOverrides): Promise<string>;
        grantsTreasuryInflationData(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalAlreadyClaimed: BigNumber;
            totalToClaim: BigNumber;
        }>;
        grantsTreasuryLastClaimedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        mint(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        numStaked(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        permanentlyFreezeTransfers(overrides?: CallOverrides): Promise<boolean>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        stake(stakeAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        unstake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "unstakedPositionsOf(address,uint256,uint256)"(account: string, start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<IGlow.UnstakedPositionStructOutput[]>;
        "unstakedPositionsOf(address)"(account: string, overrides?: CallOverrides): Promise<IGlow.UnstakedPositionStructOutput[]>;
        vetoCouncilInflationData(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalAlreadyClaimed: BigNumber;
            totalToClaim: BigNumber;
        }>;
        vetoCouncilLastClaimedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "ClaimUnstakedGLW(address,uint256)"(user?: string | null, amount?: null): ClaimUnstakedGLWEventFilter;
        ClaimUnstakedGLW(user?: string | null, amount?: null): ClaimUnstakedGLWEventFilter;
        "EIP712DomainChanged()"(): EIP712DomainChangedEventFilter;
        EIP712DomainChanged(): EIP712DomainChangedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "PermanentFreeze()"(): PermanentFreezeEventFilter;
        PermanentFreeze(): PermanentFreezeEventFilter;
        "Stake(address,uint256)"(user?: string | null, amount?: null): StakeEventFilter;
        Stake(user?: string | null, amount?: null): StakeEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        "Unstake(address,uint256)"(user?: string | null, amount?: null): UnstakeEventFilter;
        Unstake(user?: string | null, amount?: null): UnstakeEventFilter;
    };
    estimateGas: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        EARLY_LIQUIDITY_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        EMERGENCY_COOLDOWN_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        GCA_AND_MINER_POOL_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        GCA_AND_MINER_POOL_INFLATION_PER_SECOND(overrides?: CallOverrides): Promise<BigNumber>;
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
        GRANTS_TREASURY_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        GRANTS_TREASURY_INFLATION_PER_SECOND(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_UNSTAKES_BEFORE_EMERGENCY_COOLDOWN(overrides?: CallOverrides): Promise<BigNumber>;
        USDG(overrides?: CallOverrides): Promise<BigNumber>;
        VETO_COUNCIL_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        VETO_COUNCIL_INFLATION_PER_SECOND(overrides?: CallOverrides): Promise<BigNumber>;
        accountUnstakedPositionPointers(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        allowlistedContracts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimGLWFromGCAAndMinerPool(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimGLWFromGrantsTreasury(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimGLWFromVetoCouncil(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimUnstakedTokens(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: string, requestedDecrease: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        eip712Domain(overrides?: CallOverrides): Promise<BigNumber>;
        emergencyLastUnstakeTimestamp(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        freezeContract(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gcaAndMinerPoolLastClaimedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        gcaInflationData(overrides?: CallOverrides): Promise<BigNumber>;
        glowUnlocker(overrides?: CallOverrides): Promise<BigNumber>;
        grantsTreasuryInflationData(overrides?: CallOverrides): Promise<BigNumber>;
        grantsTreasuryLastClaimedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mint(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        numStaked(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        permanentlyFreezeTransfers(overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stake(stakeAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unstake(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "unstakedPositionsOf(address,uint256,uint256)"(account: string, start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "unstakedPositionsOf(address)"(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        vetoCouncilInflationData(overrides?: CallOverrides): Promise<BigNumber>;
        vetoCouncilLastClaimedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        EARLY_LIQUIDITY_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        EMERGENCY_COOLDOWN_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GCA_AND_MINER_POOL_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GCA_AND_MINER_POOL_INFLATION_PER_SECOND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GRANTS_TREASURY_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GRANTS_TREASURY_INFLATION_PER_SECOND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_UNSTAKES_BEFORE_EMERGENCY_COOLDOWN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        USDG(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VETO_COUNCIL_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VETO_COUNCIL_INFLATION_PER_SECOND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accountUnstakedPositionPointers(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowlistedContracts(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimGLWFromGCAAndMinerPool(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimGLWFromGrantsTreasury(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimGLWFromVetoCouncil(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimUnstakedTokens(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: string, requestedDecrease: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        eip712Domain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        emergencyLastUnstakeTimestamp(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        freezeContract(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gcaAndMinerPoolLastClaimedTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gcaInflationData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        glowUnlocker(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantsTreasuryInflationData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantsTreasuryLastClaimedTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mint(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        numStaked(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permanentlyFreezeTransfers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stake(stakeAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unstake(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "unstakedPositionsOf(address,uint256,uint256)"(account: string, start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "unstakedPositionsOf(address)"(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vetoCouncilInflationData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vetoCouncilLastClaimedTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
