import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomProvider } from './customProvider/custom.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
// import { AllException } from './exception/exception.handling';
import { MongooseModule } from '@nestjs/mongoose';


 
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
   MongooseModule.forRoot('mongodb://localhost/nest',{
    connectionName:'cats'
   }),
  //  MongooseModule.forRoot('mongodb://localhost/owner',{
  //   connectionName:"owner"
  //  }),
    CustomProvider,

  ],
  controllers: [AppController],
  providers: [AppService,
    // {
    //   provide:APP_FILTER,
    //   useClass:AllException
    // }
  ],
})
export class AppModule {}
