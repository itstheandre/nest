import * as mongoose from 'mongoose';

const bananaSchema = new mongoose.Schema({
  type: String,
  location: String,
});

export const BananaSchema = { name: 'Banana', schema: bananaSchema };
