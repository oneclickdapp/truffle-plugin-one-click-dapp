## :chocolate_bar: :one: :collision: Truffle One Click Plugin

**Create a persistent interface for your smart contract(s) instantly**

:trophy: Winner 3rd Place at _Trufflecon 2019 Hackathon_

### Install

From within your Truffle project directory, run

`npm i oneclick`

Next, add the plugin to the `truffle-config.js` file, like this:

```js
module.exports = {
  /* ... rest of truffle-config */

  plugins: ['oneclick']
};
```

### Usage

`truffle run oneclick`

> _Note: Be sure you've migrated your contracts using Ganache, testnet, mainnet, etc. `truffle migrate`_

For each deployed contract you will receive an output like this:

```
Access Migrations at:

    https://oneclickdapp.com/banjo-truck


Access ContractA at:

    https://oneclickdapp.com/front-cliff
```

Note: You can use whatever network you like on your interface page. Just change the network in Metamask, and ignore the warning message!

#### Created in 1 hour at Trufflecon 2019 by:

- [Ethan Wessel](http://twitter.com/ejwessel)

- [Patrick Gallagher](http://twitter.com/pi0neerpat)
