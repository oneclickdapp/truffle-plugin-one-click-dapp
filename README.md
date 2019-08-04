## :chocolate_bar: :one: :collision: Truffle One Click Plugin

**Instantly create an interface for your smart contract directly from Truffle**

:trophy: 3rd Place Prize at _Trufflecon 2019 Hackathon_

### Install

Inside your Truffle project

`npm install --save-dev truffle-one-click-plugin`

Next, add the plugin to `truffle-config.js` like this:

```js
module.exports = {
  /* ... rest of truffle-config */

  plugins: ['oneclick']
};
```

### Usage

To use the plugin

`truffle run oneclick`

> _Note: Be sure you've migrated your contracts using Ganache, testnet, mainnet, etc. `truffle migrate`_

For each deployed contract you will receive an output like this:

```
Access Migrations at:

    https://oneclickdapp.com/banjo-truck


Access ContractA at:

    https://oneclickdapp.com/front-cliff
```

#### Created in 1 hour :hourglass_flowing_sand: at Trufflecon 2019 by:

- [Ethan Wessel](http://twitter.com/ejwessel)

- [Patrick Gallagher](http://twitter.com/pi0neerpat)
