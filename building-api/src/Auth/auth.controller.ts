import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { request } from "http";
import { LocalAuthGuard } from "./auth.local.guard";
import { AuthService } from "./auth.service";



@Controller('/login')
export class AuthController{

    constructor (private authService: AuthService){}
    @UseGuards(LocalAuthGuard)
    @Post()
    async login(
        @Request() req
        ){
           
       return this.authService.login(req.user)
    }
}