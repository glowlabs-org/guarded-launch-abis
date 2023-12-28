import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export type HelperStruct = {
    lastRewardTimestamp: BigNumberish;
    shares: BigNumberish;
    isGCA: boolean;
};
export type HelperStructOutput = [BigNumber, BigNumber, boolean] & {
    lastRewardTimestamp: BigNumber;
    shares: BigNumber;
    isGCA: boolean;
};
export type CompensationIStruct = {
    shares: BigNumberish;
    agent: string;
};
export type CompensationIStructOutput = [BigNumber, string] & {
    shares: BigNumber;
    agent: string;
};
export interface GCAPayoutAlgo2Interface extends utils.Interface {
    functions: {
        "addGCA(address)": FunctionFragment;
        "agents(uint256)": FunctionFragment;
        "balance(address)": FunctionFragment;
        "claimRewards()": FunctionFragment;
        "editSeats(address[],address[])": FunctionFragment;
        "helpers(address)": FunctionFragment;
        "nextReward(address)": FunctionFragment;
        "nextRewardMockTimestamp(uint256,address)": FunctionFragment;
        "proposedCompensationPlans(address,uint256)": FunctionFragment;
        "removeGCA(address)": FunctionFragment;
        "rewardsPerSecondForAll()": FunctionFragment;
        "submitCompensationPlan((uint80,address)[])": FunctionFragment;
        "totalShares()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addGCA" | "agents" | "balance" | "claimRewards" | "editSeats" | "helpers" | "nextReward" | "nextRewardMockTimestamp" | "proposedCompensationPlans" | "removeGCA" | "rewardsPerSecondForAll" | "submitCompensationPlan" | "totalShares"): FunctionFragment;
    encodeFunctionData(functionFragment: "addGCA", values: [string]): string;
    encodeFunctionData(functionFragment: "agents", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "balance", values: [string]): string;
    encodeFunctionData(functionFragment: "claimRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "editSeats", values: [string[], string[]]): string;
    encodeFunctionData(functionFragment: "helpers", values: [string]): string;
    encodeFunctionData(functionFragment: "nextReward", values: [string]): string;
    encodeFunctionData(functionFragment: "nextRewardMockTimestamp", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "proposedCompensationPlans", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeGCA", values: [string]): string;
    encodeFunctionData(functionFragment: "rewardsPerSecondForAll", values?: undefined): string;
    encodeFunctionData(functionFragment: "submitCompensationPlan", values: [CompensationIStruct[]]): string;
    encodeFunctionData(functionFragment: "totalShares", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addGCA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "agents", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "editSeats", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "helpers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextRewardMockTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposedCompensationPlans", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeGCA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsPerSecondForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitCompensationPlan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalShares", data: BytesLike): Result;
    events: {};
}
export interface GCAPayoutAlgo2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GCAPayoutAlgo2Interface;
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
        addGCA(gca: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        agents(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        balance(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimRewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        editSeats(oldAccounts: string[], newAccounts: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        helpers(gca: string, overrides?: CallOverrides): Promise<[HelperStructOutput]>;
        nextReward(gca: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        nextRewardMockTimestamp(mockTimestamp: BigNumberish, gca: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        proposedCompensationPlans(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, string] & {
            shares: BigNumber;
            agent: string;
        }>;
        removeGCA(gca: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        rewardsPerSecondForAll(overrides?: CallOverrides): Promise<[BigNumber]>;
        submitCompensationPlan(compensationPlan: CompensationIStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        totalShares(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    addGCA(gca: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    agents(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    balance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    claimRewards(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    editSeats(oldAccounts: string[], newAccounts: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    helpers(gca: string, overrides?: CallOverrides): Promise<HelperStructOutput>;
    nextReward(gca: string, overrides?: CallOverrides): Promise<BigNumber>;
    nextRewardMockTimestamp(mockTimestamp: BigNumberish, gca: string, overrides?: CallOverrides): Promise<BigNumber>;
    proposedCompensationPlans(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, string] & {
        shares: BigNumber;
        agent: string;
    }>;
    removeGCA(gca: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    rewardsPerSecondForAll(overrides?: CallOverrides): Promise<BigNumber>;
    submitCompensationPlan(compensationPlan: CompensationIStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    totalShares(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        addGCA(gca: string, overrides?: CallOverrides): Promise<void>;
        agents(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        balance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimRewards(overrides?: CallOverrides): Promise<void>;
        editSeats(oldAccounts: string[], newAccounts: string[], overrides?: CallOverrides): Promise<void>;
        helpers(gca: string, overrides?: CallOverrides): Promise<HelperStructOutput>;
        nextReward(gca: string, overrides?: CallOverrides): Promise<BigNumber>;
        nextRewardMockTimestamp(mockTimestamp: BigNumberish, gca: string, overrides?: CallOverrides): Promise<BigNumber>;
        proposedCompensationPlans(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, string] & {
            shares: BigNumber;
            agent: string;
        }>;
        removeGCA(gca: string, overrides?: CallOverrides): Promise<void>;
        rewardsPerSecondForAll(overrides?: CallOverrides): Promise<BigNumber>;
        submitCompensationPlan(compensationPlan: CompensationIStruct[], overrides?: CallOverrides): Promise<void>;
        totalShares(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        addGCA(gca: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        agents(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimRewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        editSeats(oldAccounts: string[], newAccounts: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        helpers(gca: string, overrides?: CallOverrides): Promise<BigNumber>;
        nextReward(gca: string, overrides?: CallOverrides): Promise<BigNumber>;
        nextRewardMockTimestamp(mockTimestamp: BigNumberish, gca: string, overrides?: CallOverrides): Promise<BigNumber>;
        proposedCompensationPlans(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        removeGCA(gca: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        rewardsPerSecondForAll(overrides?: CallOverrides): Promise<BigNumber>;
        submitCompensationPlan(compensationPlan: CompensationIStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        totalShares(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addGCA(gca: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        agents(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balance(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimRewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        editSeats(oldAccounts: string[], newAccounts: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        helpers(gca: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextReward(gca: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextRewardMockTimestamp(mockTimestamp: BigNumberish, gca: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposedCompensationPlans(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeGCA(gca: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        rewardsPerSecondForAll(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        submitCompensationPlan(compensationPlan: CompensationIStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
