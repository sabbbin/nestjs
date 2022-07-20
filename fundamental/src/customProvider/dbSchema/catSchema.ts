import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { CatOwner } from './ownerCatSchema';
import mongoose, { Document } from 'mongoose'

export type CatDocument= Cat & Document;

@Schema()

export class Cat{
    @Prop()
    name:string;

    @Prop()
    age:string;

    @Prop()
    breed:string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref:'CatOwner'})
    owner: CatOwner
}

export const CatSchema = SchemaFactory.createForClass(Cat);