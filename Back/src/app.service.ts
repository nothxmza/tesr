import { Injectable } from '@nestjs/common';
import { User } from './user/user.entity';
import { Repository } from 'typeorm';
import { AddDataDto } from './addtesDto';
import { InjectRepository } from 'typeorm'

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
    private dbRepository: Repository<User>
  ){
  }

  async addtes(ts: AddDataDto): Promise<User> {
    return  await this.dbRepository.save(ts);
  }
}