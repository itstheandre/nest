import {
  Resolver,
  Mutation,
  Args,
  ResolveField,
  Parent,
  Query,
  Context,
} from '@nestjs/graphql';
import { Task } from './model/tasks.model';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/CreateTask.dto';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/models/users.model';
import * as DataLoader from 'dataloader';
import { Loader } from 'nestjs-graphql-dataloader';
import { UserLoader } from 'src/users/loader/users.loader';
import { MyContext } from 'src/ContextTypeTest';

@Resolver(of => Task)
export class TasksResolver {
  constructor(
    private readonly taskService: TasksService,
    private readonly userService: UsersService,
  ) {}

  @Mutation(returns => Task)
  async createTask(@Args() createTaskDto: CreateTaskDto) {
    console.log('createTaskDto:', createTaskDto);
    return this.taskService.createTask(createTaskDto);
  }

  @Query(returns => [Task])
  async tasks() {
    return this.taskService.getAllTasks();
  }

  @ResolveField(returns => User)
  async owner(
    @Parent() task: Task,
    @Loader(UserLoader) userLoader: DataLoader<string, User>,
  ) {
    try {
      const allUsers = await userLoader.load(task.owner.toString());
      // console.log('allUsers: inside query resolver', allUsers);
      // const allUsers2 = await this.userService.findOne(task.owner);
      return allUsers;
    } catch (e) {
      console.log('e:', e.message);
    }

    // return this.userService.findOne(task.owner);
  }
  // @ResolveField()
  // async owner(@Parent() task: Task, @Context() ctx: MyContext) {
  //   const allUsers = await ctx.userLoader.load(task.owner);
  //   console.log('allUsers:', allUsers);
  //   // console.log('allUsers:', allUsers);
  // }
}
