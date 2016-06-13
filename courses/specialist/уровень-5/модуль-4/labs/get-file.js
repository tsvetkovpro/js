var fs = require('fs');

function getFile (name) {
    return fs.createReadStream(name);
}

module.exports = getFile;