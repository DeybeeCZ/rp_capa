/**
 * @author Deybee Chávez Zapata <deybeecz@gmail.com>
 * Users
 */
'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BookSchema = new Schema({
  id:  String,
  name: String,
  productCode: String,
  releaseDate: String,
  description:  String,
  author: String,
  genre: String,
  specifications: String,
  inStock: {type:Boolean, default:true},
  price:Number,
  birthday: Date,
  starRating:String,
  imageUrl:String,
  createAt:{type:Date,default:Date.now},
  updateAt:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Book', BookSchema);
