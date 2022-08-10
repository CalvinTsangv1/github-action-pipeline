import { AppModule } from "./app.module";
import { NestFactory, Reflector } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    console.log('init');
    const servicePort = '8080'
    const serviceName = 'localhost:8080'
    const serviceVersion = '1'
    const app = await NestFactory.create(AppModule, {cors: true})
    const reflector = app.get(Reflector);
    const options = new DocumentBuilder().addBearerAuth().setTitle(serviceName).setVersion(serviceVersion).build();
    SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, options));
    
    app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
    app.useGlobalPipes(new ValidationPipe({transform: true}));
    app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));
    app.useGlobalInterceptors(new ChannelInterceptor());
    app.useGlobalFilters(new AllExceptionFilter(serviceName));
    app.use(json({limit: "10mb"}));
    app.use(rTracer.expressMiddleware({useHeader: true, echoHeader: true}))
    
    app.listen(servicePort, () => {
        console.info(`Application ${serviceName}:${serviceVersion} running on port ${servicePort}`);
    });
    console.log('running application')
}

bootstrap();