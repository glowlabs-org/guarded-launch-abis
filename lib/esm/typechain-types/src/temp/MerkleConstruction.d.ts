import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface MerkleConstructionInterface extends utils.Interface {
    functions: {
        "addLeaf(bytes32)": FunctionFragment;
        "calculateMerkleRoot(bytes32[])": FunctionFragment;
        "leaves(uint256)": FunctionFragment;
        "merkleRoot()": FunctionFragment;
        "verifyLeaf(bytes32,bytes32[])": FunctionFragment;
        "verifyLeafFull(bytes32,bytes32,bytes32[])": FunctionFragment;
        "verifyLeafFullOZ(bytes32,bytes32,bytes32[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addLeaf" | "calculateMerkleRoot" | "leaves" | "merkleRoot" | "verifyLeaf" | "verifyLeafFull" | "verifyLeafFullOZ"): FunctionFragment;
    encodeFunctionData(functionFragment: "addLeaf", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "calculateMerkleRoot", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "leaves", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "merkleRoot", values?: undefined): string;
    encodeFunctionData(functionFragment: "verifyLeaf", values: [BytesLike, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "verifyLeafFull", values: [BytesLike, BytesLike, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "verifyLeafFullOZ", values: [BytesLike, BytesLike, BytesLike[]]): string;
    decodeFunctionResult(functionFragment: "addLeaf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateMerkleRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "leaves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyLeaf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyLeafFull", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyLeafFullOZ", data: BytesLike): Result;
    events: {};
}
export interface MerkleConstruction extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MerkleConstructionInterface;
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
        addLeaf(newLeaf: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        calculateMerkleRoot(nodes: BytesLike[], overrides?: CallOverrides): Promise<[string]>;
        leaves(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        merkleRoot(overrides?: CallOverrides): Promise<[string]>;
        verifyLeaf(leaf: BytesLike, proof: BytesLike[], overrides?: CallOverrides): Promise<[boolean]>;
        verifyLeafFull(root: BytesLike, leaf: BytesLike, proof: BytesLike[], overrides?: CallOverrides): Promise<[boolean]>;
        verifyLeafFullOZ(root: BytesLike, leaf: BytesLike, proof: BytesLike[], overrides?: CallOverrides): Promise<[boolean]>;
    };
    addLeaf(newLeaf: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    calculateMerkleRoot(nodes: BytesLike[], overrides?: CallOverrides): Promise<string>;
    leaves(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    merkleRoot(overrides?: CallOverrides): Promise<string>;
    verifyLeaf(leaf: BytesLike, proof: BytesLike[], overrides?: CallOverrides): Promise<boolean>;
    verifyLeafFull(root: BytesLike, leaf: BytesLike, proof: BytesLike[], overrides?: CallOverrides): Promise<boolean>;
    verifyLeafFullOZ(root: BytesLike, leaf: BytesLike, proof: BytesLike[], overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        addLeaf(newLeaf: BytesLike, overrides?: CallOverrides): Promise<void>;
        calculateMerkleRoot(nodes: BytesLike[], overrides?: CallOverrides): Promise<string>;
        leaves(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        merkleRoot(overrides?: CallOverrides): Promise<string>;
        verifyLeaf(leaf: BytesLike, proof: BytesLike[], overrides?: CallOverrides): Promise<boolean>;
        verifyLeafFull(root: BytesLike, leaf: BytesLike, proof: BytesLike[], overrides?: CallOverrides): Promise<boolean>;
        verifyLeafFullOZ(root: BytesLike, leaf: BytesLike, proof: BytesLike[], overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        addLeaf(newLeaf: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        calculateMerkleRoot(nodes: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        leaves(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        merkleRoot(overrides?: CallOverrides): Promise<BigNumber>;
        verifyLeaf(leaf: BytesLike, proof: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        verifyLeafFull(root: BytesLike, leaf: BytesLike, proof: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        verifyLeafFullOZ(root: BytesLike, leaf: BytesLike, proof: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addLeaf(newLeaf: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        calculateMerkleRoot(nodes: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        leaves(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        merkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyLeaf(leaf: BytesLike, proof: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyLeafFull(root: BytesLike, leaf: BytesLike, proof: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyLeafFullOZ(root: BytesLike, leaf: BytesLike, proof: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
