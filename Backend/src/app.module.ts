import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { TodoModule } from "./todo/todo.module"
import { SequelizeModule } from "@nestjs/sequelize"
import { UserModule } from "./user/user.module"
import { User } from "./user/user.model"
import { Todo } from "./todo/todo.model"
import { JwtMiddleware } from "./auth/jwt.middleware"
import { JwtModule } from "@nestjs/jwt"
import { UserController } from "./user/user.controller"
import { UserService } from "./user/user.service"
import { AuthService } from "./auth/auth.service"
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "1257",
      database: process.env.DB_NAME || "money",
      autoLoadModels: true,
      synchronize: true,
      models: [User, Todo],
    }),
    SequelizeModule.forFeature([User]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || "moneyforme",
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN || "3600s" },
    }),
    TodoModule,
    UserModule,
    CategoryModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, AuthService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .exclude(
        { path: "users/login", method: RequestMethod.POST },
        { path: "users", method: RequestMethod.POST }
      )
      .forRoutes("*")
  }
}
