import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MD2, MD2Interface } from "../../../src/temp/MD2";
type MD2ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MD2__factory extends ContractFactory {
    constructor(...args: MD2ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MD2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MD2;
    connect(signer: Signer): MD2__factory;
    static readonly bytecode = "0x608060405234801561000f575f80fd5b506108ed8061001d5f395ff3fe608060405234801561000f575f80fd5b506004361061009b575f3560e01c8063b54c2fe011610063578063b54c2fe014610198578063bdfabf9b146101ab578063bf1ca0e014610215578063ceb055f01461021b578063e1ada6b614610223575f80fd5b8063202f00571461009f5780634f127aae146100ba57806397747861146100c25780639c8a7af41461014c578063a9fb763c14610161575b5f80fd5b6100a760d081565b6040519081526020015b60405180910390f35b6100a761022b565b61011b604080516060810182525f808252602082018190529181019190915250604080516060810182525f5465ffffffffffff8082168352600160301b820481166020840152600160601b909104169181019190915290565b60408051825165ffffffffffff908116825260208085015182169083015292820151909216908201526060016100b1565b61015f61015a36600461081a565b610249565b005b61017461016f36600461081a565b610255565b604080518251151581526020808401519082015291810151908201526060016100b1565b6100a76101a636600461081a565b61028a565b6101f86101b936600461081a565b5f818152600160208181526040928390208351606081018552815460ff1615158082529382015492810183905260029091015493018390529093909250565b6040805193151584526020840192909252908201526060016100b1565b5f6100a7565b6100a7601081565b6100a761029a565b5f62093a8061023a8242610845565b6102449190610858565b905090565b610252816102a9565b50565b61027860405180606001604052805f151581526020015f81526020015f81525090565b5f61028283610648565b509392505050565b5f610294826107be565b92915050565b6102a6601060d0610845565b81565b5f6102b261022b565b90505f6102c0601083610877565b90505f6102cf601060d0610845565b6102d99083610877565b90505f6102e8601060d0610845565b6102f29086610858565b60408051606080820183525f805465ffffffffffff8082168552600160301b82048116602080870191909152600160601b909204168486015288825260018082529185902085519384018652805460ff1615801585529281015491840191909152600201549382019390935292935091906103ef575f8581526001602081905260408220018054859290610387908490610877565b90915550505f84815260016020526040812060020180548592906103ac908490610877565b909155505060405187815286907f22e18421e5684c329ae821a16451d5284686946fd78748c1e7a8e04f7d6f04689060200160405180910390a250505050505050565b81515f9065ffffffffffff161561040f57825165ffffffffffff16610411565b855b5f8181526001602081815260408084208151606081018352815460ff16151581528185015481850152600291820154818401528b86529390925283200180549394509092879290610463908490610877565b909155505060208401515f9065ffffffffffff1688118061048357508783145b90505f81610495578460400151610497565b5f5b9050816104db57835b898110156104d5575f818152600160205260409020600201546104c39083610877565b91506104ce8161088a565b90506104a0565b506104e2565b5f60208401525b6040518060600160405280600115158152602001828986602001516105079190610877565b6105119190610845565b81525f60209182018190528b815260018083526040918290208451815460ff191690151517815592840151908301559190910151600290910155855165ffffffffffff1689146106015760405180606001604052808a65ffffffffffff1681526020016001601060d06105849190610845565b61058e908d610877565b6105989190610845565b65ffffffffffff90811682526040808a0151821660209384015283515f80549486015195909201518316600160601b0265ffffffffffff60601b19958416600160301b026bffffffffffffffffffffffff19909516919093161792909217929092169190911790555b897f22e18421e5684c329ae821a16451d5284686946fd78748c1e7a8e04f7d6f04688c60405161063391815260200190565b60405180910390a25050505050505050505050565b61066b60405180606001604052805f151581526020015f81526020015f81525090565b5f8281526001602081815260408084208151606081018352815460ff1615158082529482015493810193909352600201549082015290806106ac5750601084105b156106ba57935f9350915050565b604080516060810182525f5465ffffffffffff8082168352600160301b8204811660208401819052600160601b9092041692820192909252908511156107045750935f9350915050565b60408201515f610715600188610845565b604084015190915065ffffffffffff165b8181116107af575f6001818461073b816108a2565b90825260208083019390935260409182015f208251606081018452815460ff16151581526001820154948101949094526002015491830182905294509091506107849085610877565b8151909450156107a95783816020015161079e9190610845565b6020870152506107af565b50610726565b50929660019650945050505050565b5f805f6107ca84610648565b91509150801561080f5760018083525f60408085018281528783526020848152919092208551815460ff19169015151781559085015192810192909255516002909101555b506020015192915050565b5f6020828403121561082a575f80fd5b5035919050565b634e487b7160e01b5f52601160045260245ffd5b8181038181111561029457610294610831565b5f8261087257634e487b7160e01b5f52601260045260245ffd5b500490565b8082018082111561029457610294610831565b5f6001820161089b5761089b610831565b5060010190565b5f816108b0576108b0610831565b505f19019056fea2646970667358221220e843f398d35b6053f18d75390378343604c82cce0a6be78164e00dd02ee4127464736f6c63430008150033";
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
    static createInterface(): MD2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): MD2;
}
export {};
