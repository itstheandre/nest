import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interface/users.interface';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UsersService {
  // constructor()
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findAll() {
    return await this.userModel.find({});
  }

  async findManyById(ids: string[]) {
    // console.log('ids:', ids);
    const usersList = await this.userModel
      .find()
      .where('_id')
      .in(ids);
    // console.log('usersList:', usersList);
    return usersList;
  }

  async findOne(id: string) {
    const user = await this.userModel.findOne(id);
    console.log('user:', user);
    return user;
  }

  async createUser(createUserDto: CreateUserDto) {
    return await this.userModel.create(createUserDto);
  }

  async deleteUser(id: string) {
    console.log(id);
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    console.log('deleteUser:', deletedUser);
    return deletedUser;
  }
}
