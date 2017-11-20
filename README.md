Webpack JScrambler chunk scrambling demo
----------------------------------------

This is an example of Webpack creating multiple chunks that are obfuscated through JScrambler. Not all names are obfuscated although they are not exposed outside the chunks.

Instructions:

 * `npm install`
 * copy `jscrambler.config.js.example` to `jscrambler.config.js` and fill in API credentials and application Id
 * run `npm start`
 * open console in browser (Chrome or Firefox), check logged modules and observe that not all names are scrambled
