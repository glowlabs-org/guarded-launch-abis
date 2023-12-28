/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  HalfLife,
  HalfLifeInterface,
} from "../../../../src/temp/Math.sol/HalfLife";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "elapsedSeconds",
        type: "uint256",
      },
    ],
    name: "calculateHalfLifeValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561000f575f80fd5b50610fc78061001d5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063ab45f3aa1461002d575b5f80fd5b61004061003b366004610f3a565b610052565b60405190815260200160405180910390f35b5f8061006262278d00600c610f5a565b90505f61007f610071856100c1565b61007a846100c1565b6100dd565b90505f6100a76100a261009c61009760016002610137565b61016c565b846101a4565b6101d8565b90505f6100b4828861022a565b9450505050505b92915050565b5f677fffffffffffffff8211156100d6575f80fd5b5060401b90565b5f81600f0b5f036100ec575f80fd5b5f82600f0b604085600f0b901b8161010657610106610f7d565b05905060016001607f1b03198112801590610128575060016001607f1b038113155b610130575f80fd5b9392505050565b5f815f03610143575f80fd5b5f61014e848461028e565b905060016001607f1b036001600160801b0382161115610130575f80fd5b5f8082600f0b1361017b575f80fd5b6080610186836103ed565b600f0b6fb17217f7d1cf79abc9e3b39803f2f6af02901c9050919050565b5f600f83810b9083900b0260401d60016001607f1b03198112801590610128575060016001607f1b03811315610130575f80fd5b5f600160461b82600f0b126101eb575f80fd5b683fffffffffffffffff1982600f0b121561020757505f919050565b6100bb608083600f0b700171547652b82fe1777d0ffda0d23a7d1202901d6104c9565b5f815f0361023957505f6100bb565b5f83600f0b1215610248575f80fd5b600f83900b6001600160801b038316810260401c90608084901c026001600160c01b03811115610276575f80fd5b60401b8119811115610286575f80fd5b019392505050565b5f815f0361029a575f80fd5b5f6001600160c01b0384116102c45782604085901b816102bc576102bc610f7d565b0490506103da565b60c084811c64010000000081106102dd576020918201911c5b6201000081106102ef576010918201911c5b6101008110610300576008918201911c5b60108110610310576004918201911c5b60048110610320576002918201911c5b6002811061032f576001820191505b60bf820360018603901c6001018260ff0387901b8161035057610350610f7d565b0492506001600160801b03831115610366575f80fd5b608085901c83026001600160801b038616840260c088901c604089901b82811015610392576001820391505b608084901b929003828110156103a9576001820391505b829003608084901c82146103be5760016103cf565b8881816103cd576103cd610f7d565b045b870196505050505050505b6001600160801b03811115610130575f80fd5b5f8082600f0b136103fc575f80fd5b5f600f83900b68010000000000000000811261041a576040918201911d5b640100000000811261042e576020918201911d5b620100008112610440576010918201911d5b6101008112610451576008918201911d5b60108112610461576004918201911d5b60048112610471576002918201911d5b60028112610480576001820191505b603f19820160401b600f85900b607f8490031b6001603f1b5b5f8113156104be5790800260ff81901c8281029390930192607f011c9060011d610499565b509095945050505050565b5f600160461b82600f0b126104dc575f80fd5b683fffffffffffffffff1982600f0b12156104f857505f919050565b6001607f1b5f6001603f1b8416600f0b13156105255770016a09e667f3bcc908b2fb1366ea957d3e0260801c5b5f8367400000000000000016600f0b1315610551577001306fe0a31b7152de8d5a46305c85edec0260801c5b5f8367200000000000000016600f0b131561057d577001172b83c7d517adcdf7c8c50eb14a791f0260801c5b5f8367100000000000000016600f0b13156105a95770010b5586cf9890f6298b92b71842a983630260801c5b5f8367080000000000000016600f0b13156105d5577001059b0d31585743ae7c548eb68ca417fd0260801c5b5f8367040000000000000016600f0b131561060157700102c9a3e778060ee6f7caca4f7a29bde80260801c5b5f8367020000000000000016600f0b131561062d5770010163da9fb33356d84a66ae336dcdfa3f0260801c5b5f8367010000000000000016600f0b131561065957700100b1afa5abcbed6129ab13ec11dc95430260801c5b5f83668000000000000016600f0b13156106845770010058c86da1c09ea1ff19d294cf2f679b0260801c5b5f83664000000000000016600f0b13156106af577001002c605e2e8cec506d21bfc89a23a00f0260801c5b5f83662000000000000016600f0b13156106da57700100162f3904051fa128bca9c55c31e5df0260801c5b5f83661000000000000016600f0b1315610705577001000b175effdc76ba38e31671ca9397250260801c5b5f83660800000000000016600f0b131561073057700100058ba01fb9f96d6cacd4b180917c3d0260801c5b5f83660400000000000016600f0b131561075b5770010002c5cc37da9491d0985c348c68e7b30260801c5b5f83660200000000000016600f0b1315610786577001000162e525ee054754457d59952920260260801c5b5f83660100000000000016600f0b13156107b15770010000b17255775c040618bf4a4ade83fc0260801c5b5f836580000000000016600f0b13156107db577001000058b91b5bc9ae2eed81e9b7d4cfab0260801c5b5f836540000000000016600f0b131561080557700100002c5c89d5ec6ca4d7c8acc017b7c90260801c5b5f836520000000000016600f0b131561082f5770010000162e43f4f831060e02d839a9d16d0260801c5b5f836510000000000016600f0b131561085957700100000b1721bcfc99d9f890ea069117630260801c5b5f836508000000000016600f0b13156108835770010000058b90cf1e6d97f9ca14dbcc16280260801c5b5f836504000000000016600f0b13156108ad577001000002c5c863b73f016468f6bac5ca2b0260801c5b5f836502000000000016600f0b13156108d757700100000162e430e5a18f6119e3c02282a50260801c5b5f836501000000000016600f0b1315610901577001000000b1721835514b86e6d96efd1bfe0260801c5b5f8364800000000016600f0b131561092a57700100000058b90c0b48c6be5df846c5b2ef0260801c5b5f8364400000000016600f0b13156109535770010000002c5c8601cc6b9e94213c72737a0260801c5b5f8364200000000016600f0b131561097c577001000000162e42fff037df38aa2b219f060260801c5b5f8364100000000016600f0b13156109a55770010000000b17217fba9c739aa5819f44f90260801c5b5f8364080000000016600f0b13156109ce577001000000058b90bfcdee5acd3c1cedc8230260801c5b5f8364040000000016600f0b13156109f757700100000002c5c85fe31f35a6a30da1be500260801c5b5f8364020000000016600f0b1315610a205770010000000162e42ff0999ce3541b9fffcf0260801c5b5f8364010000000016600f0b1315610a4957700100000000b17217f80f4ef5aadda455540260801c5b5f83638000000016600f0b1315610a715770010000000058b90bfbf8479bd5a81b51ad0260801c5b5f83634000000016600f0b1315610a99577001000000002c5c85fdf84bd62ae30a74cc0260801c5b5f83632000000016600f0b1315610ac157700100000000162e42fefb2fed257559bdaa0260801c5b5f83631000000016600f0b1315610ae9577001000000000b17217f7d5a7716bba4a9ae0260801c5b5f83630800000016600f0b1315610b1157700100000000058b90bfbe9ddbac5e109cce0260801c5b5f83630400000016600f0b1315610b395770010000000002c5c85fdf4b15de6f17eb0d0260801c5b5f83630200000016600f0b1315610b61577001000000000162e42fefa494f1478fde050260801c5b5f83630100000016600f0b1315610b895770010000000000b17217f7d20cf927c8e94c0260801c5b5f836280000016600f0b1315610bb0577001000000000058b90bfbe8f71cb4e4b33d0260801c5b5f836240000016600f0b1315610bd757700100000000002c5c85fdf477b662b269450260801c5b5f836220000016600f0b1315610bfe5770010000000000162e42fefa3ae53369388c0260801c5b5f836210000016600f0b1315610c2557700100000000000b17217f7d1d351a389d400260801c5b5f836208000016600f0b1315610c4c5770010000000000058b90bfbe8e8b2d3d4ede0260801c5b5f836204000016600f0b1315610c73577001000000000002c5c85fdf4741bea6e77e0260801c5b5f836202000016600f0b1315610c9a57700100000000000162e42fefa39fe95583c20260801c5b5f836201000016600f0b1315610cc1577001000000000000b17217f7d1cfb72b45e10260801c5b5f8361800016600f0b1315610ce757700100000000000058b90bfbe8e7cc35c3f00260801c5b5f8361400016600f0b1315610d0d5770010000000000002c5c85fdf473e242ea380260801c5b5f8361200016600f0b1315610d33577001000000000000162e42fefa39f02b772c0260801c5b5f8361100016600f0b1315610d595770010000000000000b17217f7d1cf7d83c1a0260801c5b5f8361080016600f0b1315610d7f577001000000000000058b90bfbe8e7bdcbe2e0260801c5b5f8361040016600f0b1315610da557700100000000000002c5c85fdf473dea871f0260801c5b5f8361020016600f0b1315610dcb5770010000000000000162e42fefa39ef44d910260801c5b5f8361010016600f0b1315610df157700100000000000000b17217f7d1cf79e9490260801c5b5f83608016600f0b1315610e165770010000000000000058b90bfbe8e7bce5440260801c5b5f83604016600f0b1315610e3b577001000000000000002c5c85fdf473de6eca0260801c5b5f83602016600f0b1315610e6057700100000000000000162e42fefa39ef366f0260801c5b5f83601016600f0b1315610e85577001000000000000000b17217f7d1cf79afa0260801c5b5f83600816600f0b1315610eaa57700100000000000000058b90bfbe8e7bcd6d0260801c5b5f83600416600f0b1315610ecf5770010000000000000002c5c85fdf473de6b20260801c5b5f83600216600f0b1315610ef4577001000000000000000162e42fefa39ef3580260801c5b5f83600116600f0b1315610f195770010000000000000000b17217f7d1cf79ab0260801c5b600f83810b60401d603f03900b1c60016001607f1b038111156100bb575f80fd5b5f8060408385031215610f4b575f80fd5b50508035926020909101359150565b80820281158282048414176100bb57634e487b7160e01b5f52601160045260245ffd5b634e487b7160e01b5f52601260045260245ffdfea264697066735822122020a2f5a6c0c1fa8f773fc1a5d6e3c84f049a047b05a63181381626cfbb0e611864736f6c63430008150033";

type HalfLifeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HalfLifeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HalfLife__factory extends ContractFactory {
  constructor(...args: HalfLifeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HalfLife> {
    return super.deploy(overrides || {}) as Promise<HalfLife>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): HalfLife {
    return super.attach(address) as HalfLife;
  }
  override connect(signer: Signer): HalfLife__factory {
    return super.connect(signer) as HalfLife__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HalfLifeInterface {
    return new utils.Interface(_abi) as HalfLifeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HalfLife {
    return new Contract(address, _abi, signerOrProvider) as HalfLife;
  }
}
