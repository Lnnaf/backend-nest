import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagEntity } from './tag.entity';

@Controller('tag')
export class TagController {

  constructor(private service: TagService) { }

  @Get('tags')
  async getTags():  Promise<TagEntity[]>{
    // @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    // @Query('limit', new DefaultValuePipe(2), ParseIntPipe) limit: number): Promise<PostEntity[]>{
    
    return await this.service.findAll();
  }
}
