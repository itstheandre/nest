import * as DataLoader from 'dataloader';
import { UsersService } from '../users.service';
import { User } from '../models/users.model';

// export const userLoader = () =>
//   new DataLoader(async (keys: string[]) => {
//     console.log('data loader inside');
//     const userService = new UsersService(User);
//     const users = await userService.findManyById(keys);
//     console.log('users:', users);

//     return keys.map((userId) => users.find((user) => user._id === userId));
//   });
