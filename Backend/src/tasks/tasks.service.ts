import { Injectable } from '@nestjs/common'; // 👈 подключаем Nest-инструмент, который делает класс "службой"

@Injectable()
export class TasksService {
  // 📦 Здесь будет временное хранилище задач в памяти (массив)
  private tasks = [
    { id: 1, title: 'Сделать проект', quadrant: 'orange-1' },
    { id: 2, title: 'Позвонить маме', quadrant: 'green-1' },
    { title: 'Сделать проект', quadrant: 'orange-2' },
    { title: 'Позвонить маме', quadrant: 'orange-2' },
    { title: 'Погладить кота', quadrant: 'orange-2' }
  ];

  // 📤 Вернуть все задачи (GET /api/tasks)
  findAll() {
    return this.tasks;
  }

  // 🆕 Добавить новую задачу (POST /api/tasks)
  create(task: { title: string; quadrant: string }) {
    const newTask = {
      id: Date.now(), // уникальный ID по текущему времени
      title: task.title,
      quadrant: task.quadrant,
    };
    this.tasks.push(newTask);
    return newTask;
  }
}
