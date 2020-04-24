import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { User } from 'src/users/models/users.model';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';

@Resolver((of) => User)
export class AuthResolver {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  @Mutation((returns) => User)
  async createAUser(@Args() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
