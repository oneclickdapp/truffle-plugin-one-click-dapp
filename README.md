## :chocolate_bar: :one: :collision: Truffle One Click Plugin

**Create a persistent interface for any smart contract directly from a Truffle project**. :trophy: Winner 3rd Place at _Trufflecon 2019 Hackathon_

<img width=300 alignText="center" src="./oneclickexample.png"/>

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

> Note: Be sure you've migrated your contracts using Ganache, testnet, mainnet, etc. using `truffle migrate`

For each deployed contract you will receive an output like this:
I

```
ShipA (8 functions) on network 4447 can be used at:

https://oneclickdapp.com/saga-north
```

You can use whatever network you like on the oneclickdapp interface page. Just change the network in Metamask, and ignore the warning message!

If you have too many interfaces generated, then delete `/build` folder and run `truffle migrate` to reduce the number of different networks.

#### Created with :chocolate_bar: at Trufflecon 2019:

- [Ethan Wessel](http://twitter.com/ejwessel)

- [Patrick Gallagher](http://twitter.com/pi0neerpat)
