var fs = require('fs'); // include file system module
const axios = require('axios');
var path = require('path');

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
    console.log(results);
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
