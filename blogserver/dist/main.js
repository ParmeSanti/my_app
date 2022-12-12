"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const CORS_OPTIONS = {
        origin: ['http://localhost:4200'],
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
    const adapter = new platform_fastify_1.FastifyAdapter();
    adapter.enableCors(CORS_OPTIONS);
    const app = await core_1.NestFactory.create(app_module_1.AppModule, adapter);
    app.setGlobalPrefix('/api');
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map