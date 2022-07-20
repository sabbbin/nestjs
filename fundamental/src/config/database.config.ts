import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';


@Injectable()
export class DatabaseConfig implements MongooseOptionsFactory{ 
constructor(private configService:ConfigService){}

createMongooseOptions(): MongooseModuleOptions | Promise<MongooseModuleOptions> {
    return {
        uri: this.configService.get("DATABASE_CAT_URL"),
        dbName: this.configService.get("DATABASE_CAT_DB"),
        localPort: +this.configService.get("DATABASE_CAT_PORT")||27017
    };
}
}