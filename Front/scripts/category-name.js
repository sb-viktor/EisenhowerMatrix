export function setupCategoryTitles() {
	// Проходим по всем квадрантам
	document.querySelectorAll('.quadrant').forEach(quadrant => {
	  const key = quadrant.dataset.quadrant;
  
	  // Проверяем, есть ли уже заголовок
	  let titleDiv = quadrant.querySelector('.quadrant-title');
	  if (!titleDiv) {
		titleDiv = document.createElement('div');
		titleDiv.className = 'quadrant-title';
		titleDiv.contentEditable = true;
		titleDiv.dataset.titleId = key;
		titleDiv.textContent = 'Введите название';
		quadrant.prepend(titleDiv);
	  }
  
	  // Загружаем сохранённое имя из localStorage
	  const saved = localStorage.getItem(`title-${key}`);
	  if (saved) {
		titleDiv.textContent = saved;
	  }
  
	  // Сохраняем при потере фокуса
	  titleDiv.addEventListener('blur', () => {
		localStorage.setItem(`title-${key}`, titleDiv.textContent.trim());
	  });
	});
  }