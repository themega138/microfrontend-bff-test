import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './item.schema';

@Injectable()
export class ItemService {
  constructor(@InjectModel(Item.name) private readonly itemModel: Model<ItemDocument>) {}

  async create(name: string, description?: string) {
    const item = new this.itemModel({ name, description });
    return item.save();
  }

  async findAll() {
    return this.itemModel.find().lean();
  }
}
