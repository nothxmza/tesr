import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UsersModule } from './user/user.module';
import { ApiController } from './api/api.controller';
import { AuthModule } from './auth/auth.module';

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
  }),UsersModule, AuthModule
  ],
  controllers: [ApiController],
})

export class AppModule {}