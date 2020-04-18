import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { BananasModule } from './bananas/bananas.module';
import { TasksModule } from './tasks/tasks.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DataLoaderInterceptor } from 'nestjs-graphql-dataloader';
import { MyContext } from './ContextTypeTest';
import { userLoader } from './users/loader/user2.loader';

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
      context: ({ req, res }: MyContext) => ({
        userLoader: userLoader(),
      }),
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UsersModule,
    BananasModule,
    TasksModule,
  ],
})
export class AppModule {}
