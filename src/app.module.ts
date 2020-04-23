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
import * as mongoose from 'mongoose';
mongoose.set('debug', true);

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: DataLoaderInterceptor,
    },
  ],
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: 'schema.graphql',
    }),
    // MongooseModule.forRoot('mongodb://localhost/nest'),
    TypegooseModule.forRoot('mongodb://localhost/nest', {
      useNewUrlParser: true,
    }),
    UsersModule,
    // BananasModule,
    TasksModule,
  ],
})
export class AppModule {}
