import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UsersModule } from './user/user.module';
import { AppService } from './app.service';
import {AuthStrategy}  from './auth/auth.strategy';
import { AppController } from './app.controller';

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
      logging: true,
      entities: [User],
      autoLoadEntities: true,
  }),UsersModule
  ],
  controllers: [AppController],
  providers: [AppService, AuthStrategy]
})

export class AppModule {}
