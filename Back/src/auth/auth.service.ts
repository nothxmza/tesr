import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
	async Creatauth(new_user: any) {
		const userRepository = getRepository(User)
		const user = new User()
		user.username = new_user.user.login
		await userRepository.save(user)
	}
}
