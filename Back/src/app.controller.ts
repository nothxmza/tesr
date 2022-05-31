import { Controller, Get, UseGuards, HttpStatus, Req } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { AppService } from "./app.service";
import { User } from "./user/user.entity";
import { AddDatabas } from "./app.service";
import { addtes } from "./app.service";
import { addDataDto } from "./addtesDto";


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/42")
  @UseGuards(AuthGuard("42"))
  async  login42(): Promise<any>{
    return HttpStatus.OK;
  }
  

  @Get()
  @UseGuards(AuthGuard("42"))
  async login42Redirect(@Req() req: Request): Promise<any>{
    return req.user
  }
}
  @pPost()
  async addtes(
    @Body() addDataDto: AddDataDto
  ): Promise<User> {
    return await this.AddDatabas.addtes(addDataDto);
  }

}