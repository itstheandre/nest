import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './models/users.model';
import { CreateUserDto } from './dto/CreateUser.dto';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => String)
  hello() {
    return 'hello';
  }

  @Query((returns) => [User])
  async users() {
    return this.userService.findAll();
  }
  @Query((returns) => User)
  async user(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Mutation((returns) => User)
  async createUser(@Args() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Mutation((returns) => User)
  async deleteUser(@Args('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
