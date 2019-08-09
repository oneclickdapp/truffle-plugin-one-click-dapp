var fs = require('fs'); // include file system module
const axios = require('axios');
var path = require('path');
var cl = require('colors-cli');

const ONE_CLICK_DAPP_URL = 'https://oneclickdapp.com';
const STARTUP_MESSAGE =
  '\nNeat contracts! (^̮^) You are doing some cool stuff!\n>>> Generating interface(s)....';

const contract = cl.cyan;
const welcome = cl.cyan;
const url = cl.yellow;

const getContractText = (contractName, network, abi, mnemonic) => {
  const abiLength = abi.length;
  return `\n${contract(contractName)} (${
    abi.length
  } functions) on network ${network} can be used at:\n\n${url(
    `${ONE_CLICK_DAPP_URL}/${mnemonic}`
  )}\n`;
};

const getNetworkMSG = contractName => {
  return `\nNo network listed for ${contract(
    contractName
  )}, Please run: truffle migrate\nIf this doesn't fix the issue, check that the contract is being deployed properly.`;
};

module.exports = config => {
  console.log(welcome(STARTUP_MESSAGE));

  const contractBuildDir = path.join(
    config._values.working_directory,
    'build',
    'contracts'
  );

  const filenames = fs.readdirSync(contractBuildDir, (err, data) => {
    if (err) {
      throw err;
    }
    return data;
  });

  filenames.forEach(filename => {
    const filePath = path.join(contractBuildDir, filename);
    createInterface(filePath);
  });
};

function createInterface(dataSource) {
  let fileContents = null;
  let jsonParsed = null;
  try {
    fileContents = fs.readFileSync(
      dataSource, // "/path/to/file.json"
      'utf-8'
    );
  } catch (err) {
    console.error(err);
    return;
  }
  try {
    jsonParsed = JSON.parse(fileContents);
  } catch (err) {
    console.error(err);
    return;
  }

  const abi = jsonParsed.abi;
  const contractName = jsonParsed.contractName;
  const networkIds = Object.keys(jsonParsed.networks);

  if (networkIds.length < 1) {
    console.log(getNetworkMSG(contractName));
  }

  networkIds.forEach(networkId => {
    const deployment = jsonParsed.networks[networkId];
    const address = deployment.address;

    axios
      .post(`${ONE_CLICK_DAPP_URL}/contracts`, {
        contractName: contractName,
        contractAddress: address,
        abi: abi,
        network: networkId,
        creatorAddress: 'truffle-plugin'
      })
      .then(res => {
        console.log(
          getContractText(contractName, networkId, abi, res.data.mnemonic)
        );
      })
      .catch(err => {
        console.log(err.message);
      });
  });
}
