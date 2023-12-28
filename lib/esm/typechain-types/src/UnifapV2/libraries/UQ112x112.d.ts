import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface UQ112x112Interface extends utils.Interface {
    functions: {
        "Q112()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "Q112"): FunctionFragment;
    encodeFunctionData(functionFragment: "Q112", values?: undefined): string;
    decodeFunctionResult(functionFragment: "Q112", data: BytesLike): Result;
    events: {};
}
export interface UQ112x112 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UQ112x112Interface;
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
        Q112(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    Q112(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        Q112(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        Q112(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        Q112(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
