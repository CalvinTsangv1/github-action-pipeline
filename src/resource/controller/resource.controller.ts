import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
@Controller('resource')
@ApiTags('resource')
export class ResourceController {
    constructor() {}

    @Get()
    public testAPI(): string {
        console.log("test api");
        return "good"
    }
}