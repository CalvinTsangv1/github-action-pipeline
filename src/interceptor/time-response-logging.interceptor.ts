import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
@Injectable()
export class TimeResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest();
        const {header, query, body} = request;
        const now = Date.now()
        return next.handle().pipe(
            tap(() => console.log(`Response Time: ${Date.now() - now}ms`)))
    }

}