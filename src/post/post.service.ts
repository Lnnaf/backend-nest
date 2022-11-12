import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from 'src/model/message.model';
import { Repository, ObjectID, DeleteResult } from 'typeorm';
import { PostEntity } from './post.entity';

@Injectable()
export class PostService{

    constructor(
        @InjectRepository(PostEntity)
        private readonly repository: Repository<PostEntity>,
      ){}

      async create(post: PostEntity): Promise<PostEntity>{
       return await this.repository.save(post);
      }

      async findAll(): Promise<PostEntity[]>{
        return await this.repository.find({
          order: {
            createdDate: "ASC"
        }
        });
      }

      async findByUrlTitle(urlTitle: string): Promise<PostEntity>{
        return await this.repository.findOne({
          where: {
            urlTitle: urlTitle
          }
        });
      }

      async deleteById(id: number): Promise<DeleteResult>{
        return await this.repository.delete(id);
      }

      async update(post: PostEntity): Promise<PostEntity>{
        return await this.repository.save(post);
      }

}
