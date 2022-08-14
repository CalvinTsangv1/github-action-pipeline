import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ResourceController } from "src/resource/controller/resource.controller";
import { ResourceModule } from "src/resource/resource.module";
import { ResourceService } from "src/resource/service/resource.service";
import { ClientController } from "./controller/client.controller";
import { ClientEntity } from "./entity/client.entity";
import { ClientService } from "./service/client.service";

@Module({
    imports: [TypeOrmModule.forFeature([ClientEntity]), ResourceModule],
    providers: [ClientService],
    controllers: [ClientController],
    exports: [ClientService]
})

export class ClientModule {}