import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy} from 'passport-42';
import { config } from 'dotenv'
import { Injectable } from '@nestjs/common';

config();

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy,"42"){
	constructor(){
		super({
			clientID: process.env.clientId,
			clientSecret: process.env.clientSecret,
			callbackURL: "http://localhost:3000",
			profileFields:{
				'login' : 'login'
			}
		});
	}
	async validate (
		accessToken: string,
		refreshToken: string,
		profile: Profile,
		done:(err: any, user:any, info?: any) => void): Promise<any>{
			const user = {
				login: profile.login
			}
			const payload = {
				user,
				accessToken,
			};
			done(null,payload);
		}
}