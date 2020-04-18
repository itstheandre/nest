import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class Banana {
  @Field(type => ID)
  id: string;

  @Field()
  type: string;

  @Field(type => String)
  location: string;
}
