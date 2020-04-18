import * as mongoose from 'mongoose';
const { Schema } = mongoose;

const tasksSchema = new Schema({
  title: String,
  completed: Boolean,
  assigned: Boolean,
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
});

export const TaskSchema = { name: 'Task', schema: tasksSchema };
