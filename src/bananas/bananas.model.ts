import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType()
export class Banana extends Document {
  @Field((type) => ID)
  id: string;

  @Field()
  type: string;

  @Field((type) => String)
  location: string;
}
