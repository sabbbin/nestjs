import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PasswordModule } from "src/passwordHashing/password.module";
import { UserModule } from "src/User/user.modules";
import { AuthController } from "./auth.controller";
import { JwtStrategy } from "./auth.jwt.strategy";
import { LocalStrategy } from "./auth.local.strategy";
import { AuthService } from "./auth.service";
import { jwtConstants } from "./constant";

@Module({
    imports:[UserModule, PasswordModule,
    JwtModule.register({
        secret:jwtConstants.secret,
        // signOptions:{
        //     expiresIn:'1000s'
        // }
    })
    ],
    providers:[AuthService, LocalStrategy, JwtStrategy],
    controllers:[AuthController],

   
})

export class AuthModel{}