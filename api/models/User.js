var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: String,
  last_same: String,
  dob: Date,
  national_id: Number,
  activated: {type:Boolean, default: true },
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
