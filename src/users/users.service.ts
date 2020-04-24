import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectModel as InjMod } from 'nestjs-typegoose';
import { Model } from 'mongoose';
// import { User } from './interface/users.interface';
import { CreateUserDto } from './dto/CreateUser.dto';
import { User } from './models/users.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { hash } from 'bcryptjs';

@Injectable()
export class UsersService {
  // constructor()
  constructor(
    // @InjectModel('User') private readonly userModel: Model<User>,
    @InjMod(User) private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  async findAll() {
    return await this.userModel.find({});
  }

  async findManyById(ids: string[]) {
    const usersList = await this.userModel.find({ _id: { $in: ids } });
    // console.log('usersList:', usersList);
    return usersList;
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id);
    // console.log('user:', user);
    return user;
  }

  async createUser(createUserDto: CreateUserDto) {
    const { name, password: toHash, age, occupation } = createUserDto;

    const password = await hash(toHash, 10);
    console.log('password:', password);

    const newUser = { name, password, age, occupation };

    return await this.userModel.create(newUser);
  }

  async deleteUser(id: string) {
    console.log(id);
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    console.log('deleteUser:', deletedUser);
    return deletedUser;
  }
}
