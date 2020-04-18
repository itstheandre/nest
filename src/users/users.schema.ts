import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  occupation: String,
});

export const UserSchema = { name: 'User', schema: userSchema };
