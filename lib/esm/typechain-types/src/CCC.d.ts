import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export declare namespace CCC {
    type BidStruct = {
        bidder: string;
        maxPrice: BigNumberish;
        prev: BigNumberish;
        next: BigNumberish;
        bidAmount: BigNumberish;
    };
    type BidStructOutput = [
        string,
        BigNumber,
        number,
        number,
        BigNumber
    ] & {
        bidder: string;
        maxPrice: BigNumber;
        prev: number;
        next: number;
        bidAmount: BigNumber;
    };
    type ListResponseStruct = {
        id: BigNumberish;
        maxPrice: BigNumberish;
        amount: BigNumberish;
    };
    type ListResponseStructOutput = [BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        maxPrice: BigNumber;
        amount: BigNumber;
    };
    type PointersStruct = {
        head: BigNumberish;
        tail: BigNumberish;
    };
    type PointersStructOutput = [number, number] & {
        head: number;
        tail: number;
    };
}
export interface CCCInterface extends utils.Interface {
    functions: {
        "GCC_IN_AUCTION()": FunctionFragment;
        "INCREASE_BID_PERCENTAGE()": FunctionFragment;
        "MIN_BID()": FunctionFragment;
        "amountOwed(uint256)": FunctionFragment;
        "bid(uint256,uint32,uint32,uint256)": FunctionFragment;
        "bidCount()": FunctionFragment;
        "bids(uint256)": FunctionFragment;
        "close()": FunctionFragment;
        "closingPrice()": FunctionFragment;
        "constructSortedList()": FunctionFragment;
        "currentHighestBid()": FunctionFragment;
        "getNextBidPrice()": FunctionFragment;
        "lastPointerLegibleForClaim()": FunctionFragment;
        "maxAmountToBidForPrice(uint256,uint256)": FunctionFragment;
        "pointers()": FunctionFragment;
        "printBid(uint32)": FunctionFragment;
        "receiveGCC(uint256)": FunctionFragment;
        "totalGlowSold()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "GCC_IN_AUCTION" | "INCREASE_BID_PERCENTAGE" | "MIN_BID" | "amountOwed" | "bid" | "bidCount" | "bids" | "close" | "closingPrice" | "constructSortedList" | "currentHighestBid" | "getNextBidPrice" | "lastPointerLegibleForClaim" | "maxAmountToBidForPrice" | "pointers" | "printBid" | "receiveGCC" | "totalGlowSold"): FunctionFragment;
    encodeFunctionData(functionFragment: "GCC_IN_AUCTION", values?: undefined): string;
    encodeFunctionData(functionFragment: "INCREASE_BID_PERCENTAGE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_BID", values?: undefined): string;
    encodeFunctionData(functionFragment: "amountOwed", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "bid", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "bidCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "bids", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "close", values?: undefined): string;
    encodeFunctionData(functionFragment: "closingPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "constructSortedList", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentHighestBid", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNextBidPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastPointerLegibleForClaim", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxAmountToBidForPrice", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "pointers", values?: undefined): string;
    encodeFunctionData(functionFragment: "printBid", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "receiveGCC", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalGlowSold", values?: undefined): string;
    decodeFunctionResult(functionFragment: "GCC_IN_AUCTION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "INCREASE_BID_PERCENTAGE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_BID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "amountOwed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bidCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bids", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "close", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closingPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "constructSortedList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentHighestBid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNextBidPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastPointerLegibleForClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxAmountToBidForPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pointers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "printBid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveGCC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalGlowSold", data: BytesLike): Result;
    events: {};
}
export interface CCC extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CCCInterface;
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
        GCC_IN_AUCTION(overrides?: CallOverrides): Promise<[BigNumber]>;
        INCREASE_BID_PERCENTAGE(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_BID(overrides?: CallOverrides): Promise<[BigNumber]>;
        amountOwed(bidId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        bid(maxPrice: BigNumberish, prev: BigNumberish, next: BigNumberish, amountToBid: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        bidCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        bids(id: BigNumberish, overrides?: CallOverrides): Promise<[CCC.BidStructOutput]>;
        close(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        closingPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        constructSortedList(overrides?: CallOverrides): Promise<[CCC.ListResponseStructOutput[]]>;
        currentHighestBid(overrides?: CallOverrides): Promise<[BigNumber]>;
        getNextBidPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        lastPointerLegibleForClaim(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxAmountToBidForPrice(price: BigNumberish, timesSmallerMustBe: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        pointers(overrides?: CallOverrides): Promise<[CCC.PointersStructOutput]>;
        printBid(id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        receiveGCC(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        totalGlowSold(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    GCC_IN_AUCTION(overrides?: CallOverrides): Promise<BigNumber>;
    INCREASE_BID_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_BID(overrides?: CallOverrides): Promise<BigNumber>;
    amountOwed(bidId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    bid(maxPrice: BigNumberish, prev: BigNumberish, next: BigNumberish, amountToBid: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    bidCount(overrides?: CallOverrides): Promise<BigNumber>;
    bids(id: BigNumberish, overrides?: CallOverrides): Promise<CCC.BidStructOutput>;
    close(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    closingPrice(overrides?: CallOverrides): Promise<BigNumber>;
    constructSortedList(overrides?: CallOverrides): Promise<CCC.ListResponseStructOutput[]>;
    currentHighestBid(overrides?: CallOverrides): Promise<BigNumber>;
    getNextBidPrice(overrides?: CallOverrides): Promise<BigNumber>;
    lastPointerLegibleForClaim(overrides?: CallOverrides): Promise<BigNumber>;
    maxAmountToBidForPrice(price: BigNumberish, timesSmallerMustBe: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    pointers(overrides?: CallOverrides): Promise<CCC.PointersStructOutput>;
    printBid(id: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    receiveGCC(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    totalGlowSold(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        GCC_IN_AUCTION(overrides?: CallOverrides): Promise<BigNumber>;
        INCREASE_BID_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_BID(overrides?: CallOverrides): Promise<BigNumber>;
        amountOwed(bidId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        bid(maxPrice: BigNumberish, prev: BigNumberish, next: BigNumberish, amountToBid: BigNumberish, overrides?: CallOverrides): Promise<void>;
        bidCount(overrides?: CallOverrides): Promise<BigNumber>;
        bids(id: BigNumberish, overrides?: CallOverrides): Promise<CCC.BidStructOutput>;
        close(overrides?: CallOverrides): Promise<void>;
        closingPrice(overrides?: CallOverrides): Promise<BigNumber>;
        constructSortedList(overrides?: CallOverrides): Promise<CCC.ListResponseStructOutput[]>;
        currentHighestBid(overrides?: CallOverrides): Promise<BigNumber>;
        getNextBidPrice(overrides?: CallOverrides): Promise<BigNumber>;
        lastPointerLegibleForClaim(overrides?: CallOverrides): Promise<BigNumber>;
        maxAmountToBidForPrice(price: BigNumberish, timesSmallerMustBe: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        pointers(overrides?: CallOverrides): Promise<CCC.PointersStructOutput>;
        printBid(id: BigNumberish, overrides?: CallOverrides): Promise<void>;
        receiveGCC(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        totalGlowSold(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        GCC_IN_AUCTION(overrides?: CallOverrides): Promise<BigNumber>;
        INCREASE_BID_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_BID(overrides?: CallOverrides): Promise<BigNumber>;
        amountOwed(bidId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        bid(maxPrice: BigNumberish, prev: BigNumberish, next: BigNumberish, amountToBid: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        bidCount(overrides?: CallOverrides): Promise<BigNumber>;
        bids(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        close(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        closingPrice(overrides?: CallOverrides): Promise<BigNumber>;
        constructSortedList(overrides?: CallOverrides): Promise<BigNumber>;
        currentHighestBid(overrides?: CallOverrides): Promise<BigNumber>;
        getNextBidPrice(overrides?: CallOverrides): Promise<BigNumber>;
        lastPointerLegibleForClaim(overrides?: CallOverrides): Promise<BigNumber>;
        maxAmountToBidForPrice(price: BigNumberish, timesSmallerMustBe: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        pointers(overrides?: CallOverrides): Promise<BigNumber>;
        printBid(id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        receiveGCC(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        totalGlowSold(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        GCC_IN_AUCTION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        INCREASE_BID_PERCENTAGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_BID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        amountOwed(bidId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bid(maxPrice: BigNumberish, prev: BigNumberish, next: BigNumberish, amountToBid: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        bidCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bids(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        close(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        closingPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        constructSortedList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentHighestBid(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNextBidPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastPointerLegibleForClaim(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxAmountToBidForPrice(price: BigNumberish, timesSmallerMustBe: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pointers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        printBid(id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        receiveGCC(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        totalGlowSold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
