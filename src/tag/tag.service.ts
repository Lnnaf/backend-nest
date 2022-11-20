import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectID, DeleteResult } from 'typeorm';
import { TagEntity } from './tag.entity';

@Injectable()
export class TagService{

    constructor(
        @InjectRepository(TagEntity)
        private readonly repository: Repository<TagEntity>,
    ){}

    async findAll(): Promise<TagEntity[]>{
        return await this.repository.find();
      }
}
