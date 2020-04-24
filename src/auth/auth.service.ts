import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { User } from 'src/users/models/users.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.userService.findOne(username);
    if (user?.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };

    return { accessToken: this.jwtService.sign(payload) };
  }

  async signUp(username: string, pass: string) {
    const user = await this.userService.addOne(username, pass);
    const payload = { username: user.username, sub: user.userId };
    return { accessToken: this.jwtService.sign(payload) };
  }

  async userSignUp(createDto: CreateUserDto) {
    const user: User = await this.usersService.createUser(createDto);
    console.log('user:', user);
    const payload = { username: user.name, userId: user._id };
    return { accessToken: this.jwtService.sign(payload) };
  }
}
