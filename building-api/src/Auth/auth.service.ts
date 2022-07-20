import { Injectable } from "@nestjs/common";


import { UserService } from "../User/user.service";
import { PasswordService } from "src/passwordHashing/password.service";
import { JwtService } from "@nestjs/jwt";



@Injectable()
export class AuthService{
    constructor(private userservice: UserService,
        private passwordService:PasswordService,
        private jwtService: JwtService
        ) {}
    async validateUser(username:string, password:string):Promise<any | undefined>{
     const user= await this.userservice.singleUser(username)
     if (user){

         const isMatch= await this.passwordService.comparePassword(user.password,password)
          if (isMatch){
         
             return user
          }
     }
     return  null
    }

    async login(user:any){
    
        console.log(user)
        const payload={username:user.username, sub:user._id, role:user.role};
        console.log(payload)
        return{
            access_token: this.jwtService.sign(payload)
        }
    }
}