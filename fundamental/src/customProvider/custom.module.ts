import { Module } from "@nestjs/common";
import { getConnectionToken, MongooseModule } from "@nestjs/mongoose";
import { Connection, model } from "mongoose";
import { CatController, OwnerController } from "./custom.controller";
import { CatOwnerService, CatsService } from "./custom.services";
import { Cat, CatSchema } from "./dbSchema/catSchema";
import { CatOwner, CatOwnerSchema } from "./dbSchema/ownerCatSchema";
import { CatDocument } from "./dbSchema/catSchema";

@Module({
    imports:[MongooseModule.forFeature([
        {name:Cat.name, schema:CatSchema }],
        'cats'),
        MongooseModule.forFeature([
            {name:CatOwner.name, schema:CatOwnerSchema}],
            'cats')
        
    ],
   
    
    controllers:[CatController, OwnerController],
    providers:[{
        provide: CatsService,
        useFactory: (catConnection : Connection)=>{
            return new CatsService(catConnection,catConnection.models[Cat.name])
        },
        inject:[getConnectionToken('cats')]
    },

    {

        provide :CatOwnerService,
    useFactory:(ownerconnection:Connection)=>{
      return  new CatOwnerService(ownerconnection, ownerconnection.models[CatOwner.name])
    },
    inject:[getConnectionToken('cats')]
    }

]
})

export class CustomProvider{}

