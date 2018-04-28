/**
 * @author Deybee Chávez Zapata <deybeecz@gmail.com>
 * General block from mongoDB's models
 */

// Get dependencies
var mongoose = require('mongoose');
var utils = require('../../utils');
var cnt=utils.connection.getMongoAdapter();

// Connect to MongoDb
mongoose.connect(cnt.driver+'://'+cnt.host+':'+cnt.port+'/'+cnt.database,{user:cnt.user,pass:cnt.pwd});

// Add properties to bd object
var db ={};
db.Books = require('./book')
// db.Thing = require('./Thing')

module.exports = db;
