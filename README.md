## Truffle Plugin - One Click Dapp

Create a smart contract interface instantly from a Truffle folder

### Install

Within your Truffle project

`npm init -y`

Then install the plugin using:

`npm install --save-dev git+https://github.com/pi0neerpat/truffle-plugin-one-click-dapp`

Add the following to your truffle-config.js

```
  plugins: [
    "oneclick"
  ]
```

### Usage

To use the plugin

`truffle run oneclick`

> Note: Be sure you've migrated your contracts using Ganache, testnet, mainnet, etc. `truffle migrate`

For each deployed contract you will receive an output like this:

```
Access Migrations at:

    https://oneclickdapp.com/banjo-truck


Access ContractA at:

    https://oneclickdapp.com/front-cliff
```

### Created with <3 for Trufflecon 2019 Hackathon

- [Ethan Wessel](http://twitter.com/ejwessel)

- [Patrick Gallagher](http://twitter.com/pi0neerpat)
