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
    propertyKey: '_id',
    query: async (keys: Array<string>) => {
      // console.log('keys:', keys);
      const allUsers = await this.userService.findManyById(keys);
      console.log('allUsers:', allUsers);

      return allUsers;
    },
  });
}

// const allUsers = await this.userService.findManyById(keys);
//       console.log('allUsers:', allUsers);
//       // console.log('allUsers:', allUsers);
//       return allUsers;
