import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import {AuthStrategy}  from './auth/auth.strategy';
import { AppController } from './app.controller';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { DB_module } from './db_info/db.info.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DB_module , AuthModule, UserModule],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthStrategy, AuthService]
})

export class AppModule {}
