var mongoose = require('mongoose');

var reviewScheme = new mongoose.Schema({
  author: String,
  rating: {type: Number, required: true, min: 0, max: 5},
  reviewText: String,
  createdON: {type: Date, 'default': Date.now}
});

var openingTimeSchema = new mongoose.Schema({
  days: {type: String, required: true},
  opening: String,
  closing: String,
  closed: {type: Boolean, required: true}
});

var locationSchema = new mongoose.Schema({
  name: {type: String, required: true},
  address: String,
  rating: {type: Number, 'default': 0, min: 0, max: 5},
  coords: {type: [Number], index: '2dsphere'},
  openingTimes: [openingTimeSchema],
  review: [reviewScheme]
});

mongoose.model('Location', locationSchema, 'Locations');