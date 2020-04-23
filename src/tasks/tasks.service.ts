import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectModel as InjMod } from 'nestjs-typegoose';
import { Model } from 'mongoose';
import { Task } from './model/tasks.model';
import { CreateTaskDto } from './dto/CreateTask.dto';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class TasksService {
  constructor(
    // @InjectModel('Task') private readonly taskModel: Model<Task>
    @InjMod(Task) private readonly taskModel: ReturnModelType<typeof Task>,
  ) {}

  async createTask(createTask: CreateTaskDto) {
    return this.taskModel.create(createTask);
  }

  async getAllTasks() {
    return this.taskModel.find({});
  }

  async getTasksBanana() {
    return this.taskModel.find({});
  }
}
