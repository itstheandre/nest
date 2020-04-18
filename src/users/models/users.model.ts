import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(type => ID)
  _id: string;

  @Field()
  name: string;

  @Field(type => Int)
  age: number;

  @Field(type => String)
  occupation: string;
}
