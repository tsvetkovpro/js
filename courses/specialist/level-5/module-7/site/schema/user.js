var crypt = require('crypto');
var db = require('../ext/db');


var schemaUser = new db.Schema({

    name: {
        type: String,
        require: true,
        unique: true
    },

    hash: {
        type: String,
        require: true
    },

    salt: {
        type: String,
        require: true
    },

    created: {
        type: Date,
        default: Date.now()
    }
});

var salt = 'salt';
var pass = '1234';
var result = getHash(pass, salt);

console.log(result);

function getHash(password, salt) {
    return crypt.createHmac('sha1', salt).update(password).digest('hex');
}

