import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './users.schema';
import { UsersResolver } from './users.resolver';
import { UserLoader } from './loader/users.loader';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/users.model';

@Module({
  imports: [
    // MongooseModule.forFeature([UserSchema]),
    TypegooseModule.forFeature([User]),
  ],
  providers: [UsersService, UsersResolver, UserLoader],
  exports: [UsersService, UserLoader],
})
export class UsersModule {}
