import { Module } from '@nestjs/common';
import { BananasService } from './bananas.service';
import { BananasResolver } from './bananas.resolver';
import { BananaSchema } from './banana.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([BananaSchema])],
  providers: [BananasService, BananasResolver],
})
export class BananasModule {}
