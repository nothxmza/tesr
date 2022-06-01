import { Injectable } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';

@Injectable()
export class AppService {
  getHello() {
    return 'Hello world';
  }
}