const metadata = require('./package.json');

const POST_INSTALL_PROMPT = `\n\n\nADDITIONAL STEP REQUIRED!\n\nPlease add ${
  metadata.name
} to the 'plugins' section of your truffle-config.js\n\nmodule.exports = {
  /* ... rest of truffle-config */

  plugins: ['oneclick']
};\n\n`;

console.log(POST_INSTALL_PROMPT);
