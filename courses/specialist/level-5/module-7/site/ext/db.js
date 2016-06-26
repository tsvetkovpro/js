var conf = require('../config');
var db = require('mongoose');

db.connect(conf.get('db-cnn'));

module.exports = db;