import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTaskDto {
    @IsString()
    @ApiProperty({description: 'Task title', default: 'New task title', type: String, required: true})
    title: string
}
