/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from 'ethers'
import { Provider } from 'ethers/providers'
import { UnsignedTransaction } from 'ethers/utils/transaction'

import { GlobalInbox } from './GlobalInbox'

export class GlobalInboxFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(): Promise<GlobalInbox> {
    return super.deploy() as Promise<GlobalInbox>
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction()
  }
  attach(address: string): GlobalInbox {
    return super.attach(address) as GlobalInbox
  }
  connect(signer: Signer): GlobalInboxFactory {
    return super.connect(signer) as GlobalInboxFactory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GlobalInbox {
    return new Contract(address, _abi, signerOrProvider) as GlobalInbox
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'messageNum',
        type: 'uint256',
      },
    ],
    name: 'ContractTransactionMessageDelivered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'erc20',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'messageNum',
        type: 'uint256',
      },
    ],
    name: 'ERC20DepositMessageDelivered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'erc721',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'messageNum',
        type: 'uint256',
      },
    ],
    name: 'ERC721DepositMessageDelivered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'messageNum',
        type: 'uint256',
      },
    ],
    name: 'EthDepositMessageDelivered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
    ],
    name: 'TransactionMessageBatchDelivered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'seqNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'TransactionMessageDelivered',
    type: 'event',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_tokenContract',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'getERC20Balance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_erc721',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'getERC721Tokens',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'getEthBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_erc721',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'hasERC721',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'ownedERC20s',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'ownedERC721s',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_tokenContract',
        type: 'address',
      },
    ],
    name: 'withdrawERC20',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_erc721',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'withdrawERC721',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'withdrawEth',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getInbox',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'bytes',
        name: '_messages',
        type: 'bytes',
      },
    ],
    name: 'sendMessages',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_chain',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_seqNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'sendTransactionMessage',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_chain',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
    ],
    name: 'depositEthMessage',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_chain',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_erc20',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'depositERC20Message',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_chain',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_erc721',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'depositERC721Message',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'forwardContractTransactionMessage',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
    ],
    name: 'forwardEthMessage',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: 'tos',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'seqNumbers',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]',
      },
      {
        internalType: 'uint32[]',
        name: 'dataLengths',
        type: 'uint32[]',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'deliverTransactionBatch',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50612433806100206000396000f3fe6080604052600436106101095760003560e01c80638f5ed73e11610095578063bca22b7611610064578063bca22b76146106f9578063c3a8962c14610742578063e4eb8c631461077d578063f3e414f8146107f8578063f4f3b2001461083157610109565b80638f5ed73e146103fb57806396588a271461049b5780639c77348d146104c9578063a0ef91df146106e457610109565b80634d2301cc116100dc5780634d2301cc1461026f5780635bd21290146102b45780636e2b89c5146102e457806384cb7997146103175780638b7010aa146103b257610109565b8063022016811461010e5780630758fb0a1461015a57806333f2ac42146101e557806345a53f0914610218575b600080fd5b34801561011a57600080fd5b506101416004803603602081101561013157600080fd5b50356001600160a01b0316610864565b6040805192835260208301919091528051918290030190f35b34801561016657600080fd5b506101956004803603604081101561017d57600080fd5b506001600160a01b0381358116916020013516610887565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156101d15781810151838201526020016101b9565b505050509050019250505060405180910390f35b3480156101f157600080fd5b506101956004803603602081101561020857600080fd5b50356001600160a01b031661094d565b34801561022457600080fd5b5061025b6004803603606081101561023b57600080fd5b506001600160a01b03813581169160208101359091169060400135610a10565b604080519115158252519081900360200190f35b34801561027b57600080fd5b506102a26004803603602081101561029257600080fd5b50356001600160a01b0316610a90565b60408051918252519081900360200190f35b6102e2600480360360408110156102ca57600080fd5b506001600160a01b0381358116916020013516610aab565b005b3480156102f057600080fd5b506101956004803603602081101561030757600080fd5b50356001600160a01b0316610ac4565b34801561032357600080fd5b506102e26004803603608081101561033a57600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561037457600080fd5b82018360208201111561038657600080fd5b803590602001918460018302840111600160201b831117156103a757600080fd5b509092509050610b7b565b3480156103be57600080fd5b506102e2600480360360808110156103d557600080fd5b506001600160a01b03813581169160208101358216916040820135169060600135610bc5565b34801561040757600080fd5b506102e2600480360360a081101561041e57600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b81111561045d57600080fd5b82018360208201111561046f57600080fd5b803590602001918460018302840111600160201b8311171561049057600080fd5b509092509050610be3565b6102e2600480360360408110156104b157600080fd5b506001600160a01b0381358116916020013516610c2f565b3480156104d557600080fd5b506102e2600480360360e08110156104ec57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561051657600080fd5b82018360208201111561052857600080fd5b803590602001918460208302840111600160201b8311171561054957600080fd5b919390929091602081019035600160201b81111561056657600080fd5b82018360208201111561057857600080fd5b803590602001918460208302840111600160201b8311171561059957600080fd5b919390929091602081019035600160201b8111156105b657600080fd5b8201836020820111156105c857600080fd5b803590602001918460208302840111600160201b831117156105e957600080fd5b919390929091602081019035600160201b81111561060657600080fd5b82018360208201111561061857600080fd5b803590602001918460208302840111600160201b8311171561063957600080fd5b919390929091602081019035600160201b81111561065657600080fd5b82018360208201111561066857600080fd5b803590602001918460018302840111600160201b8311171561068957600080fd5b919390929091602081019035600160201b8111156106a657600080fd5b8201836020820111156106b857600080fd5b803590602001918460018302840111600160201b831117156106d957600080fd5b509092509050610c44565b3480156106f057600080fd5b506102e2610da9565b34801561070557600080fd5b506102e26004803603608081101561071c57600080fd5b506001600160a01b03813581169160208101358216916040820135169060600135610df4565b34801561074e57600080fd5b506102a26004803603604081101561076557600080fd5b506001600160a01b0381358116916020013516610e0c565b34801561078957600080fd5b506102e2600480360360208110156107a057600080fd5b810190602081018135600160201b8111156107ba57600080fd5b8201836020820111156107cc57600080fd5b803590602001918460018302840111600160201b831117156107ed57600080fd5b509092509050610e75565b34801561080457600080fd5b506102e26004803603604081101561081b57600080fd5b506001600160a01b038135169060200135610f39565b34801561083d57600080fd5b506102e26004803603602081101561085457600080fd5b50356001600160a01b0316610ffd565b6001600160a01b0316600090815260036020526040902080546001909101549091565b6001600160a01b03808216600090815260026020908152604080832093861683529083905290205460609190806108d05750506040805160008152602081019091529050610947565b8160010160018203815481106108e257fe5b906000526020600020906003020160020180548060200260200160405190810160405280929190818152602001828054801561093d57602002820191906000526020600020905b815481526020019060010190808311610929575b5050505050925050505b92915050565b6001600160a01b03811660009081526002602090815260409182902060018101548351818152818402810190930190935260609290918391801561099b578160200160208202803883390190505b50805190915060005b81811015610a06578360010181815481106109bb57fe5b600091825260209091206003909102015483516001600160a01b03909116908490839081106109e657fe5b6001600160a01b03909216602092830291909101909101526001016109a4565b5090949350505050565b6001600160a01b03808316600090815260026020908152604080832093871683529083905281205490919080610a4b57600092505050610a89565b816001016001820381548110610a5d57fe5b906000526020600020906003020160010160008581526020019081526020016000205460001415925050505b9392505050565b6001600160a01b031660009081526020819052604090205490565b610ab4826110ca565b610ac0828233346110e9565b5050565b6001600160a01b03811660009081526001602081815260409283902091820154835181815281830281019092019093526060928391908015610b10578160200160208202803883390190505b50805190915060005b81811015610a0657836001018181548110610b3057fe5b600091825260209091206002909102015483516001600160a01b0390911690849083908110610b5b57fe5b6001600160a01b0390921660209283029190910190910152600101610b19565b610bbe3386868686868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061118892505050565b5050505050565b610bd0828583611293565b610bdd848433858561130f565b50505050565b610c27868633878787878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506113a992505050565b505050505050565b610c38336110ca565b610ac0338383346110e9565b8a898114610c8e576040805162461bcd60e51b81526020600482015260126024820152710eee4dedcce40d2dce0eae840d8cadccee8d60731b604482015290519081900360640190fd5b878114610cd7576040805162461bcd60e51b81526020600482015260126024820152710eee4dedcce40d2dce0eae840d8cadccee8d60731b604482015290519081900360640190fd5b858114610d20576040805162461bcd60e51b81526020600482015260126024820152710eee4dedcce40d2dce0eae840d8cadccee8d60731b604482015290519081900360640190fd5b60006040516006815360010160031936016004823743369190910160031981019190915242601c82015260405190819003603c0190209050610d628f82611458565b8e6001600160a01b03167f9cd591b0e52bcf1c506475ee03776192ea3d99f35150ef6651b339333b7372c460405160405180910390a2505050505050505050505050505050565b6000610db433610a90565b3360008181526020819052604080822082905551929350909183156108fc0291849190818181858888f19350505050158015610ac0573d6000803e3d6000fd5b610dff82858361148e565b610bdd848433858561151b565b6001600160a01b03808216600090815260016020908152604080832093861683529083905281205490919080610e4757600092505050610947565b816001016001820381548110610e5957fe5b9060005260206000209060020201600101549250505092915050565b6000808080845b80841015610f3057610ec587878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508892506115b5915050565b9297509095509350915084610ed957610f30565b610f1c87878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508892508791506116779050565b909550935084610f2b57610f30565b610e7c565b50505050505050565b610f4433838361177b565b610f95576040805162461bcd60e51b815260206004820152601860248201527f57616c6c657420646f65736e2774206f776e20746f6b656e0000000000000000604482015290519081900360640190fd5b60408051632142170760e11b81523060048201523360248201526044810183905290516001600160a01b038416916342842e0e91606480830192600092919082900301818387803b158015610fe957600080fd5b505af1158015610c27573d6000803e3d6000fd5b60006110098233610e0c565b90506110163383836119e3565b6110515760405162461bcd60e51b815260040180806020018281038252602e8152602001806123d1602e913960400191505060405180910390fd5b6040805163a9059cbb60e01b81523360048201526024810183905290516001600160a01b0384169163a9059cbb9160448083019260209291908290030181600087803b1580156110a057600080fd5b505af11580156110b4573d6000803e3d6000fd5b505050506040513d6020811015610bdd57600080fd5b6001600160a01b03166000908152602081905260409020805434019055565b6001600160a01b03841660009081526003602052604081206001908101540190611117858585434287611b76565b90506111238682611458565b336001600160a01b0316856001600160a01b0316876001600160a01b03167ffd0d0553177fec183128f048fbde54554a3a67302f7ebd7f735215a3582907053486604051808381526020018281526020019250505060405180910390a4505050505050565b6001600160a01b038516600090815260036020526040812060019081015401906111b786868686434288611be0565b90506111c38782611458565b846001600160a01b0316866001600160a01b0316886001600160a01b03167f362b3acbdbf0277aefa83754ea8d39fc1c55d01d9351cf78969923f8cfee612c8787876040518084815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561124e578181015183820152602001611236565b50505050905090810190601f16801561127b5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a450505050505050565b604080516323b872dd60e01b81523360048201523060248201526044810183905290516001600160a01b038516916323b872dd91606480830192600092919082900301818387803b1580156112e757600080fd5b505af11580156112fb573d6000803e3d6000fd5b5050505061130a828483611cbf565b505050565b6001600160a01b0385166000908152600360205260408120600190810154019061133e86868686434288611e43565b905061134a8782611458565b604080516001600160a01b0386811682526020820186905281830185905291518288169289811692908b16917f40baf11a4a4a4be2a155dbf303fbaec6fabd52e267268bd7e3de4b4ed8a2e0959181900360600190a450505050505050565b60006113c2878787878787805190602001204342611e62565b90506113ce8782611458565b846001600160a01b0316866001600160a01b0316886001600160a01b03167fcf612c95e8993eca9c6e0be96b26b47022996db601dc12b4cf68ec37829d87b38787876040518084815260200183815260200180602001828103825283818151815260200191508051906020019080838360008381101561124e578181015183820152602001611236565b6001600160a01b0382166000908152600360205260409020805461147c9083611ed9565b81556001908101805490910190555050565b604080516323b872dd60e01b81523360048201523060248201526044810183905290516001600160a01b038516916323b872dd9160648083019260209291908290030181600087803b1580156114e357600080fd5b505af11580156114f7573d6000803e3d6000fd5b505050506040513d602081101561150d57600080fd5b5061130a9050828483611f05565b6001600160a01b0385166000908152600360205260408120600190810154019061154a86868686434288611fdc565b90506115568782611458565b604080516001600160a01b0386811682526020820186905281830185905291518288169289811692908b16917fb13d04085b4a9f87fecfccf9b72081bb8a273498d6b08b4bccf2940d555b5e609181900360600190a450505050505050565b60008060008060008060008088905060008a82815181106115d257fe5b016020015160019092019160f81c90506006811461160257506000975088965087955085945061166e9350505050565b61160c8b83611fef565b91965090945091508461163157506000975088965087955085945061166e9350505050565b61163b8b83611fef565b91965090935091508461166057506000975088965087955085945061166e9350505050565b506001975095509093509150505b92959194509250565b60008060018314156116cc576000806000806116938989612067565b9350935093509350836116b0576000889550955050505050611773565b6116bb3383836120b4565b506001839550955050505050611773565b60028314156117255760008060008060006116e78a8a612112565b945094509450945094508461170757600089965096505050505050611773565b61171333838584612219565b50600184965096505050505050611773565b600383141561176c5760008060008060006117408a8a612112565b945094509450945094508461176057600089965096505050505050611773565b61171333838584612249565b5060009050825b935093915050565b6001600160a01b038084166000908152600260209081526040808320938616835290839052812054909190806117b657600092505050610a89565b60008260010160018303815481106117ca57fe5b6000918252602080832088845260016003909302019182019052604090912054909150806117ff576000945050505050610a89565b6002820180548291600185019160009190600019810190811061181e57fe5b60009182526020808320909101548352820192909252604001902055600282018054600019810190811061184e57fe5b906000526020600020015482600201600183038154811061186b57fe5b60009182526020808320909101929092558781526001840190915260408120556002820180548061189857fe5b60008281526020812082016000199081019190915501905560028201546119d557600184018054849186916000919060001981019081106118d557fe5b600091825260208083206003909202909101546001600160a01b03168352820192909252604001902055600184018054600019810190811061191357fe5b906000526020600020906003020184600101600185038154811061193357fe5b60009182526020909120825460039092020180546001600160a01b0319166001600160a01b03909216919091178155600280830180546119769284019190612307565b5050506001600160a01b0387166000908152602085905260408120556001840180548061199f57fe5b60008281526020812060036000199093019283020180546001600160a01b0319168155906119d06002830182612357565b505090555b506001979650505050505050565b6000816119f257506001610a89565b6001600160a01b03808516600090815260016020908152604080832093871683529083905290205480611a2a57600092505050610a89565b6000826001016001830381548110611a3e57fe5b906000526020600020906002020190508060010154851115611a665760009350505050610a89565b60018101805486900390819055611b695760018301805483918591600091906000198101908110611a9357fe5b600091825260208083206002909202909101546001600160a01b031683528201929092526040019020556001830180546000198101908110611ad157fe5b9060005260206000209060020201836001016001840381548110611af157fe5b60009182526020808320845460029093020180546001600160a01b0319166001600160a01b0393841617815560019485015490850155908916825285905260408120558301805480611b3f57fe5b60008281526020812060026000199093019283020180546001600160a01b03191681556001015590555b5060019695505050505050565b60408051600160f81b6020808301919091526001600160601b03196060998a1b811660218401529790981b909616603587015260498601949094526069850192909252608984015260a9808401919091528151808403909101815260c99092019052805191012090565b6000600488888888888888604051602001808960ff1660ff1660f81b8152600101886001600160a01b03166001600160a01b031660601b8152601401876001600160a01b03166001600160a01b031660601b815260140186815260200185805190602001908083835b60208310611c685780518252601f199092019160209182019101611c49565b51815160209384036101000a600019018019909216911617905292019586525084810193909352506040808401919091528051808403820181526060909301905281519101209d9c50505050505050505050505050565b6001600160a01b03808416600090815260026020908152604080832093861683529083905290205480611d7f576040805180820182526001600160a01b0386811682528251600080825260208083019095528484019182526001878101805491820180825590835291869020855160039092020180546001600160a01b03191691909416178355905180519194611d5e92600285019290910190612378565b5050506001600160a01b038516600090815260208490526040902081905590505b6000826001016001830381548110611d9357fe5b9060005260206000209060030201905080600101600085815260200190815260200160002054600014611e0d576040805162461bcd60e51b815260206004820152601d60248201527f63616e27742061646420616c7265616479206f776e656420746f6b656e000000604482015290519081900360640190fd5b60028101805460018181018355600083815260208082209093018890559254968352909201909152604090209290925550505050565b6000611e5660038989898989898961226d565b98975050505050505050565b6040805160006020808301919091526001600160601b031960609b8c1b81166021840152998b1b8a1660358301529790991b9097166049890152605d880194909452607d870192909252609d86015260bd85015260dd808501919091528251808503909101815260fd909301909152815191012090565b604080516020808201949094528082019290925280518083038201815260609092019052805191012090565b80611f0f5761130a565b6001600160a01b03808416600090815260016020908152604080832093861683529083905290205480611fa857506040805180820182526001600160a01b0385811680835260006020808501828152600188810180548083018083559186528486209851600290910290980180546001600160a01b03191698909716979097178655905194019390935590815290849052919091208190555b82826001016001830381548110611fbb57fe5b60009182526020909120600160029092020101805490910190555050505050565b6000611e5660028989898989898961226d565b600080600080855190508481108061200957506021858203105b8061202b5750600060ff1686868151811061202057fe5b016020015160f81c14155b15612040575060009250839150829050612060565b6001602186016120588888840163ffffffff6122eb16565b935093509350505b9250925092565b60008060008060008060008088905060008a828151811061208457fe5b016020015160019092019160f81c90506005811461160257506000975088965087955085945061166e9350505050565b6001600160a01b0383166000908152602081905260408120548211156120dc57506000610a89565b506001600160a01b0392831660009081526020819052604080822080548490039055929093168352912080549091019055600190565b6000806000806000806000806000808a905060008c828151811061213257fe5b016020015160019092019160f81c9050600681146121665750600099508a985089975087965086955061220f945050505050565b6121708d83611fef565b9197509095509150856121995750600099508a985089975087965086955061220f945050505050565b6121a38d83611fef565b9197509094509150856121cc5750600099508a985089975087965086955061220f945050505050565b6121d68d83611fef565b9197509093509150856121ff5750600099508a985089975087965086955061220f945050505050565b5060019950975091955093509150505b9295509295909350565b60006122268584846119e3565b61223257506000612241565b61223d848484611f05565b5060015b949350505050565b600061225685848461177b565b61226257506000612241565b61223d848484611cbf565b6040805160f89990991b6001600160f81b0319166020808b0191909152606098891b6001600160601b031990811660218c015297891b881660358b01529590971b9095166049880152605d870192909252607d860152609d85015260bd808501929092528251808503909201825260dd909301909152805191012090565b600081602001835110156122fe57600080fd5b50016020015190565b8280548282559060005260206000209081019282156123475760005260206000209182015b8281111561234757825482559160010191906001019061232c565b506123539291506123b3565b5090565b508054600082559060005260206000209081019061237591906123b3565b50565b828054828255906000526020600020908101928215612347579160200282015b82811115612347578251825591602001919060010190612398565b6123cd91905b8082111561235357600081556001016123b9565b9056fe57616c6c657420646f65736e2774206f776e2073756666696369656e742062616c616e6365206f6620746f6b656ea265627a7a72315820842026d5c0b40863132e4e240e18261c29694c11f5de413a5336fa51b708b07864736f6c634300050f0032'
