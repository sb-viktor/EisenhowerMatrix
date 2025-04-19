// todo.module.ts
import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import { Todo } from "./todo.model"
import { TodoService } from "./todo.service"
import { TodoController } from "./todo.controller"
import { User } from "../user/user.model"
import { JwtModule } from "@nestjs/jwt"
import { AuthService } from "src/auth/auth.service"

@Module({
  imports: [
    SequelizeModule.forFeature([Todo, User]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || "moneyforme",
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN || "3600s" },
    }),
  ],
  providers: [TodoService, AuthService],
  controllers: [TodoController],
})
export class TodoModule {}
