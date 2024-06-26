import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>('PORT');
  app.enableCors();
  await app.listen(port, () => {
    console.log(`App opened on ${config.get<string>('BASE_URL')}`);
  });
}
bootstrap();
