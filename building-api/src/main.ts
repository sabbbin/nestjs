import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import  Helmet  from 'helmet'
import * as csurf from 'csurf'
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.use(Helmet())
  app.useLogger(cookieParser())
  app.use(csurf())
  await app.listen(3000);
}
bootstrap();
