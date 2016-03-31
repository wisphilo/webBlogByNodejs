var setting = require('../setting'),
	Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;

// var dbApp = new Db(setting.db, new Server(setting.host, setting.port), {safe: true});
var dbApp = new Db('blog', new Server('localhost', 27017), {safe: true});
    
module.exports = setting;
