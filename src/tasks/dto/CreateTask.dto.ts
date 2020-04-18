import { ArgsType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/users/models/users.model';

@ArgsType()
export class CreateTaskDto {
  @Field()
  title: string;

  @Field(type => Boolean, { defaultValue: false })
  completed?: boolean;

  @Field(type => Boolean, { defaultValue: false })
  assigned?: boolean;

  @Field(type => ID, { nullable: true })
  owner?: User;
}
