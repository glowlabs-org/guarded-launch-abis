import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BucketSubmission, BucketSubmissionInterface } from "../../../src/MinerPoolAndGCA/BucketSubmission";
type BucketSubmissionConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BucketSubmission__factory extends ContractFactory {
    constructor(...args: BucketSubmissionConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BucketSubmission>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BucketSubmission;
    connect(signer: Signer): BucketSubmission__factory;
    static readonly bytecode = "0x608060405234801561000f575f80fd5b506103f78061001d5f395ff3fe608060405234801561000f575f80fd5b5060043610610060575f3560e01c8063202f0057146100645780634f127aae1461007f5780639774786114610087578063a9fb763c14610114578063ceb055f01461014b578063e1ada6b614610153575b5f80fd5b61006c60d081565b6040519081526020015b60405180910390f35b61006c61015b565b6100e3604080516060810182525f808252602082018190529181019190915250604080516060810182525f5465ffffffffffff80821683526601000000000000820481166020840152600160601b909104169181019190915290565b60408051825165ffffffffffff90811682526020808501518216908301529282015190921690820152606001610076565b610127610122366004610336565b610179565b60408051825115158152602080840151908201529181015190820152606001610076565b61006c601081565b61006c6101ae565b5f62093a8061016a8242610361565b610174919061037a565b905090565b61019c60405180606001604052805f151581526020015f81526020015f81525090565b5f6101a6836101bd565b509392505050565b6101ba601060d0610361565b81565b6101e060405180606001604052805f151581526020015f81526020015f81525090565b5f8281526001602081815260408084208151606081018352815460ff1615158082529482015493810193909352600201549082015290806102215750601084105b1561022f57935f9350915050565b604080516060810182525f5465ffffffffffff808216835266010000000000008204811660208401819052600160601b90920416928201929092529085111561027c5750935f9350915050565b60408201515f61028d600188610361565b604084015190915065ffffffffffff165b818111610327575f600181846102b381610399565b90825260208083019390935260409182015f208251606081018452815460ff16151581526001820154948101949094526002015491830182905294509091506102fc90856103ae565b815190945015610321578381602001516103169190610361565b602087015250610327565b5061029e565b50929660019650945050505050565b5f60208284031215610346575f80fd5b5035919050565b634e487b7160e01b5f52601160045260245ffd5b818103818111156103745761037461034d565b92915050565b5f8261039457634e487b7160e01b5f52601260045260245ffd5b500490565b5f816103a7576103a761034d565b505f190190565b808201808211156103745761037461034d56fea2646970667358221220b7ec0eff396cba4551675adad405ba16731b0a869ec660a69267376f646c34e364736f6c63430008150033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): BucketSubmissionInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BucketSubmission;
}
export {};
