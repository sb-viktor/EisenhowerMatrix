// user.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Todo } from '../todo/todo.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Todo])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
