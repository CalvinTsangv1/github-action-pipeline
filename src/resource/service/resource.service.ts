import { Injectable } from "@nestjs/common";
import { ClientService } from "src/client/service/client.service";
import { Builder } from "builder-pattern";
import { GetClientRequestDto } from "src/client/dto/get-clients.request.dto";
import { Parser }from "json2csv";

@Injectable()
export class ResourceService {
    constructor(
        private readonly clientService: ClientService
    ) {}

    public async exportCSV(): Promise<any> {
        
        const total = await this.clientService.getCount();
        const limit = 1000;
        for(let page=0; page <= total%limit ;++page) {
            const csv = new Parser();
            return csv.parse(await this.clientService.findAll(Builder<GetClientRequestDto>().limit(limit).page(page).build()))
        }
    }
}