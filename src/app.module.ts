import {Module} from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { LocalLoggerConfig } from './config/logger/local.logger.config';
import { LoggerEnum } from './enum/logger.enum';
import { ChannelInterceptor } from './interceptor/channel.interceptor';
import { TimeResponseInterceptor } from './interceptor/time-response-logging.interceptor';
import { ResourceModule } from './resource/resource.module';

@Module({
    imports:[
        WinstonModule.forRootAsync({
            useClass: (() => {
                return LocalLoggerConfig;
            })()
        }),
        ResourceModule],
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