// user.module.ts
import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import { User } from "./user.model"
import { UserService } from "./user.service"
import { UserController } from "./user.controller"
import { Todo } from "../todo/todo.model"
import { AuthService } from "src/auth/auth.service"
import { JwtModule, JwtService } from "@nestjs/jwt"
import { AuthController } from "src/auth/auth.controller"

@Module({
  imports: [
    SequelizeModule.forFeature([User, Todo]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
  ],
  providers: [UserService, AuthService],
  controllers: [UserController, AuthController],
})
export class UserModule {}
