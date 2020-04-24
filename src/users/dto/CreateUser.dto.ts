import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class CreateUserDto {
  @Field()
  name: string;

  @Field()
  password: string;

  @Field((type) => Int)
  age: number;

  @Field()
  occupation: string;
}
