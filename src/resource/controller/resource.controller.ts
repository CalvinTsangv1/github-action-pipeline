import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@Controller('resources')
@ApiTags('resource')
export class ResourceController {
    constructor() {}
}