const canvas = document.getElementById('matrix-canvas');
const matrix = document.querySelector('.matrix-container');
const ctx = canvas.getContext('2d');

// 🔹 Рисует рамку вокруг canvas (тестовая функция)
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 3;
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

// 🔹 Загружаем задачи из backend и вставляем в нужный квадрант
async function loadTasks() {
  try {
    const res = await fetch('/api/tasks');
    const tasks = await res.json();

    tasks.forEach(task => {
      const quadrant = document.querySelector(`.quadrant[data-quadrant="${task.quadrant}"]`);
      if (quadrant) {
        const taskDiv = document.createElement('div');
        taskDiv.textContent = task.title;
        taskDiv.classList.add('task');
        quadrant.appendChild(taskDiv);
      }
    });
  } catch (err) {
    console.error('Ошибка при загрузке задач:', err);
  }
}

window.addEventListener('DOMContentLoaded', loadTasks);