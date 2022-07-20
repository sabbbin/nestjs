import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService} from '@nestjs/config'
import { AllException } from './exception/exception.handling';
// import { AllException } from './exception/exception.handling';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const  httpAdapter = app.get(HttpAdapterHost)
   app.useGlobalFilters( new AllException(httpAdapter))
  app.useGlobalPipes(new ValidationPipe())
 const configService=app.get(ConfigService)
 const port= configService.get('PORT')


  await app.listen(port);
}
bootstrap();
