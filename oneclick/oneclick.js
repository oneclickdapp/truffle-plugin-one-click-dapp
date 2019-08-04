var fs = require('fs'); // include file system module
const axios = require('axios');
var path = require('path');

const ONE_CLICK_DAPP_URL = 'https://oneclickdapp.com';

module.exports = async config => {
  // console.log(config.contracts_build_directory);
  const contractBuildDir = path.join(
    config._values.working_directory,
    'build',
    'contracts'
  );

  const filenames = fs.readdirSync(contractBuildDir);

  let results = [];
  filenames.forEach(filename => {
    const filePath = path.join(contractBuildDir, filename);
    const r = parseState(filePath);
    results = results.concat(r);
    results.forEach(result => {
      axios
        .post(`${ONE_CLICK_DAPP_URL}/contracts`, {
          contractName: result.contractName,
          contractAddress: result.address,
          abi: result.abi,
          network: result.networkId,
          creatorAddress: '0x'
        })
        .then(res => {
          console.log(
            `\n\nAccess ${
              result.contractName
            } at:\n\n    ${ONE_CLICK_DAPP_URL}/${res.data.mnemonic}`
          );
        })
        .catch(err => {
          console.log(err.message);
        });
    });
  });
};

function parseState(dataSource) {
  let results = [];

  let fileContents = null;
  try {
    fileContents = fs.readFileSync(
      dataSource, // "/path/to/file.json"
      'utf-8'
    );
  } catch (err) {
    console.error(err);
    return;
  }

  let jsonParsed = null;
  try {
    jsonParsed = JSON.parse(fileContents);
  } catch (err) {
    console.error(err);
    return;
  }

  const contractName = jsonParsed.contractName;
  const networkIds = Object.keys(jsonParsed.networks);

  if (networkIds.length < 1) {
    console.log(
      `No network listed for ${contractName}.sol, Please run: truffle migrate`
    );
  }

  networkIds.forEach(networkId => {
    const deployment = jsonParsed.networks[networkId];
    const address = deployment.address;

    const result = {
      contractName: contractName,
      networkId: networkId,
      address: address
    };

    results.push(result);
  });

  return results;
}
