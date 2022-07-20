import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "../Schema/product.schema";

@Injectable ()
export class ProduceService{
     constructor(@InjectModel(Product.name) private productModel: Model< ProductDocument>){}
    
  async   postProduct(productData): Promise <Product>{
    const registerProduct= new this.productModel(productData)
    return registerProduct.save()
       
    
    }

    getAllProduct():Promise<Product[]>{
       return this.productModel.find().exec()
    }

    getSingleProduct(id){
        return  this.productModel.findOne(id)
    }

    updateSingleProduct(){
        return 'updateSingleProduct'
         
    }
}