import { draw } from './canvas-draw.js';
const canvas = document.getElementById('matrix-canvas');
const matrix = document.querySelector('.matrix-container');
const ctx = canvas.getContext('2d');

function resizeCanvasToMatrix() {
  const rect = matrix.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  console.log(`📏 Canvas resized to: ${canvas.width}x${canvas.height}`);
  draw(ctx, canvas); // ✅ отрисовка
}

// Обновляем canvas при загрузке и изменении окна
resizeCanvasToMatrix();
window.addEventListener('resize', resizeCanvasToMatrix);

// 🔹 Загружаем задачи из backend и вставляем в нужный квадрант
function loadTasks() {
  tasks.forEach(task => {
    const quadrant = document.querySelector(`.quadrant[data-quadrant="${task.quadrant}"]`);
    if (!quadrant) {
      console.warn(`❗️Квадрант "${task.quadrant}" не найден`);
      return;
    }

    const taskCard = document.createElement('div');
    taskCard.className = 'task';

    const title = document.createElement('div');
    title.className = 'task-title';
    title.textContent = task.title;
    taskCard.appendChild(title);

    if (task.subtasks) {
      const ul = document.createElement('ul');
      ul.className = 'subtask-list';
      task.subtasks.forEach(sub => {
        const li = document.createElement('li');
        li.textContent = sub;
        ul.appendChild(li);
      });
      taskCard.appendChild(ul);
    }

    quadrant.appendChild(taskCard);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  resizeCanvasToMatrix();
  loadTasks();
});

import { setupCategoryTitles } from './category-name.js';
setupCategoryTitles();
import { tasks } from './tasks.js';