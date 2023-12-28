import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface CarbonCreditDutchAuctionInterface extends utils.Interface {
    functions: {
        "GCC()": FunctionFragment;
        "GLOW()": FunctionFragment;
        "SALE_UNIT()": FunctionFragment;
        "buyGCC(uint256,uint256)": FunctionFragment;
        "getPricePerUnit()": FunctionFragment;
        "pseudoPrice24HoursAgo()": FunctionFragment;
        "receiveGCC(uint256)": FunctionFragment;
        "timestamps()": FunctionFragment;
        "totalAmountReceived()": FunctionFragment;
        "totalSaleUnits()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "totalUnitsSold()": FunctionFragment;
        "unitsForSale()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "GCC" | "GLOW" | "SALE_UNIT" | "buyGCC" | "getPricePerUnit" | "pseudoPrice24HoursAgo" | "receiveGCC" | "timestamps" | "totalAmountReceived" | "totalSaleUnits" | "totalSupply" | "totalUnitsSold" | "unitsForSale"): FunctionFragment;
    encodeFunctionData(functionFragment: "GCC", values?: undefined): string;
    encodeFunctionData(functionFragment: "GLOW", values?: undefined): string;
    encodeFunctionData(functionFragment: "SALE_UNIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "buyGCC", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPricePerUnit", values?: undefined): string;
    encodeFunctionData(functionFragment: "pseudoPrice24HoursAgo", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveGCC", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "timestamps", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalAmountReceived", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSaleUnits", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalUnitsSold", values?: undefined): string;
    encodeFunctionData(functionFragment: "unitsForSale", values?: undefined): string;
    decodeFunctionResult(functionFragment: "GCC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GLOW", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SALE_UNIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buyGCC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPricePerUnit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pseudoPrice24HoursAgo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveGCC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timestamps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalAmountReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSaleUnits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalUnitsSold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unitsForSale", data: BytesLike): Result;
    events: {};
}
export interface CarbonCreditDutchAuction extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CarbonCreditDutchAuctionInterface;
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
        GCC(overrides?: CallOverrides): Promise<[string]>;
        GLOW(overrides?: CallOverrides): Promise<[string]>;
        SALE_UNIT(overrides?: CallOverrides): Promise<[BigNumber]>;
        buyGCC(unitsToBuy: BigNumberish, maxPricePerUnit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getPricePerUnit(overrides?: CallOverrides): Promise<[BigNumber]>;
        pseudoPrice24HoursAgo(overrides?: CallOverrides): Promise<[BigNumber]>;
        receiveGCC(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        timestamps(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lastSaleTimestamp: BigNumber;
            lastReceivedTimestamp: BigNumber;
            lastPriceChangeTimestamp: BigNumber;
            firstReceivedTimestamp: BigNumber;
        }>;
        totalAmountReceived(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSaleUnits(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalUnitsSold(overrides?: CallOverrides): Promise<[BigNumber]>;
        unitsForSale(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    GCC(overrides?: CallOverrides): Promise<string>;
    GLOW(overrides?: CallOverrides): Promise<string>;
    SALE_UNIT(overrides?: CallOverrides): Promise<BigNumber>;
    buyGCC(unitsToBuy: BigNumberish, maxPricePerUnit: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getPricePerUnit(overrides?: CallOverrides): Promise<BigNumber>;
    pseudoPrice24HoursAgo(overrides?: CallOverrides): Promise<BigNumber>;
    receiveGCC(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    timestamps(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        lastSaleTimestamp: BigNumber;
        lastReceivedTimestamp: BigNumber;
        lastPriceChangeTimestamp: BigNumber;
        firstReceivedTimestamp: BigNumber;
    }>;
    totalAmountReceived(overrides?: CallOverrides): Promise<BigNumber>;
    totalSaleUnits(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    totalUnitsSold(overrides?: CallOverrides): Promise<BigNumber>;
    unitsForSale(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        GCC(overrides?: CallOverrides): Promise<string>;
        GLOW(overrides?: CallOverrides): Promise<string>;
        SALE_UNIT(overrides?: CallOverrides): Promise<BigNumber>;
        buyGCC(unitsToBuy: BigNumberish, maxPricePerUnit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getPricePerUnit(overrides?: CallOverrides): Promise<BigNumber>;
        pseudoPrice24HoursAgo(overrides?: CallOverrides): Promise<BigNumber>;
        receiveGCC(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        timestamps(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lastSaleTimestamp: BigNumber;
            lastReceivedTimestamp: BigNumber;
            lastPriceChangeTimestamp: BigNumber;
            firstReceivedTimestamp: BigNumber;
        }>;
        totalAmountReceived(overrides?: CallOverrides): Promise<BigNumber>;
        totalSaleUnits(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalUnitsSold(overrides?: CallOverrides): Promise<BigNumber>;
        unitsForSale(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        GCC(overrides?: CallOverrides): Promise<BigNumber>;
        GLOW(overrides?: CallOverrides): Promise<BigNumber>;
        SALE_UNIT(overrides?: CallOverrides): Promise<BigNumber>;
        buyGCC(unitsToBuy: BigNumberish, maxPricePerUnit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getPricePerUnit(overrides?: CallOverrides): Promise<BigNumber>;
        pseudoPrice24HoursAgo(overrides?: CallOverrides): Promise<BigNumber>;
        receiveGCC(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        timestamps(overrides?: CallOverrides): Promise<BigNumber>;
        totalAmountReceived(overrides?: CallOverrides): Promise<BigNumber>;
        totalSaleUnits(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalUnitsSold(overrides?: CallOverrides): Promise<BigNumber>;
        unitsForSale(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        GCC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GLOW(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SALE_UNIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buyGCC(unitsToBuy: BigNumberish, maxPricePerUnit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getPricePerUnit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pseudoPrice24HoursAgo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveGCC(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        timestamps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalAmountReceived(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSaleUnits(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalUnitsSold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unitsForSale(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
