import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { Transform } from "class-transformer";


export class GetClientRequestDto {

    @ApiPropertyOptional()
    @IsOptional()
    @Transform( ({ value }) => Number(value), { toClassOnly: true })
    limit?:number;

    @ApiPropertyOptional()
    @IsOptional()
    @Transform( ({ value }) => Number(value), { toClassOnly: true })
    page?:number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    sortBy?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    isAsec?: string;
}