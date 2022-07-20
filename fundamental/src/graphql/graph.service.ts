import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthorsService{

    findOneById(id){
        return ({
            id:1,
            firstname:'sabin',
            lastname:'suwal',
            posts:[{

                id:12,
                title:'firstpost',
                votes:12
            },

            {
                id:123,
                title:'secondpost',
                votes:123
            }

            ]
        })
    }
}

@Injectable()
export class PostsService{
 
        findAll(id){
            return ({
                id:123,
                title:'secondpost',
                votes:23
            })
        }
}