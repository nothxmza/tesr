import { Controller, Get, UseGuards, HttpStatus, Req } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
	constructor(private readonly authservice: AuthService){}

	@Get("/42")
	@UseGuards(AuthGuard("42"))
	async  login42(): Promise<any>{
	  return HttpStatus.OK;
	}

	@Get()
	@UseGuards(AuthGuard("42"))
	async login42Redirect(@Req() req: Request): Promise<any>{
	return this.authservice.Creatauth(req.user)
	}
}
