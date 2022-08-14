import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@Controller('resources')
@ApiTags('resource')
export class ResourceController {
    constructor() {

    }

    @Get()
    public async testAPI() {
        console.log("test api");
    }
}