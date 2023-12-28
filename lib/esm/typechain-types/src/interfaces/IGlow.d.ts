import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace IGlow {
    type UnstakedPositionStruct = {
        amount: BigNumberish;
        cooldownEnd: BigNumberish;
    };
    type UnstakedPositionStructOutput = [BigNumber, BigNumber] & {
        amount: BigNumber;
        cooldownEnd: BigNumber;
    };
}
export interface IGlowInterface extends utils.Interface {
    functions: {
        "GENESIS_TIMESTAMP()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "claimGLWFromGCAAndMinerPool()": FunctionFragment;
        "claimGLWFromGrantsTreasury()": FunctionFragment;
        "claimGLWFromVetoCouncil()": FunctionFragment;
        "claimUnstakedTokens(uint256)": FunctionFragment;
        "gcaInflationData()": FunctionFragment;
        "grantsTreasuryInflationData()": FunctionFragment;
        "numStaked(address)": FunctionFragment;
        "stake(uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "unstake(uint256)": FunctionFragment;
        "unstakedPositionsOf(address,uint256,uint256)": FunctionFragment;
        "unstakedPositionsOf(address)": FunctionFragment;
        "vetoCouncilInflationData()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "GENESIS_TIMESTAMP" | "allowance" | "approve" | "balanceOf" | "claimGLWFromGCAAndMinerPool" | "claimGLWFromGrantsTreasury" | "claimGLWFromVetoCouncil" | "claimUnstakedTokens" | "gcaInflationData" | "grantsTreasuryInflationData" | "numStaked" | "stake" | "totalSupply" | "transfer" | "transferFrom" | "unstake" | "unstakedPositionsOf(address,uint256,uint256)" | "unstakedPositionsOf(address)" | "vetoCouncilInflationData"): FunctionFragment;
    encodeFunctionData(functionFragment: "GENESIS_TIMESTAMP", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "claimGLWFromGCAAndMinerPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimGLWFromGrantsTreasury", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimGLWFromVetoCouncil", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimUnstakedTokens", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "gcaInflationData", values?: undefined): string;
    encodeFunctionData(functionFragment: "grantsTreasuryInflationData", values?: undefined): string;
    encodeFunctionData(functionFragment: "numStaked", values: [string]): string;
    encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "unstake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "unstakedPositionsOf(address,uint256,uint256)", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "unstakedPositionsOf(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "vetoCouncilInflationData", values?: undefined): string;
    decodeFunctionResult(functionFragment: "GENESIS_TIMESTAMP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimGLWFromGCAAndMinerPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimGLWFromGrantsTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimGLWFromVetoCouncil", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimUnstakedTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gcaInflationData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantsTreasuryInflationData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numStaked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstakedPositionsOf(address,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstakedPositionsOf(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vetoCouncilInflationData", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ClaimUnstakedGLW(address,uint256)": EventFragment;
        "Stake(address,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Unstake(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimUnstakedGLW"): EventFragment;
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
export interface IGlow extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGlowInterface;
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
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
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
        gcaInflationData(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lastClaimTimestamp: BigNumber;
            totalAlreadyClaimed: BigNumber;
            totalToClaim: BigNumber;
        }>;
        grantsTreasuryInflationData(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lastClaimTimestamp: BigNumber;
            totalAlreadyClaimed: BigNumber;
            totalToClaim: BigNumber;
        }>;
        numStaked(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        stake(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
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
            lastClaimTimestamp: BigNumber;
            totalAlreadyClaimed: BigNumber;
            totalToClaim: BigNumber;
        }>;
    };
    GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
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
    gcaInflationData(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        lastClaimTimestamp: BigNumber;
        totalAlreadyClaimed: BigNumber;
        totalToClaim: BigNumber;
    }>;
    grantsTreasuryInflationData(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        lastClaimTimestamp: BigNumber;
        totalAlreadyClaimed: BigNumber;
        totalToClaim: BigNumber;
    }>;
    numStaked(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    stake(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
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
        lastClaimTimestamp: BigNumber;
        totalAlreadyClaimed: BigNumber;
        totalToClaim: BigNumber;
    }>;
    callStatic: {
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimGLWFromGCAAndMinerPool(overrides?: CallOverrides): Promise<BigNumber>;
        claimGLWFromGrantsTreasury(overrides?: CallOverrides): Promise<BigNumber>;
        claimGLWFromVetoCouncil(overrides?: CallOverrides): Promise<BigNumber>;
        claimUnstakedTokens(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        gcaInflationData(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lastClaimTimestamp: BigNumber;
            totalAlreadyClaimed: BigNumber;
            totalToClaim: BigNumber;
        }>;
        grantsTreasuryInflationData(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lastClaimTimestamp: BigNumber;
            totalAlreadyClaimed: BigNumber;
            totalToClaim: BigNumber;
        }>;
        numStaked(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        stake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        unstake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "unstakedPositionsOf(address,uint256,uint256)"(account: string, start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<IGlow.UnstakedPositionStructOutput[]>;
        "unstakedPositionsOf(address)"(account: string, overrides?: CallOverrides): Promise<IGlow.UnstakedPositionStructOutput[]>;
        vetoCouncilInflationData(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lastClaimTimestamp: BigNumber;
            totalAlreadyClaimed: BigNumber;
            totalToClaim: BigNumber;
        }>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "ClaimUnstakedGLW(address,uint256)"(user?: string | null, amount?: null): ClaimUnstakedGLWEventFilter;
        ClaimUnstakedGLW(user?: string | null, amount?: null): ClaimUnstakedGLWEventFilter;
        "Stake(address,uint256)"(user?: string | null, amount?: null): StakeEventFilter;
        Stake(user?: string | null, amount?: null): StakeEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        "Unstake(address,uint256)"(user?: string | null, amount?: null): UnstakeEventFilter;
        Unstake(user?: string | null, amount?: null): UnstakeEventFilter;
    };
    estimateGas: {
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
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
        gcaInflationData(overrides?: CallOverrides): Promise<BigNumber>;
        grantsTreasuryInflationData(overrides?: CallOverrides): Promise<BigNumber>;
        numStaked(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        stake(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unstake(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "unstakedPositionsOf(address,uint256,uint256)"(account: string, start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "unstakedPositionsOf(address)"(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        vetoCouncilInflationData(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        gcaInflationData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantsTreasuryInflationData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        numStaked(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stake(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unstake(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "unstakedPositionsOf(address,uint256,uint256)"(account: string, start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "unstakedPositionsOf(address)"(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vetoCouncilInflationData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
