import { Body, ForbiddenException, HttpException, HttpStatus, Injectable, Param, ParseArrayPipe, UseFilters } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { createPublicKey } from "crypto";
import { Connection, Model } from "mongoose";
import { AllException } from "src/exception/exception.handling";
// import { AllException } from "src/exception/exception.handling";
import { Cat, CatDocument } from "./dbSchema/catSchema";
import { CatOwner, CatOwnerDocument } from "./dbSchema/ownerCatSchema";
import { CreateCatDto, CreateCatOwnerDto } from "./dto/create-cat.dto";


@Injectable()
export class CatsService{
    constructor(
        
        @InjectConnection('cats') private connection:Connection,
        private catModel: Model<CatDocument>,
       
        ){}



    async create(createCatDto:CreateCatDto):Promise<Cat>{
        console.log('cat', createCatDto)
        const createCAt= new this.catModel(createCatDto)
         return createCAt.save();
    }

    @UseFilters(AllException)
    async getSingle(id:string):Promise<any>{
        const singlecat= await this.catModel.findById(id).populate('owner')
        

        return singlecat
    }

    async findAll():Promise <Cat[]>{
       
      const allcat= await this.catModel.find().populate('owner')
      return allcat
    }

    async creatBulk(createCatDto:CreateCatDto[]):Promise<any>{
 
         const options={ordered:true}
        return await this.catModel.insertMany(createCatDto, options)
    }

   
   async deleteCat(id:string):Promise<any>{
        const abc= this.catModel.deleteOne({_id:id})
       return abc;
   }

  async updateCat(id:string, body:any):Promise<any>{
   console.log('body', body)
    const xyz= this.catModel.updateOne({
        _id:id
    },
    {
        $set:body
    }
    )
    return xyz
 
  }

}

@Injectable()
export class CatOwnerService{
    constructor (
        @InjectConnection('owner') private connection:Connection,
        private catownerModel: Model<CatOwnerDocument>
        ){}
    async create (createOwnerDto:CreateCatOwnerDto): Promise<CatOwner>{
        const createowner= new this.catownerModel(createOwnerDto)
        return createowner.save()
    }

}