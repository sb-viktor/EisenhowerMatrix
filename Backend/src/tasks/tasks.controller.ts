import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('api/tasks') // 💡 все маршруты начинаются с /api/tasks
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get() // 👉 GET /api/tasks
  findAll() {
    return this.tasksService.findAll();
  }

  @Post() // 👉 POST /api/tasks
  create(@Body() body: { title: string; quadrant: string }) {
    return this.tasksService.create(body);
  }
}
