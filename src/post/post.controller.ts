import { Body, Controller, Get, Param, Post, Delete, Res, Put} from '@nestjs/common';
import { PostService } from './post.service';
import { PostEntity } from './post.entity';
import { Response } from 'express';
import slugify from 'slugify';


@Controller('post')
export class PostController {

  constructor(private service: PostService) { }

  @Get('/posts')
  async findAll():  Promise<PostEntity[]>{
    // @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    // @Query('limit', new DefaultValuePipe(2), ParseIntPipe) limit: number): Promise<PostEntity[]>{
    
    return await this.service.findAll();
  }

  @Get('/detail/:urlTitle')
  async findByUrlTitle(@Param('urlTitle') urlTitle: string):  Promise<PostEntity>{
    // @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    // @Query('limit', new DefaultValuePipe(2), ParseIntPipe) limit: number): Promise<PostEntity[]>{
    
    return await this.service.findByUrlTitle(urlTitle);
  }

  @Post("/create")
  async create(@Body() post: PostEntity):  Promise<PostEntity>{
    post.createdDate = new Date();
    post.urlTitle = slugify(post.title, {locale: 'vi', lower: true}) 
    return await this.service.create(post);
  }

  @Put("/update")
  async update(@Body() post: PostEntity):  Promise<PostEntity>{
    post.lastModifier = new Date();
    post.createdDate = new Date(post.createdDate);
    
    return await this.service.update(post);
  }


  @Delete("/delete/:id")
  async delete(@Param('id') id:number, @Res() res: Response){
    const deleteResult = await this.service.deleteById(id)
    if(deleteResult.affected == 0){
      res.status(500).send({
        message: `Can't delete this entry with id: ${id}`,
      });
    }
    res.status(200).send({
      message: `Can't delete this entry with id: ${id}`,
    });
  }

}
