import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface IEarlyLiquidityInterface extends utils.Interface {
    functions: {
        "buy(uint256,uint256)": FunctionFragment;
        "getCurrentPrice()": FunctionFragment;
        "getPrice(uint256)": FunctionFragment;
        "totalSold()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "buy" | "getCurrentPrice" | "getPrice" | "totalSold"): FunctionFragment;
    encodeFunctionData(functionFragment: "buy", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCurrentPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPrice", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalSold", values?: undefined): string;
    decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSold", data: BytesLike): Result;
    events: {
        "Purchase(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Purchase"): EventFragment;
}
export interface PurchaseEventObject {
    buyer: string;
    glwReceived: BigNumber;
    totalUSDCSpent: BigNumber;
}
export type PurchaseEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], PurchaseEventObject>;
export type PurchaseEventFilter = TypedEventFilter<PurchaseEvent>;
export interface IEarlyLiquidity extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IEarlyLiquidityInterface;
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
        buy(increments: BigNumberish, maxCost: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getCurrentPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPrice(increments: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSold(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    buy(increments: BigNumberish, maxCost: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getCurrentPrice(overrides?: CallOverrides): Promise<BigNumber>;
    getPrice(increments: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    totalSold(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        buy(increments: BigNumberish, maxCost: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getCurrentPrice(overrides?: CallOverrides): Promise<BigNumber>;
        getPrice(increments: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalSold(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Purchase(address,uint256,uint256)"(buyer?: string | null, glwReceived?: null, totalUSDCSpent?: null): PurchaseEventFilter;
        Purchase(buyer?: string | null, glwReceived?: null, totalUSDCSpent?: null): PurchaseEventFilter;
    };
    estimateGas: {
        buy(increments: BigNumberish, maxCost: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getCurrentPrice(overrides?: CallOverrides): Promise<BigNumber>;
        getPrice(increments: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalSold(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        buy(increments: BigNumberish, maxCost: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getCurrentPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPrice(increments: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
