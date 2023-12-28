import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface VestingMathLibInterface extends utils.Interface {
    functions: {
        "MAX_VESTING_SECONDS()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "MAX_VESTING_SECONDS"): FunctionFragment;
    encodeFunctionData(functionFragment: "MAX_VESTING_SECONDS", values?: undefined): string;
    decodeFunctionResult(functionFragment: "MAX_VESTING_SECONDS", data: BytesLike): Result;
    events: {};
}
export interface VestingMathLib extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VestingMathLibInterface;
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
        MAX_VESTING_SECONDS(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    MAX_VESTING_SECONDS(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        MAX_VESTING_SECONDS(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        MAX_VESTING_SECONDS(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        MAX_VESTING_SECONDS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
