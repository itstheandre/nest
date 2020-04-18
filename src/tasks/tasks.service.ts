import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './model/tasks.model';
import { CreateTaskDto } from './dto/CreateTask.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async createTask(createTask: CreateTaskDto) {
    return this.taskModel.create(createTask);
  }

  async getAllTasks() {
    return this.taskModel.find({});
  }
}
