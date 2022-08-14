import {Module} from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { LocalLoggerConfig } from './config/logger/local.logger.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelInterceptor } from './interceptor/channel.interceptor';
import { TimeResponseInterceptor } from './interceptor/time-response-logging.interceptor';
import { ResourceModule } from './resource/resource.module';
import { ClientEntity } from './client/entity/client.entity';
import { ClientModule } from './client/client.module';

@Module({
    imports:[
        WinstonModule.forRootAsync({
            useClass: (() => {
                return LocalLoggerConfig;
            })()
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'mydatabase',
            entities: [ClientEntity],
            synchronize: true,
            autoLoadEntities: true
        }),
        ResourceModule,
        ClientModule
    ],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: ChannelInterceptor
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: TimeResponseInterceptor
        }
    ]
})

export class AppModule {

}