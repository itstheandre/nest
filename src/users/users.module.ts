import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './users.schema';
import { UsersResolver } from './users.resolver';
import { UserLoader } from './loader/users.loader';

@Module({
  imports: [MongooseModule.forFeature([UserSchema])],
  providers: [UsersService, UsersResolver, UserLoader],
  exports: [UsersService, UserLoader],
})
export class UsersModule {}
