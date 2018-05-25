'use strict';

const mongoose = require('mongoose');

const { MONGODB_URI } = require('../config');
const Cheese = require('../models/cheeses');
let seedCheeses = require('../seed/cheeses.json');
let mapped = seedCheeses.map((cheese)=> {return (cheese);});
console.log("this is the mapped cheeses:"mapped);
mongoose.connect(MONGODB_URI)
  .then(() => mongoose.connection.db.dropDatabase())
  .then(() => {
    return Promise.all([
      Cheese.insertMany(mapped),
      Cheese.createIndexes()
    ]);
  })
  .then(() => mongoose.disconnect())
  .catch(err => {
    console.error(`ERROR: ${err.message}`);
    console.error(err);
  });