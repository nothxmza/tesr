import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';

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
	}),
	],
})
export class DB_module {}