import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface NoncesInterface extends utils.Interface {
    functions: {
        "nonces(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "nonces"): FunctionFragment;
    encodeFunctionData(functionFragment: "nonces", values: [string]): string;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    events: {};
}
export interface Nonces extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NoncesInterface;
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
        nonces(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        nonces(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
