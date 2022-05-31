import { Injectable } from '@nestjs/common';
import { User } from './user/user.entity';
import { Repository } from 'typeorm';
import { addDataDto } from './addtesDto';

@Injectable()
export class AppService {
  getHello() {
    return 'Hello world';
  }
}
@Injectable()
export class AddDatabas {
  constructor(
    @InjectRepository(User)
    private DbRepository: Repository<User>
  ){
  }

async addtes(ts:addDataDto): Promise <User> {
  return  await this.DbRepository.save(ts);
}

}