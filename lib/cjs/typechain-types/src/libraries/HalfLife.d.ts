import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface HalfLifeInterface extends utils.Interface {
    functions: {
        "calculateHalfLifeValue(uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "calculateHalfLifeValue"): FunctionFragment;
    encodeFunctionData(functionFragment: "calculateHalfLifeValue", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "calculateHalfLifeValue", data: BytesLike): Result;
    events: {};
}
export interface HalfLife extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: HalfLifeInterface;
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
        calculateHalfLifeValue(initialValue: BigNumberish, elapsedSeconds: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    calculateHalfLifeValue(initialValue: BigNumberish, elapsedSeconds: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        calculateHalfLifeValue(initialValue: BigNumberish, elapsedSeconds: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        calculateHalfLifeValue(initialValue: BigNumberish, elapsedSeconds: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        calculateHalfLifeValue(initialValue: BigNumberish, elapsedSeconds: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
