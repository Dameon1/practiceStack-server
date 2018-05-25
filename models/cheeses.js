'use strict';

const mongoose = require('mongoose');
const cheeseSchema = mongoose.Schema({
  title: String,
});
module.exports = mongoose.model('Cheese', cheeseSchema);


cheeseSchema.set('toObject', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

