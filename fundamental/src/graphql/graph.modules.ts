import { Module } from "@nestjs/common";
import { AuthorsResolver } from "./graph.resolver";
import { AuthorsService, PostsService } from "./graph.service";


@Module({
    providers:[AuthorsResolver],
    controllers:[AuthorsService, PostsService],
})


export class graphql{}