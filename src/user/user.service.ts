import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity)
    private readonly repository: MongoRepository<UserEntity>) {}

    findById(id: string){
    
    }

    create(){
        const user = new UserEntity();
        user.displayName = 'John';
        user.username = 'jet';
        return this.repository.save(user);
    }

}
