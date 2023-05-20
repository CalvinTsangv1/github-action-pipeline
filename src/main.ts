import { AppModule } from "./app.module";
import { NestFactory, Reflector } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ClassSerializerInterceptor, NestInterceptor, ValidationPipe } from "@nestjs/common";
import rTracer from "cls-rtracer";
import { json } from "express";
import { WINSTON_MODULE_NEST_PROVIDER } from "nest-winston";

async function bootstrap() {
    console.log('init');
    
    /****/
    const fs = require("fs");
    const testAddon = require('../build/Release/testaddon.node');
    console.log(testAddon);
    console.log(testAddon.hello());
    const buffer = fs.readFileSync('yarn-error.log');
    console.log("Data manipulation")
    testAddon.processData(buffer, ()=> {
        console.timeEnd("Data manipulation");
        fs.writeFileSync("test-data-modified", buffer);
        console.timeEnd("Program runtime");
    });
    module.exports = testAddon
    
    /****/
    const servicePort = '8080'
    const serviceName = 'localhost:8080'
    const serviceVersion = '1'
    const app = await NestFactory.create(AppModule, {cors: true})
    const options = new DocumentBuilder().addBearerAuth().setTitle(serviceName).setVersion(serviceVersion).build();
    SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, options));
    
    
    app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
    app.useGlobalPipes(new ValidationPipe({transform: true}));
    app.use(json({limit: "10mb"}));
    app.use(rTracer.expressMiddleware({useHeader: true, echoHeader: true}))
    
    app.listen(servicePort, () => {
        console.info(`Application ${serviceName}:${serviceVersion} running on port ${servicePort}`);
    });
    console.log('running application')
}

bootstrap();