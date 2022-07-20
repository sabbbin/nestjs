import { IsString } from "class-validator";

export class RegisterUserDto{
    @IsString()
    public username:string;

    @IsString()
    public password:string;

    filepath:string;

   
}