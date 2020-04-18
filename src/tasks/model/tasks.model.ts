import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/users/models/users.model';

@ObjectType()
export class Task {
  @Field(type => ID)
  _id: string;

  @Field()
  title: string;

  @Field(type => Boolean, { defaultValue: false })
  completed: boolean;

  @Field(type => Boolean, { defaultValue: false })
  assigned: boolean;

  @Field(type => User, { nullable: true })
  owner: string;
}
