import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class ChannelInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest();
        const {header, query, body} = request;
        const channelHeader = header['streaming_channel'];
        if(channelHeader) {
            //start streaming channel
        }
        //throw new Error("Method not implemented.");
        return next.handle()
    }

}