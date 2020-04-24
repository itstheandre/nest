import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}
  @Get()
  hello() {
    return 'hey';
  }

  @Get('users')
  async allUsers() {
    return this.userService.getAll();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log('req:', req);
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('auth/signups')
  signUp(@Body('username') username: string, @Body('pass') pass: string) {
    return this.authService.signUp(username, pass);
  }
}
