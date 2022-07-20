import { Module} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { JwtAuthGuard } from 'src/Auth/auth.jwt.guard'
import { JwtStrategy } from 'src/Auth/auth.jwt.strategy'
import { Product, ProductSchema } from 'src/Schema/product.schema'

import { ProductController } from './product.controller'
import { ProduceService } from './product.service'


@Module({
    imports:[
      
     JwtAuthGuard,   
    MongooseModule.forFeature([{name:Product.name, schema:ProductSchema}])],
    controllers:[ProductController],
    providers:[ProduceService],
})


export class ProductModule{}