import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export type GcaRewardTrackerStruct = {
    lastUpdateTimestamp: BigNumberish;
    slasheableBalance: BigNumberish;
};
export type GcaRewardTrackerStructOutput = [BigNumber, BigNumber] & {
    lastUpdateTimestamp: BigNumber;
    slasheableBalance: BigNumber;
};
export interface MatrixPayoutInterface extends utils.Interface {
    functions: {
        "castUintToAddress(uint160)": FunctionFragment;
        "claimForAll()": FunctionFragment;
        "findGCATotalSharesByAddress(address)": FunctionFragment;
        "findIndexOfGCA(address,address[5])": FunctionFragment;
        "findTotalSharesOfGCA(uint256)": FunctionFragment;
        "getActiveGcaRewardTrackers()": FunctionFragment;
        "getAllRealizedPayouts()": FunctionFragment;
        "getPayoutMatrix()": FunctionFragment;
        "realizedPayout(address)": FunctionFragment;
        "removeGCAZero()": FunctionFragment;
        "sumOfAgentInPayoutMatrix(uint256)": FunctionFragment;
        "testSetToEqual()": FunctionFragment;
        "totalShares()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "castUintToAddress" | "claimForAll" | "findGCATotalSharesByAddress" | "findIndexOfGCA" | "findTotalSharesOfGCA" | "getActiveGcaRewardTrackers" | "getAllRealizedPayouts" | "getPayoutMatrix" | "realizedPayout" | "removeGCAZero" | "sumOfAgentInPayoutMatrix" | "testSetToEqual" | "totalShares"): FunctionFragment;
    encodeFunctionData(functionFragment: "castUintToAddress", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimForAll", values?: undefined): string;
    encodeFunctionData(functionFragment: "findGCATotalSharesByAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "findIndexOfGCA", values: [string, [string, string, string, string, string]]): string;
    encodeFunctionData(functionFragment: "findTotalSharesOfGCA", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getActiveGcaRewardTrackers", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllRealizedPayouts", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPayoutMatrix", values?: undefined): string;
    encodeFunctionData(functionFragment: "realizedPayout", values: [string]): string;
    encodeFunctionData(functionFragment: "removeGCAZero", values?: undefined): string;
    encodeFunctionData(functionFragment: "sumOfAgentInPayoutMatrix", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "testSetToEqual", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalShares", values?: undefined): string;
    decodeFunctionResult(functionFragment: "castUintToAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "findGCATotalSharesByAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "findIndexOfGCA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "findTotalSharesOfGCA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getActiveGcaRewardTrackers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllRealizedPayouts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPayoutMatrix", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "realizedPayout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeGCAZero", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sumOfAgentInPayoutMatrix", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testSetToEqual", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalShares", data: BytesLike): Result;
    events: {};
}
export interface MatrixPayout extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MatrixPayoutInterface;
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
        castUintToAddress(_uint: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        claimForAll(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        findGCATotalSharesByAddress(_gca: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        findIndexOfGCA(_gca: string, _gcas: [string, string, string, string, string], overrides?: CallOverrides): Promise<[BigNumber]>;
        findTotalSharesOfGCA(gcaNumber: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getActiveGcaRewardTrackers(overrides?: CallOverrides): Promise<[
            GcaRewardTrackerStructOutput[]
        ] & {
            trackers: GcaRewardTrackerStructOutput[];
        }>;
        getAllRealizedPayouts(overrides?: CallOverrides): Promise<[
            [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        ] & {
            balances: [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber];
        }>;
        getPayoutMatrix(overrides?: CallOverrides): Promise<[
            [
                [
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber
                ],
                [
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber
                ],
                [
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber
                ],
                [
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber
                ],
                [
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber
                ]
            ]
        ] & {
            matrix: [
                [
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber
                ],
                [
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber
                ],
                [
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber
                ],
                [
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber
                ],
                [
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber
                ]
            ];
        }>;
        realizedPayout(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        removeGCAZero(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sumOfAgentInPayoutMatrix(gcaNumber: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        testSetToEqual(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        totalShares(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    castUintToAddress(_uint: BigNumberish, overrides?: CallOverrides): Promise<string>;
    claimForAll(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    findGCATotalSharesByAddress(_gca: string, overrides?: CallOverrides): Promise<BigNumber>;
    findIndexOfGCA(_gca: string, _gcas: [string, string, string, string, string], overrides?: CallOverrides): Promise<BigNumber>;
    findTotalSharesOfGCA(gcaNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getActiveGcaRewardTrackers(overrides?: CallOverrides): Promise<GcaRewardTrackerStructOutput[]>;
    getAllRealizedPayouts(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
    getPayoutMatrix(overrides?: CallOverrides): Promise<[
        [
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ],
        [
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ],
        [
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ],
        [
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ],
        [
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ]
    ]>;
    realizedPayout(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    removeGCAZero(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sumOfAgentInPayoutMatrix(gcaNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    testSetToEqual(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    totalShares(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        castUintToAddress(_uint: BigNumberish, overrides?: CallOverrides): Promise<string>;
        claimForAll(overrides?: CallOverrides): Promise<void>;
        findGCATotalSharesByAddress(_gca: string, overrides?: CallOverrides): Promise<BigNumber>;
        findIndexOfGCA(_gca: string, _gcas: [string, string, string, string, string], overrides?: CallOverrides): Promise<BigNumber>;
        findTotalSharesOfGCA(gcaNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getActiveGcaRewardTrackers(overrides?: CallOverrides): Promise<GcaRewardTrackerStructOutput[]>;
        getAllRealizedPayouts(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
        getPayoutMatrix(overrides?: CallOverrides): Promise<[
            [
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber
            ],
            [
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber
            ],
            [
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber
            ],
            [
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber
            ],
            [
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber
            ]
        ]>;
        realizedPayout(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        removeGCAZero(overrides?: CallOverrides): Promise<void>;
        sumOfAgentInPayoutMatrix(gcaNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        testSetToEqual(overrides?: CallOverrides): Promise<void>;
        totalShares(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        castUintToAddress(_uint: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        claimForAll(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        findGCATotalSharesByAddress(_gca: string, overrides?: CallOverrides): Promise<BigNumber>;
        findIndexOfGCA(_gca: string, _gcas: [string, string, string, string, string], overrides?: CallOverrides): Promise<BigNumber>;
        findTotalSharesOfGCA(gcaNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getActiveGcaRewardTrackers(overrides?: CallOverrides): Promise<BigNumber>;
        getAllRealizedPayouts(overrides?: CallOverrides): Promise<BigNumber>;
        getPayoutMatrix(overrides?: CallOverrides): Promise<BigNumber>;
        realizedPayout(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        removeGCAZero(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sumOfAgentInPayoutMatrix(gcaNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        testSetToEqual(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        totalShares(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        castUintToAddress(_uint: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimForAll(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        findGCATotalSharesByAddress(_gca: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        findIndexOfGCA(_gca: string, _gcas: [string, string, string, string, string], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        findTotalSharesOfGCA(gcaNumber: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getActiveGcaRewardTrackers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllRealizedPayouts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPayoutMatrix(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        realizedPayout(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeGCAZero(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sumOfAgentInPayoutMatrix(gcaNumber: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        testSetToEqual(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
