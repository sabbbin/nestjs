import { Args, Int, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Author } from "./graph.author.model";

import { Post } from "./graph.post.model";
import { AuthorsService, PostsService } from "./graph.service";


@Resolver(of =>Author)

export class AuthorsResolver{
    constructor(
        private authorsService:AuthorsService,
        private postsService:PostsService
    ){}

    @Query(returns=>Author ,{name:'author'})
    getAuthor(@Args('id',{type:()=>Int}) id:number)
        {
            return this.authorsService.findOneById(id)
        }


    @ResolveField('post', returns=>[Post])
    getPosts(@Parent() author :Author){
        const {id } =author;
        return this.postsService.findAll(id)
    }


}