var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  

var StateSchema = new Schema({
  state : {
    type : String, required: true
  }
});

exports.StateSchema = StateSchema;
module.exports = mongoose.model('State', StateSchema);
