export function draw(ctx, canvas) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.strokeStyle = 'blue';
  
	const w = canvas.width;
	const h = canvas.height;
  
	const halfW = w / 2;
	const halfH = h / 2;
  
	// Очистить весь холст
	ctx.clearRect(0, 0, w, h);
  
	// 🔶 Левый верхний (оранжевый)
	ctx.fillStyle = '#FF0000';
	ctx.fillRect(0, 0, halfW, halfH);
  
	// 🟩 Правый верхний (зелёный)
	ctx.fillStyle = '#FFFF00';
	ctx.fillRect(halfW, 0, halfW, halfH);
  
	// 🟥 Левый нижний (красный)
	ctx.fillStyle = '#FFA500';
	ctx.fillRect(0, halfH, halfW, halfH);
  
	// 🟨 Правый нижний (жёлтый)
	ctx.fillStyle = '#008000';
	ctx.fillRect(halfW, halfH, halfW, halfH);
  
	ctx.lineWidth = 3;
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  }