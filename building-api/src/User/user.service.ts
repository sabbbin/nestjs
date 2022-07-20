import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RegisterUserDto } from "src/Dto/register_user.dto";
import { User, UserDocument } from "../Schema/auth.schema";
import { PasswordService } from "src/passwordHashing/password.service";

@Injectable()

export class UserService{
    constructor(@InjectModel(User.name) private userModel: Model< UserDocument>,
    private passwordService:PasswordService
    ) {}
     async register(registerUser ):Promise <User>
     {
        const passwordhash= await this.passwordService.passwordHash(registerUser.password)
         const username= registerUser.username
        const registeruser=new this.userModel({
          username: username,
          password:passwordhash,
          image:registerUser.filepath,
          role:registerUser.role

        })
        
        return registeruser.save()
     }

     async singleUser (username:string):Promise <User |undefined >{
    
      return this.userModel.findOne({username:username})
       
    
     }

}