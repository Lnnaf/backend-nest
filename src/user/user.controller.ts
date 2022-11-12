import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';


@Controller('user')
export class UserController {

  constructor(private service: UserService) { }

  @Post('/create')
  create(){
     this.service.create();
  }
}
