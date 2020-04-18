import { Resolver, Query } from '@nestjs/graphql';
import { Banana } from './bananas.model';
import { BananasService } from './bananas.service';

@Resolver(of => Banana)
export class BananasResolver {
  constructor(private readonly bananasService: BananasService) {}

  @Query(() => [Banana])
  async getAllBananas() {
    return this.bananasService.getAllBananas();
  }
}
