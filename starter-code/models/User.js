const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  googleID: String,
},{
  timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
});

const User = mongoose.model('users', userSchema);
module.exports = User;