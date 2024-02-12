import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('tasks')
@ApiTags('tasks')
export class TaskController {
	constructor(private readonly taskService: TaskService) { }

	@Post()
	@ApiOperation({ summary: 'Create new task', description: 'Return task' })
	create(@Body() createTaskDto: CreateTaskDto) {
		return this.taskService.create(createTaskDto);
	}

	@Get()
	@ApiOperation({ summary: 'Get list of tasks', description: 'Return list of tasks' })
	findAll(): Promise<Task[]> {
		return this.taskService.findAll();
	}

	@Get(':id')
	@ApiOperation({ summary: 'Get task by id', description: 'Return task' })
	findOne(@Param('id') id: string) {
		return this.taskService.findOne(+id);
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Update task by id ', description: 'Return task' })
	update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
		return this.taskService.update(+id, updateTaskDto);
	}

	@Patch(':id/complete')
	@ApiOperation({ summary: 'Set task completed', description: 'Return task' })
	complete(@Param('id') id: string) {
		return this.taskService.complete(+id);
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete task', description: 'Return task' })
	remove(@Param('id') id: string) {
		return this.taskService.remove(+id);
	}
}
