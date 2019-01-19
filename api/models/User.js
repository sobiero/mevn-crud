const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: {type: String, required: true, max: 32 },
  last_name: {type: String, required: true, max: 32 },
  dob: {type:Date },
  national_id: {type:Number, required: true },
  activated: {type:Boolean, default: true },
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema)
