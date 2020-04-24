import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
// import { BananasModule } from './bananas/bananas.module';
import { TasksModule } from './tasks/tasks.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DataLoaderInterceptor } from 'nestjs-graphql-dataloader';
// import { userLoader } from './users/loader/user2.loader';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import * as mongoose from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
mongoose.set('debug', true);

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: DataLoaderInterceptor,
    },
    AppService,
  ],
  imports: [
    // GraphQLModule.forRoot({
    //   debug: false,
    //   playground: true,
    //   autoSchemaFile: 'schema.graphql',
    // }),
    // // MongooseModule.forRoot('mongodb://localhost/nest'),
    // TypegooseModule.forRoot('mongodb://localhost/nest', {
    //   useNewUrlParser: true,
    // }),
    // UsersModule,
    // // BananasModule,
    // TasksModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
