import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { Auth } from './auth.entity';
@Module({
	imports:[TypeOrmModule.forFeature([Auth])],
	exports:[AuthService],
	providers: [AuthService]
})
export class AuthModule {}
