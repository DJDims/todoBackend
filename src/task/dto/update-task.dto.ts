import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsOptional, IsString, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @IsOptional()
    @IsString()
    @ApiProperty({description: 'Task title', default: 'Updated task title', type: String, required: true})
    title: string
}
