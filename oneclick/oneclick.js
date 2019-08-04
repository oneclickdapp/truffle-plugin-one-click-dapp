module.exports = async config => {
  // config._ has the command arguments.
  // config_[0] is the command name, e.g. "hello" here.
  // config_[1] starts remaining parameters.
  console.log(artifacts);
  if (config.help) {
    console.log(`Usage: truffle run hello [name]`);
    done(null, [], []);
    return;
  }

  let name = config._.length > 1 ? config._[1] : 'World!';
  console.log(`Hello, ${name}`);
};
