import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ResourceService } from "../service/resource.service";
@Controller('resource')
@ApiTags('resource')
export class ResourceController {
    constructor(
        private readonly resourceService: ResourceService
    ) {}

    @Get()
    public testAPI(): Promise<any> {
        return this.resourceService.exportCSV()
    }
}