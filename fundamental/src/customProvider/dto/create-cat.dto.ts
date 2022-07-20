import {  IsNotEmpty, IsNumberString } from "class-validator";

export class CreateCatDto{
    @IsNotEmpty()
    name:string;

    age:string;
    
    breed:string;
}


export class CreateCatOwnerDto{
    name:string;
    phone:[string]
}