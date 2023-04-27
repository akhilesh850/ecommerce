import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  const config = new DocumentBuilder()
    .setTitle('Ecommerce APIs')
    .setDescription('This documentation have all the ecommerce APIs')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apis', app, document);

  await app.listen(3000);
}
bootstrap();
