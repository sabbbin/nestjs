import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule} from './product/product.modules'

//Mongod connection
import  {MongooseModule} from '@nestjs/mongoose'
import { UserModule } from './User/user.modules';
import { AuthModel } from './Auth/auth.module';

@Module({
  imports: [ProductModule,
    UserModule,
    AuthModel,
   MongooseModule.forRoot('mongodb://localhost/nest',{
   }),
  //  MongooseModule.forRoot('mongodb://localhost/product',{
  //   connectionName:'products'
  //  })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
