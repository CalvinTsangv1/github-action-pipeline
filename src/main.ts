import { AppModule } from "./app.module";
import { NestFactory, Reflector } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    console.log('init');
    const serviceName = 'localhost:8080'
    const serviceVersion = '1'
    const app = await NestFactory.create(AppModule, {cors: true})
    const options = new DocumentBuilder().addBearerAuth().setTitle(serviceName).setVersion(serviceVersion).build();
    SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, options));
    console.log('running application')
}

bootstrap();