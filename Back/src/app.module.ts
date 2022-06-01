import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import {AuthStrategy}  from './auth/auth.strategy';
import { AppController } from './app.controller';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth/auth.entity';

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
      entities: [Auth],
      autoLoadEntities: true,
  }), AuthModule
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthStrategy, AuthService]
})

export class AppModule {}
