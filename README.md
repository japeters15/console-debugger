# console-debugger
Utility for managing console.log statements to external file with timestamp.

# Installation
Inside of terminal type, "npm install console-debugger --sav-dev".

# Usage
In order to start the debug tool you must add "DEBUG=true" in the front of "nodemon lib/util.js"

If done correctly you should see three versions (Major, Minor, and Patch). Your test file should look like what is shown below:

"const util = require('utility_debug_tool');

//bump versions (patch, minor, major)
const patch = util.bump('3.3.3', 'patch');
const minor = util.bump('3.3.3', 'minor');
const major = util.bump('3.3.3', 'major');

// Success messages
util.debug('patch', patch, true);
util.debug('minor', minor, true);

// Error Messages
util.debug('major', major, false);"

## Code Ship Status
[ ![Codeship Status for wheezykw/console-debugger](https://app.codeship.com/projects/09cec010-f01a-0134-080a-3eb3ee5cdf25/status?branch=master)](https://app.codeship.com/projects/208990)
