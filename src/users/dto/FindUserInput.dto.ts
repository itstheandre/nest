import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class FindUserDto {
  @Field(type => ID)
  _id: string;
}
