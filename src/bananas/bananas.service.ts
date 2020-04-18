import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Banana } from './bananas.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BananasService {
  constructor(
    @InjectModel('Banana') private readonly bananaModel: Model<Banana>,
  ) {}

  getAllBananas() {
    return this.bananaModel.find({});
  }
}
