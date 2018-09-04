import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('Backend Homework OpenAPI by Santiago Restrepo & Miguel Pinzon')
  .setDescription('The users and notes API')
  .setVersion('1.0')
  .setSchemes('https','http')
  .addTag('Users & Notes')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api', app, document);

  await app.listen(PORT);
}
bootstrap();
