import { Injectable } from '@nestjs/common';
import { User } from '../models/users.model';
import { UsersService } from '../users.service';
import { OrderedNestDataLoader } from 'nestjs-graphql-dataloader';

@Injectable()
export class UserLoader extends OrderedNestDataLoader<User['_id'], User> {
  constructor(private readonly userService: UsersService) {
    super();
  }

  protected getOptions = () => ({
    query: async (keys: Array<string>) => {
      const allUsers = await this.userService.findManyById(keys);
      // console.log('allUsers:', allUsers);
      // console.log('allUsers:', allUsers);
      return allUsers;
    },
  });
}
