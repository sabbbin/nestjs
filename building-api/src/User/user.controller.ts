import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RegisterUserDto } from 'src/Dto/register_user.dto';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
  constructor(private readonly authService: UserService) {}
  @Post('register')
  @UseInterceptors(FileInterceptor('image'))
  register(@Body() registerUser: RegisterUserDto,
   @UploadedFile() file:Express.Multer.File
  ) {
    
    registerUser.filepath=file.destination+'/'+file.filename
  
    return this.authService.register(registerUser);
  }

}


