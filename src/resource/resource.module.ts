import { Module } from "@nestjs/common";
import { ClientModule } from "src/client/client.module";
import { ResourceController } from "./controller/resource.controller";
import { ResourceService } from "./service/resource.service";

@Module({
    imports: [ClientModule],
    controllers: [ResourceController],
    providers: [ResourceService],
    exports: [ResourceService]
})

export class ResourceModule {
    
}