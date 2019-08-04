const Migrations = artifacts.require("Migrations");
const ContractA = artifacts.require("ContractA");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(ContractA, 141);
};
