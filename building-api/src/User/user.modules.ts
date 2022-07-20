import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserController } from "./user.controller";

import { User, UserSchema } from "../Schema/auth.schema";
import { UserService } from "./user.service";
import { PasswordModule } from "src/passwordHashing/password.module";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from 'multer';
import  {pathParse} from 'path-parse'
import { v4 as uuidv4} from 'uuid'




@Module({
    imports:[MongooseModule.forFeature([{name:User.name, schema:UserSchema }]),
    PasswordModule,
    MulterModule.register({
        
        fileFilter(req, file, cb) {
            const type=file.mimetype.split('/')[0];
            if (type!=='image'){
                cb (null, false)
            }
            else{
                cb(null,true)
            }
        },
        storage :diskStorage({
            filename:function(req,file,cb){
                console.log(file.originalname)
                // const file_name:string=pathParse(file.originalname).name.replace(/\s/g,'')+uuidv4()
                // const extension:string=pathParse(file.originalname).ext;

                const file_name=uuidv4()+file.originalname;
                
                cb(null, `${file_name}`)
            },
            destination: function(req, file, cb){
                cb(null, './upload')
            }
         })
      })

],
    providers:[UserService],
    controllers:[UserController],
    exports:[UserService]    


})


export class UserModule{}