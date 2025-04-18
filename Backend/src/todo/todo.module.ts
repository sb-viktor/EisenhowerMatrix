// todo.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { User } from '../user/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Todo, User])],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
