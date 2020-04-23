import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { prop, DocumentType } from '@typegoose/typegoose';

@ObjectType()
export class User {
  @Field((type) => ID)
  _id: string;

  @Field()
  @prop()
  name: string;

  @Field((type) => Int)
  @prop()
  age: number;

  @Field((type) => String)
  @prop()
  occupation: string;

  public getName(this: DocumentType<User>) {
    return this.name;
  }
}
