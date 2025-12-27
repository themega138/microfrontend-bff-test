import { Body, Controller, Get, Post } from '@nestjs/common';
import { DummyService } from './dummy.service';
import { ItemService } from './item.service';

@Controller('api')
export class DummyController {
  constructor(
    private readonly dummyService: DummyService,
    private readonly itemService: ItemService,
  ) {}

  @Get('dummy')
  getDummy() {
    return this.dummyService.getGreeting();
  }

  @Get('items')
  async getItems() {
    return this.itemService.findAll();
  }

  @Post('items')
  async createItem(@Body() body: { name: string; description?: string }) {
    return this.itemService.create(body.name, body.description);
  }
}
