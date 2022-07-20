import { Prop , Schema, SchemaFactory } from '@nestjs/mongoose'

import { Document } from 'mongoose'

export type CatOwnerDocument= CatOwner & Document;
 
@Schema()
export class CatOwner{
     @Prop({required:true})
     ownername:string

     @Prop([String])
     phone:string[]


}

export const CatOwnerSchema=SchemaFactory.createForClass(CatOwner)
