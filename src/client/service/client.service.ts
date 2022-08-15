import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ResourceService } from "src/resource/service/resource.service";
import { FindManyOptions, Repository } from "typeorm";
import { GetClientRequestDto } from "../dto/get-clients.request.dto";
import { ClientEntity } from "../entity/client.entity";

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(ClientEntity)
        private clientRepository: Repository<ClientEntity>
    ) {}


    public async findAll(dto?: GetClientRequestDto): Promise<ClientEntity[]> {
        let query: FindManyOptions<ClientEntity> = {}

        if(dto?.limit) {
            query.take = dto.limit;
        }

        if(dto?.page) {
            query.skip = dto.page * dto.limit;
        }

        if(dto?.sortBy) {
            query.order[dto.sortBy] = dto.isAsec === 'true'? 1 : -1;
        }

        return this.clientRepository.find(query);
    }

    public async getCount(): Promise<number> {
        return this.clientRepository.count();
    }

}