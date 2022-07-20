import { Field , Int, ObjectType } from '@nestjs/graphql'


import { Post } from './graph.post.model';

@ObjectType()
export class Author{
    @Field(type=>Int)
    id:number;

    @Field ({ nullable:true})
    firstname?:string;

    @Field({nullable:true})
    lastname?:string

    @Field (type=>[Post])
    posts:Post[]
}