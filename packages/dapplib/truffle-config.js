require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name rival office pulse heavy ensure slot general'; 
let testAccounts = [
"0xd88ae9a389528bfe8c2f20b9e0c27e4658bb919e1ac726e3ccbf1a8089cbb901",
"0xc7f7a7a77d180a5e8520cfd9561b8f645bc96bd0547a461754ae976616d5c1a6",
"0x9ef35a23f5a286225bb2191d1fd25b5017c4458cc8e2af460bf1293f06768d8c",
"0x2f2074ec69451661112937b8049ba82406c2be3ebe06e9cca2306aafdd144d70",
"0xddb502d9909c2338b258193f3cab7587c66bdcdb62f0c5d38e6951c6ba25395e",
"0x1a0e24970499b6f749408e697d90ef36d32f1c3a7b60c7256a5d1966a96cf338",
"0xc97de161890d81de2004c74118fada8da147ae088825697162dbaf5e0547285e",
"0xf06cadef72fb2a99c7038e45c0026f4f7ecc9a1ad0423d473f7c564a1a43dfaa",
"0x6f448eaac6f9976b2452c486e76afb65232f521cc8cd8c02b04dbf8dcd0fcbe2",
"0xc378b9205213fd50ef86ad6849c86e8a85faa93f44b80c72853f47a9a1340473"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
