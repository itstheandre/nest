import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksResolver } from './tasks.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './tasks.schema';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [MongooseModule.forFeature([TaskSchema]), UsersModule],
  providers: [TasksService, TasksResolver],
})
export class TasksModule {}
