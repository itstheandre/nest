import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UserService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async getAll() {
    return this.users;
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async addOne(username: string, password: string): Promise<User> {
    console.log('password:', password);
    const user = { username, password, userId: this.users.length };
    this.users.push(user);
    return user;
  }
}
