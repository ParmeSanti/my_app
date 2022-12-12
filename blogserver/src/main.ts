import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

// Aufbohren der bootstrap(), um die CORS-Policy zu umgehen
async function bootstrap() {
  const CORS_OPTIONS = {
<<<<<<< HEAD
    origin: ['http://localhost:4200'], // or '*' or whatever is required
=======
    origin: ['http://localhost:4200'], // oder '*' oder was immer gebraucht wird
>>>>>>> 2c7d4a2a5579da542f013a93a424f2448e3e0577
    allowedHeaders: [
      'Access-Control-Allow-Origin',
      'Origin',
      'X-Requested-With',
      'Accept',
      'Content-Type',
      'Authorization',
    ],
    exposedHeaders: 'Authorization',
    credentials: true,
    methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'DELETE'],
  };
<<<<<<< HEAD

  const adapter = new FastifyAdapter();
  adapter.enableCors(CORS_OPTIONS);
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule, adapter);
=======
  const adapter = new FastifyAdapter();
  adapter.enableCors(CORS_OPTIONS);
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    adapter,
  );
>>>>>>> 2c7d4a2a5579da542f013a93a424f2448e3e0577

  app.setGlobalPrefix('/api');

  await app.listen(3000);
}


bootstrap();
