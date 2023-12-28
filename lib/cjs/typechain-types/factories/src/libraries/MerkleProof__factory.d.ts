import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MerkleProof, MerkleProofInterface } from "../../../src/libraries/MerkleProof";
type MerkleProofConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MerkleProof__factory extends ContractFactory {
    constructor(...args: MerkleProofConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MerkleProof>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MerkleProof;
    connect(signer: Signer): MerkleProof__factory;
    static readonly bytecode = "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f80fdfea2646970667358221220ca183c59219b9f2fac9b1877bb34cc10b4152592dc7ee8a902ebb8794d07567f64736f6c63430008150033";
    static readonly abi: {
        inputs: never[];
        name: string;
        type: string;
    }[];
    static createInterface(): MerkleProofInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MerkleProof;
}
export {};
