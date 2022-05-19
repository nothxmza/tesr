import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UsersModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'user123',
      database: 'transcendence',
      synchronize: true,
      logging: false,
      entities: [User],
  }),UsersModule
  ],
})

export class AppModule {}