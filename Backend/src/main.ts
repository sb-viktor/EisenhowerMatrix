// Импортируем NestFactory — фабрику, которая создаёт приложение
import { NestFactory } from '@nestjs/core';
// Импортируем главный модуль приложения
import { AppModule } from './app.module';

// Асинхронная функция — точка входа приложения
async function bootstrap() {
  // Создаём экземпляр Nest-приложения (по умолчанию Express внутри)
  const app = await NestFactory.create(AppModule);

  // 🔓 Разрешаем запросы с других доменов/портов (например, frontend на :3000)
  app.enableCors({
    origin: 'http://localhost:3000', // или '*' для всех источников
  });

  // Определяем порт: берём из переменной окружения или по умолчанию 3020
  const PORT = process.env.PORT ?? 3020;

  // Запускаем сервер на выбранном порту
  await app.listen(PORT);

  // Выводим в консоль, что сервер успешно запущен
  console.log(`🚀 Backend запущен на http://localhost:${PORT}`);
}

// Запускаем приложение
bootstrap();
