/**
 * Outputs `Hello, World!` when running `truffle run hello`,
 * or `Hello, ${name}` when running `truffle run hello [name]`
 * @param {Config} config - A truffle-config object.
 * Has attributes like `truffle_directory`, `working_directory`, etc.
 * @param {(done|callback)} [done=done] - A done callback, or a normal callback.
 */
module.exports = (config, done) => {
    // config._ has the command arguments.
    // config_[0] is the command name, e.g. "hello" here.
    // config_[1] starts remaining parameters.
    let name = config._.length > 1 ? config._[1] : 'World!';
    console.log(`Hello, ${name}`);
    done();
}
