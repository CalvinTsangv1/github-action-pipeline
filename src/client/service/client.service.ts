import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ResourceService } from "src/resource/service/resource.service";
import { Repository } from "typeorm";
import { ClientEntity } from "../entity/client.entity";

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(ClientEntity)
        private clientRepository: Repository<ClientEntity>,
        private readonly resourceService: ResourceService
    ) {}

    public async findAll(): Promise<ClientEntity[]> {
        return this.clientRepository.find({take:5});
    }

}