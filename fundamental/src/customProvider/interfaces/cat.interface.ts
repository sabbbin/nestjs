import { Exclude, Transform } from "class-transformer"
import { ObjectId } from "mongoose";


export interface Cat{
 
    name:string,
    age:number,
    breed:string

}

export class SerializedUser{
    @Transform (value=>value.toString(), {toPlainOnly:true})
     _id:ObjectId;
     name:string;
     age:number;
     owner:ObjectId;

     @Exclude()
     breed:string;
    

     constructor (partial: Partial<SerializedUser>){
        Object.assign(this, partial)
     }
}