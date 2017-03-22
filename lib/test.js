const util = require('./util');

//bump versions (patch, minor, major)
const patch = util.bump('3.3.3', 'patch');
const minor = util.bump('3.3.3', 'minor');
const major = util.bump('3.3.3', 'major');


util.debug('patch', patch, true);
util.debug('minor', minor, true);
util.debug('major', major, false);
