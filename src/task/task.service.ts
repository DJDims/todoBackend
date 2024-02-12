import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

import { PrismaClient, Task } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TaskService {

	constructor(private prisma: PrismaService) { }

	create(createTaskDto: CreateTaskDto): Promise<Task | null> {
		return this.prisma.task.create({ data: createTaskDto });
	}

	findAll(): Promise<Task[]> {
		return this.prisma.task.findMany();
	}

	findOne(id: number): Promise<Task | null> {
		return this.prisma.task.findUnique({ where: { id: id } });
	}

	update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task | null> {
		return this.prisma.task.update({ where: { id: id }, data: updateTaskDto });
	}

	complete(id: number): Promise<Task | null> {
		return this.prisma.task.update({ where: { id: id }, data: { status: true } })

	}

	remove(id: number): Promise<Task | null> {
		return this.prisma.task.delete({ where: { id: id } });
	}
}
