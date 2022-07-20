import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';


@Injectable()
export class PasswordService{
    async passwordHash(password:string){
        const salt= await bcrypt.genSalt()
        const hash=await bcrypt.hash(password, salt)
       
        return hash

     }
    async comparePassword(passwordF:string, passwordS:string){
        
      const isMatch= await bcrypt.compare(passwordS, passwordF)
      return isMatch
     }
}