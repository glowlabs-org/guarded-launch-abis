import { Signer, ContractFactory, PayableOverrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { USDG, USDGInterface } from "../../src/USDG";
type USDGConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class USDG__factory extends ContractFactory {
    constructor(...args: USDGConstructorParams);
    deploy(_usdc: string, _usdcReceiver: string, _owner: string, _univ2Factory: string, _glow: string, _gcc: string, _holdingContract: string, _vetoCouncilContract: string, _impactCatalyst: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<USDG>;
    getDeployTransaction(_usdc: string, _usdcReceiver: string, _owner: string, _univ2Factory: string, _glow: string, _gcc: string, _holdingContract: string, _vetoCouncilContract: string, _impactCatalyst: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): USDG;
    connect(signer: Signer): USDG__factory;
    static readonly bytecode = "0x6101e060405260405162001f2038038062001f20833981016040819052620000279162000565565b866040518060400160405280600c81526020016b47756172646564205553444360a01b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600d81526020016c023bab0b93232b2102aa9a2219609d1b81525060405180604001604052806009815260200168555344472d474c4f5760b81b8152508160039081620000c19190620006ba565b506004620000d08282620006ba565b50620000e2915083905060056200027b565b61012052620000f38160066200027b565b61014052815160208084019190912060e052815190820120610100524660a0526200018060e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a08201525f9060c00160405160208183030381529060405280519060200120905090565b60805250503060c052506200019581620002b3565b506001600160a01b03898116610160528881166101808190528782166101a08190525f918252600960205260408083208054600160ff199182168117909255948816845290832080549094161790925590620001f390308862000304565b6001600160a01b0381165f908152600960205260408120805460ff191660011790556101a051919250906200022a90308862000304565b6001600160a01b039081165f908152600960205260408082208054600160ff1991821681179092559784166101c05295909216815220805490941690921790925550620007f3975050505050505050565b5f6020835110156200029a5762000292836200031a565b9050620002ad565b81620002a78482620006ba565b5060ff90505b92915050565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b5f6200031284848462000365565b949350505050565b5f80829050601f8151111562000350578260405163305a27a960e01b815260040162000347919062000782565b60405180910390fd5b80516200035d82620007cf565b179392505050565b5f80806200037485856200044d565b6040516001600160601b0319606084811b8216602084015283901b16603482015291935091508690604801604051602081830303815290604052805190602001206040516020016200042b9291907fff00000000000000000000000000000000000000000000000000000000000000815260609290921b6001600160601b031916600183015260158201527f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f603582015260550190565b60408051601f1981840301815291905280516020909101209695505050505050565b5f80826001600160a01b0316846001600160a01b031603620004c05760405162461bcd60e51b815260206004820152602560248201527f556e697377617056324c6962726172793a204944454e544943414c5f41444452604482015264455353455360d81b606482015260840162000347565b826001600160a01b0316846001600160a01b031610620004e2578284620004e5565b83835b90925090506001600160a01b038216620005425760405162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f414444524553530000604482015260640162000347565b9250929050565b80516001600160a01b038116811462000560575f80fd5b919050565b5f805f805f805f805f6101208a8c0312156200057f575f80fd5b6200058a8a62000549565b98506200059a60208b0162000549565b9750620005aa60408b0162000549565b9650620005ba60608b0162000549565b9550620005ca60808b0162000549565b9450620005da60a08b0162000549565b9350620005ea60c08b0162000549565b9250620005fa60e08b0162000549565b91506200060b6101008b0162000549565b90509295985092959850929598565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806200064357607f821691505b6020821081036200066257634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620006b5575f81815260208120601f850160051c81016020861015620006905750805b601f850160051c820191505b81811015620006b1578281556001016200069c565b5050505b505050565b81516001600160401b03811115620006d657620006d66200061a565b620006ee81620006e784546200062e565b8462000668565b602080601f83116001811462000724575f84156200070c5750858301515b5f19600386901b1c1916600185901b178555620006b1565b5f85815260208120601f198616915b82811015620007545788860151825594840194600190910190840162000733565b50858210156200077257878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b5f6020808352835180828501525f5b81811015620007af5785810183015185820160400152820162000791565b505f604082860101526040601f19601f8301168501019250505092915050565b8051602080830151919081101562000662575f1960209190910360031b1b16919050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c05161167b620008a55f395f81816101d101526105e401525f61032601525f818161025f015281816106be01528181610745015281816107f701526108ad01525f81816102e60152818161076f0152818161082901526108d701525f610da401525f610d7701525f610ca201525f610c7a01525f610bd501525f610bff01525f610c29015261167b5ff3fe608060405234801561000f575f80fd5b5060043610610187575f3560e01c806389a30271116100d9578063a584a9b511610093578063d505accf1161006e578063d505accf1461039d578063dd62ed3e146103b0578063f19a1eea146103c3578063f2fde38b146103e5575f80fd5b8063a584a9b51461036f578063a9059cbb14610377578063d004f0f71461038a575f80fd5b806389a30271146102e15780638da5cb5b1461030857806395d89b411461031957806399d8fae314610321578063a457c2d714610348578063a46ba7f91461035b575f80fd5b80633644e5151161014457806370a082311161011f57806370a0823114610281578063715018a6146102a95780637ecebe00146102b357806384b0196e146102c6575f80fd5b80633644e5151461023f578063395093511461024757806359dd83031461025a575f80fd5b806306fdde031461018b578063095ea7b3146101a957806314672d0c146101cc57806318160ddd1461020b57806323b872dd1461021d578063313ce56714610230575b5f80fd5b6101936103f8565b6040516101a091906113a9565b60405180910390f35b6101bc6101b73660046113dd565b610488565b60405190151581526020016101a0565b6101f37f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101a0565b6002545b6040519081526020016101a0565b6101bc61022b366004611405565b6104a1565b604051600681526020016101a0565b61020f6104c4565b6101bc6102553660046113dd565b6104d2565b6101f37f000000000000000000000000000000000000000000000000000000000000000081565b61020f61028f36600461143e565b6001600160a01b03165f9081526020819052604090205490565b6102b16104f3565b005b61020f6102c136600461143e565b610506565b6102ce610523565b6040516101a09796959493929190611457565b6101f37f000000000000000000000000000000000000000000000000000000000000000081565b6008546001600160a01b03166101f3565b610193610565565b6101f37f000000000000000000000000000000000000000000000000000000000000000081565b6101bc6103563660046113dd565b610574565b6008546101bc90600160a01b900460ff1681565b6102b16105cf565b6101bc6103853660046113dd565b6106af565b6102b16103983660046113dd565b6106bc565b6102b16103ab3660046114eb565b610960565b61020f6103be366004611558565b610a96565b6101bc6103d136600461143e565b60096020525f908152604090205460ff1681565b6102b16103f336600461143e565b610ac0565b60606003805461040790611589565b80601f016020809104026020016040519081016040528092919081815260200182805461043390611589565b801561047e5780601f106104555761010080835404028352916020019161047e565b820191905f5260205f20905b81548152906001019060200180831161046157829003601f168201915b5050505050905090565b5f33610495818585610afd565b60019150505b92915050565b5f336104ae858285610b0f565b6104b9858585610b6c565b506001949350505050565b5f6104cd610bc9565b905090565b5f336104958185856104e48383610a96565b6104ee91906115d5565b610afd565b6104fb610cf2565b6105045f610d1f565b565b6001600160a01b0381165f9081526007602052604081205461049b565b5f6060805f805f6060610534610d70565b61053c610d9d565b604080515f80825260208201909252600f60f81b9b939a50919850469750309650945092509050565b60606004805461040790611589565b5f33816105818286610a96565b9050838110156105c257604051632983c0c360e21b81526001600160a01b038616600482015260248101829052604481018590526064015b60405180910390fd5b6104b98286868403610afd565b6040516375ebee2960e11b81523360048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063ebd7dc5290602401602060405180830381865afa158015610631573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061065591906115e8565b6106725760405163611e185760e01b815260040160405180910390fd5b6008805460ff60a01b1916600160a01b1790556040517fb901bee11718c35d0b5ecb003f82e92281569daeafdb28796e4f33a86f7d4998905f90a1565b5f33610495818585610b6c565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b03160361070e576040516304e1ad8b60e41b815260040160405180910390fd5b805f0361072e57604051632752a9b160e21b815260040160405180910390fd5b6040516370a0823160e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301525f917f0000000000000000000000000000000000000000000000000000000000000000909116906370a0823190602401602060405180830381865afa1580156107b6573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107da9190611607565b6040516323b872dd60e01b81523360048201526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166024830152604482018590529192507f0000000000000000000000000000000000000000000000000000000000000000909116906323b872dd906064016020604051808303815f875af1158015610871573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061089591906115e8565b506040516370a0823160e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301525f917f0000000000000000000000000000000000000000000000000000000000000000909116906370a0823190602401602060405180830381865afa15801561091e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109429190611607565b905061094e828261161e565b925061095a8484610dca565b50505050565b834211156109845760405163313c898160e11b8152600481018590526024016105b9565b5f7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886109cf8c6001600160a01b03165f90815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090505f610a2982610e02565b90505f610a3882878787610e2e565b9050896001600160a01b0316816001600160a01b031614610a7f576040516325c0072360e11b81526001600160a01b0380831660048301528b1660248201526044016105b9565b610a8a8a8a8a610afd565b50505050505050505050565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b610ac8610cf2565b6001600160a01b038116610af157604051631e4fbdf760e01b81525f60048201526024016105b9565b610afa81610d1f565b50565b610b0a8383836001610e5a565b505050565b5f610b1a8484610a96565b90505f19811461095a5781811015610b5e57604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016105b9565b61095a84848484035f610e5a565b6001600160a01b038316610b9557604051634b637e8f60e11b81525f60048201526024016105b9565b6001600160a01b038216610bbe5760405163ec442f0560e01b81525f60048201526024016105b9565b610b0a838383610f2c565b5f306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610c2157507f000000000000000000000000000000000000000000000000000000000000000046145b15610c4b57507f000000000000000000000000000000000000000000000000000000000000000090565b6104cd604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a08201525f9060c00160405160208183030381529060405280519060200120905090565b6008546001600160a01b031633146105045760405163118cdaa760e01b81523360048201526024016105b9565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b60606104cd7f00000000000000000000000000000000000000000000000000000000000000006005610f74565b60606104cd7f00000000000000000000000000000000000000000000000000000000000000006006610f74565b6001600160a01b038216610df35760405163ec442f0560e01b81525f60048201526024016105b9565b610dfe5f8383610f2c565b5050565b5f61049b610e0e610bc9565b8360405161190160f01b8152600281019290925260228201526042902090565b5f805f80610e3e8888888861101d565b925092509250610e4e82826110e5565b50909695505050505050565b6001600160a01b038416610e835760405163e602df0560e01b81525f60048201526024016105b9565b6001600160a01b038316610eac57604051634a1406b160e11b81525f60048201526024016105b9565b6001600160a01b038085165f908152600160209081526040808320938716835292905220829055801561095a57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610f1e91815260200190565b60405180910390a350505050565b600854600160a01b900460ff1615610f5757604051637d01ae8d60e11b815260040160405180910390fd5b610f608361119d565b610f698261119d565b610b0a8383836111dc565b606060ff8314610f8e57610f8783611302565b905061049b565b818054610f9a90611589565b80601f0160208091040260200160405190810160405280929190818152602001828054610fc690611589565b80156110115780601f10610fe857610100808354040283529160200191611011565b820191905f5260205f20905b815481529060010190602001808311610ff457829003601f168201915b5050505050905061049b565b5f80807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084111561105657505f915060039050826110db565b604080515f808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa1580156110a7573d5f803e3d5ffd5b5050604051601f1901519150506001600160a01b0381166110d257505f9250600191508290506110db565b92505f91508190505b9450945094915050565b5f8260038111156110f8576110f8611631565b03611101575050565b600182600381111561111557611115611631565b036111335760405163f645eedf60e01b815260040160405180910390fd5b600282600381111561114757611147611631565b036111685760405163fce698f760e01b8152600481018290526024016105b9565b600382600381111561117c5761117c611631565b03610dfe576040516335e2f38360e21b8152600481018290526024016105b9565b803b15610afa576001600160a01b0381165f9081526009602052604090205460ff16610afa57604051637d3bdde560e01b815260040160405180910390fd5b6001600160a01b038316611206578060025f8282546111fb91906115d5565b909155506112769050565b6001600160a01b0383165f90815260208190526040902054818110156112585760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016105b9565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b038216611292576002805482900390556112b0565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516112f591815260200190565b60405180910390a3505050565b60605f61130e8361133f565b6040805160208082528183019092529192505f91906020820181803683375050509182525060208101929092525090565b5f60ff8216601f81111561049b57604051632cd44ac360e21b815260040160405180910390fd5b5f81518084525f5b8181101561138a5760208185018101518683018201520161136e565b505f602082860101526020601f19601f83011685010191505092915050565b602081525f6113bb6020830184611366565b9392505050565b80356001600160a01b03811681146113d8575f80fd5b919050565b5f80604083850312156113ee575f80fd5b6113f7836113c2565b946020939093013593505050565b5f805f60608486031215611417575f80fd5b611420846113c2565b925061142e602085016113c2565b9150604084013590509250925092565b5f6020828403121561144e575f80fd5b6113bb826113c2565b60ff60f81b881681525f602060e08184015261147660e084018a611366565b8381036040850152611488818a611366565b606085018990526001600160a01b038816608086015260a0850187905284810360c086015285518082528387019250908301905f5b818110156114d9578351835292840192918401916001016114bd565b50909c9b505050505050505050505050565b5f805f805f805f60e0888a031215611501575f80fd5b61150a886113c2565b9650611518602089016113c2565b95506040880135945060608801359350608088013560ff8116811461153b575f80fd5b9699959850939692959460a0840135945060c09093013592915050565b5f8060408385031215611569575f80fd5b611572836113c2565b9150611580602084016113c2565b90509250929050565b600181811c9082168061159d57607f821691505b6020821081036115bb57634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561049b5761049b6115c1565b5f602082840312156115f8575f80fd5b815180151581146113bb575f80fd5b5f60208284031215611617575f80fd5b5051919050565b8181038181111561049b5761049b6115c1565b634e487b7160e01b5f52602160045260245ffdfea26469706673582212201ed14b91f658a1cb055c56684cb7be1876076a3c08337b6b2dab62229a07821464736f6c63430008150033";
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
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
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
    static createInterface(): USDGInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): USDG;
}
export {};
