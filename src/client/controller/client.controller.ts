import { Controller, Get, Inject } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ResourceService } from "src/resource/service/resource.service";
import { ClientService } from "../service/client.service";

@Controller("client")
@ApiTags("client")
export class ClientController {
    constructor(
        private readonly clientService: ClientService) {}

    @Get()
    public async getClientInformation(): Promise<any> {
        return this.clientService.findAll()
    }
}