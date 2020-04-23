import { Injectable } from '@nestjs/common';
import { User } from '../models/users.model';
import { UsersService } from '../users.service';
import { OrderedNestDataLoader } from 'nestjs-graphql-dataloader';

@Injectable()
export class UserLoader extends OrderedNestDataLoader<string, User> {
  constructor(private readonly userService: UsersService) {
    super();
  }

  protected getOptions = () => ({
    propertyKey: '_id',
    query: async (keys: string[]) => {
      const allUsers = await this.userService.findManyById(keys);
      const [user] = allUsers;
      console.log('allUsers:', Object.keys(user['_doc']));

      const arr = allUsers.map((el) => {
        return { ...el['_doc'], _id: el['_doc']._id.toString() };
      });

      return arr;
    },
  });
}

// const allUsers = await this.userService.findManyById(keys);
//       console.log('allUsers:', allUsers);
//       // console.log('allUsers:', allUsers);
//       return allUsers;
