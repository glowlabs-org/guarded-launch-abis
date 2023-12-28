import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface ICarbonCreditAuctionInterface extends utils.Interface {
    functions: {
        "buyGCC(uint256,uint256)": FunctionFragment;
        "getPricePerUnit()": FunctionFragment;
        "receiveGCC(uint256)": FunctionFragment;
        "totalSaleUnits()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "unitsForSale()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "buyGCC" | "getPricePerUnit" | "receiveGCC" | "totalSaleUnits" | "totalSupply" | "unitsForSale"): FunctionFragment;
    encodeFunctionData(functionFragment: "buyGCC", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPricePerUnit", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveGCC", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalSaleUnits", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "unitsForSale", values?: undefined): string;
    decodeFunctionResult(functionFragment: "buyGCC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPricePerUnit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveGCC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSaleUnits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unitsForSale", data: BytesLike): Result;
    events: {};
}
export interface ICarbonCreditAuction extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICarbonCreditAuctionInterface;
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
        buyGCC(unitsToBuy: BigNumberish, maxPricePerUnit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getPricePerUnit(overrides?: CallOverrides): Promise<[BigNumber]>;
        receiveGCC(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        totalSaleUnits(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        unitsForSale(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    buyGCC(unitsToBuy: BigNumberish, maxPricePerUnit: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getPricePerUnit(overrides?: CallOverrides): Promise<BigNumber>;
    receiveGCC(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    totalSaleUnits(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    unitsForSale(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        buyGCC(unitsToBuy: BigNumberish, maxPricePerUnit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getPricePerUnit(overrides?: CallOverrides): Promise<BigNumber>;
        receiveGCC(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        totalSaleUnits(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        unitsForSale(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        buyGCC(unitsToBuy: BigNumberish, maxPricePerUnit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getPricePerUnit(overrides?: CallOverrides): Promise<BigNumber>;
        receiveGCC(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        totalSaleUnits(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        unitsForSale(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        buyGCC(unitsToBuy: BigNumberish, maxPricePerUnit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getPricePerUnit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveGCC(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        totalSaleUnits(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unitsForSale(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
