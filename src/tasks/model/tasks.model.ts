import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/users/models/users.model';
// import { Document } from 'mongoose';

import { prop, DocumentType, Ref } from '@typegoose/typegoose';

@ObjectType()
export class Task {
  @Field((type) => ID)
  _id: string;

  @Field()
  @prop()
  title: string;

  @Field((type) => Boolean, { defaultValue: false })
  @prop()
  completed: boolean;

  @Field((type) => Boolean, { defaultValue: false })
  @prop()
  assigned: boolean;

  @Field((type) => User, { nullable: true })
  @prop({ ref: 'User' })
  owner: Ref<User>;
}
