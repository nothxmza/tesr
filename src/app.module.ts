
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '172.21.0.3',
      port: 5432,
      username: 'postgres',
      password: 'user123',
      database: 'transcendence',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class AppModule {}