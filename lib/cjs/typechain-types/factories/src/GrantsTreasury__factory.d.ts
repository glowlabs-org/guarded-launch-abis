import { Signer, ContractFactory, PayableOverrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GrantsTreasury, GrantsTreasuryInterface } from "../../src/GrantsTreasury";
type GrantsTreasuryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GrantsTreasury__factory extends ContractFactory {
    constructor(...args: GrantsTreasuryConstructorParams);
    deploy(_glowToken: string, _governance: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<GrantsTreasury>;
    getDeployTransaction(_glowToken: string, _governance: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): GrantsTreasury;
    connect(signer: Signer): GrantsTreasury__factory;
    static readonly bytecode = "0x60e06040526040516107bb3803806107bb833981016040819052610022916100bb565b6001600160a01b03808316608081905290821660a05260408051630308135160e21b81529051630c204d44916004808201926020929091908290030181865afa158015610071573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061009591906100ec565b60c052506101039050565b80516001600160a01b03811681146100b6575f80fd5b919050565b5f80604083850312156100cc575f80fd5b6100d5836100a0565b91506100e3602084016100a0565b90509250929050565b5f602082840312156100fc575f80fd5b5051919050565b60805160a05160c0516106746101475f395f60a401525f818160de01526102ce01525f818161013c01528181610217015281816103fa01526104d801526106745ff3fe608060405234801561000f575f80fd5b506004361061009b575f3560e01c80637b9d8c21116100635780637b9d8c2114610167578063a06ab2a21461016f578063cd12099014610179578063e2d95b631461019c578063f4d5a133146101a4575f80fd5b80630c204d441461009f57806314627834146100d95780631ff6f4b71461011857806339b6eaf5146101375780635f34be161461015e575b5f80fd5b6100c67f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6101007f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100d0565b6100c6610126366004610586565b60026020525f908152604090205481565b6101007f000000000000000000000000000000000000000000000000000000000000000081565b6100c660015481565b6100c65f5481565b6101776101ac565b005b61018c6101873660046105a6565b6102c2565b60405190151581526020016100d0565b6101776103f7565b6100c66104b7565b335f90815260026020526040812054908190036101d3576101d3631ae61cbb60e31b610563565b335f908152600260205260408120819055600180548392906101f69084906105e2565b909155505060405163a9059cbb60e01b8152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303815f875af1158015610265573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061028991906105f5565b5060405181815233907f439969c6365f3fa537183af845b98df43fe2f62d4b99365899ddb965772291b09060200160405180910390a250565b5f336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103035761030363f2be30fb60e01b610563565b61030b6103f7565b5f6103146104b7565b90508281101561036a57836001600160a01b03167f2bb8117b627d62a8735b3a632de866f8352d413099bc18c0fe549809f8e9f82b8460405161035991815260200190565b60405180910390a25f9150506103f1565b6001600160a01b0384165f90815260026020526040812080548592906103919084906105e2565b92505081905550825f808282546103a891906105e2565b90915550506040518381526001600160a01b038516907f898f607cfdef31e27e34edac40c34d14eca9c3ef7cdba51047aac077189933819060200160405180910390a260019150505b92915050565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316633a80ccfe6040518163ffffffff1660e01b81526004016020604051808303815f875af1158015610455573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104799190610614565b90507ff9bc5076c5e954ba12029cdd6a99bc5fcd325cb30d5c68841eef1518720cd0be816040516104ac91815260200190565b60405180910390a150565b6040516370a0823160e01b81523060048201525f9081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa15801561051d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105419190610614565b90505f546001548261055391906105e2565b61055d919061062b565b91505090565b805f5260045ffd5b80356001600160a01b0381168114610581575f80fd5b919050565b5f60208284031215610596575f80fd5b61059f8261056b565b9392505050565b5f80604083850312156105b7575f80fd5b6105c08361056b565b946020939093013593505050565b634e487b7160e01b5f52601160045260245ffd5b808201808211156103f1576103f16105ce565b5f60208284031215610605575f80fd5b8151801515811461059f575f80fd5b5f60208284031215610624575f80fd5b5051919050565b818103818111156103f1576103f16105ce56fea2646970667358221220600c3970b16be225bfc8b67dc9eeca9ea70bb8a86d8e0ecd1cbee924a76a895264736f6c63430008150033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): GrantsTreasuryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GrantsTreasury;
}
export {};
