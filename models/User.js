const {Schema, model} = require('mongoose');

const schema = new Schema({
  uniqId: {type: Number, required: false},
	name: {type: String, required: true},
	email: {type: String, required: true, unique: true}, 
	password: {type: String, required: true}, 
	registrationDate: {type: String, required: true},
  lastLoginDate: {type: String, required: false},
  userStatus: {type: String, required: false}
})

module.exports = model('User', schema)