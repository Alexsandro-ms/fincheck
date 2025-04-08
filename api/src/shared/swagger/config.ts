// src/swagger/swagger.config.ts
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Fincheck API')
    .setDescription('Api destinada a consulta de dados financeiros.')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document, {
    customSiteTitle: 'Fincheck API Docs',
    swaggerOptions: {
      docExpansion: 'none',
      deepLinking: true,
      displayRequestDuration: true,
      filter: true,
    },
    customCss: `
      body {
        background-color: #F8F9FA;
      }

      .swagger-ui .topbar {
        display: none;
      }

      .swagger-ui .info hgroup.main {
        background-color: #F1F3F5;
        padding: 10px;
        border-radius: 8px;
        border-left: 5px solid #087F5B;
      }

      .swagger-ui .opblock {
        border-left: 5px solid #087F5B;
        background-color: #ffffff;
      }

      .swagger-ui .btn.execute {
        background-color: #087F5B !important;
        border-color: #087F5B !important;
        color: white !important;
      }

      .swagger-ui .btn.authorize {
        background-color: #087F5B !important;
        border-color: #087F5B !important;
      }

      .swagger-ui .btn.authorize svg {
        fill: white;
      }

      .swagger-ui .parameter__name {
        color: #087F5B;
      }

      .swagger-ui .scheme-container {
        background-color: #F1F3F5;
        padding: 10px;
        border-radius: 6px;
      }
    `,
  });
}
