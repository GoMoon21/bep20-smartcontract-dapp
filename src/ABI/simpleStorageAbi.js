// import {abi as ERC1967Proxy} from './ERC1967Proxy.json'
// import {abi as ERC1967Upgrade} from './ERC1967Upgrade.json'
// import {abi as IBeacon} from './IBeacon.json'
// import {abi as Proxy} from './Proxy.json'
// import {abi as StorageSlot} from './StorageSlot.json'
import {abi as TransparentUpgradeableProxy} from './TransparentUpgradeableProxy.json'


export const simpleStorageAbi = [

  ...TransparentUpgradeableProxy
]


// export const simpleStorageAbi = [
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "_logic",
//               "type": "address"
//             },
//             {
//               "internalType": "bytes",
//               "name": "_data",
//               "type": "bytes"
//             }
//           ],
//           "stateMutability": "payable",
//           "type": "constructor"
//         },
//         {
//           "anonymous": false,
//           "inputs": [
//             {
//               "indexed": false,
//               "internalType": "address",
//               "name": "previousAdmin",
//               "type": "address"
//             },
//             {
//               "indexed": false,
//               "internalType": "address",
//               "name": "newAdmin",
//               "type": "address"
//             }
//           ],
//           "name": "AdminChanged",
//           "type": "event"
//         },
//         {
//           "anonymous": false,
//           "inputs": [
//             {
//               "indexed": true,
//               "internalType": "address",
//               "name": "beacon",
//               "type": "address"
//             }
//           ],
//           "name": "BeaconUpgraded",
//           "type": "event"
//         },
//         {
//           "anonymous": false,
//           "inputs": [
//             {
//               "indexed": true,
//               "internalType": "address",
//               "name": "implementation",
//               "type": "address"
//             }
//           ],
//           "name": "Upgraded",
//           "type": "event"
//         },
//         {
//           "stateMutability": "payable",
//           "type": "fallback"
//         },
//         {
//           "stateMutability": "payable",
//           "type": "receive"
//         },
//         {
//             "anonymous": false,
//             "inputs": [
//               {
//                 "indexed": false,
//                 "internalType": "address",
//                 "name": "previousAdmin",
//                 "type": "address"
//               },
//               {
//                 "indexed": false,
//                 "internalType": "address",
//                 "name": "newAdmin",
//                 "type": "address"
//               }
//             ],
//             "name": "AdminChanged",
//             "type": "event"
//           },
//           {
//             "anonymous": false,
//             "inputs": [
//               {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "beacon",
//                 "type": "address"
//               }
//             ],
//             "name": "BeaconUpgraded",
//             "type": "event"
//           },
//           {
//             "anonymous": false,
//             "inputs": [
//               {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "implementation",
//                 "type": "address"
//               }
//             ],
//             "name": "Upgraded",
//             "type": "event"
//           },
//           {
//             "inputs": [],
//             "name": "implementation",
//             "outputs": [
//               {
//                 "internalType": "address",
//                 "name": "",
//                 "type": "address"
//               }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//           },
//           {
//             "stateMutability": "payable",
//             "type": "fallback"
//           },
//           {
//             "stateMutability": "payable",
//             "type": "receive"
//           },
//           {
//             "inputs": [
//               {
//                 "internalType": "address",
//                 "name": "_logic",
//                 "type": "address"
//               },
//               {
//                 "internalType": "address",
//                 "name": "admin_",
//                 "type": "address"
//               },
//               {
//                 "internalType": "bytes",
//                 "name": "_data",
//                 "type": "bytes"
//               }
//             ],
//             "stateMutability": "payable",
//             "type": "constructor"
//           },
//           {
//             "anonymous": false,
//             "inputs": [
//               {
//                 "indexed": false,
//                 "internalType": "address",
//                 "name": "previousAdmin",
//                 "type": "address"
//               },
//               {
//                 "indexed": false,
//                 "internalType": "address",
//                 "name": "newAdmin",
//                 "type": "address"
//               }
//             ],
//             "name": "AdminChanged",
//             "type": "event"
//           },
//           {
//             "anonymous": false,
//             "inputs": [
//               {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "beacon",
//                 "type": "address"
//               }
//             ],
//             "name": "BeaconUpgraded",
//             "type": "event"
//           },
//           {
//             "anonymous": false,
//             "inputs": [
//               {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "implementation",
//                 "type": "address"
//               }
//             ],
//             "name": "Upgraded",
//             "type": "event"
//           },
//           {
//             "stateMutability": "payable",
//             "type": "fallback"
//           },
//           {
//             "stateMutability": "payable",
//             "type": "receive"
//           },
//           {
//             "inputs": [],
//             "name": "admin",
//             "outputs": [
//               {
//                 "internalType": "address",
//                 "name": "admin_",
//                 "type": "address"
//               }
//             ],
//             "stateMutability": "nonpayable",
//             "type": "function"
//           },
//           {
//             "inputs": [],
//             "name": "implementation",
//             "outputs": [
//               {
//                 "internalType": "address",
//                 "name": "implementation_",
//                 "type": "address"
//               }
//             ],
//             "stateMutability": "nonpayable",
//             "type": "function"
//           },
//           {
//             "inputs": [
//               {
//                 "internalType": "address",
//                 "name": "newAdmin",
//                 "type": "address"
//               }
//             ],
//             "name": "changeAdmin",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//           },
//           {
//             "inputs": [
//               {
//                 "internalType": "address",
//                 "name": "newImplementation",
//                 "type": "address"
//               }
//             ],
//             "name": "upgradeTo",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//           },
//           {
//             "inputs": [
//               {
//                 "internalType": "address",
//                 "name": "newImplementation",
//                 "type": "address"
//               },
//               {
//                 "internalType": "bytes",
//                 "name": "data",
//                 "type": "bytes"
//               }
//             ],
//             "name": "upgradeToAndCall",
//             "outputs": [],
//             "stateMutability": "payable",
//             "type": "function"
//           }

      
// ];