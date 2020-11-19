import mongoose from 'mongoose'
const Schema: typeof mongoose.Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  email: String,
  bio: String
}, {
  collection: 'testuser'
})

module.exports = mongoose.model('UserModel', UserSchema)