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
import { AuthService } from "./auth/auth.service"
import { AuthController } from "./auth/auth.controller"
console.log("process.env", process.env.DB_USER)

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
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
    TodoModule,
    UserModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .exclude({ path: "users/login", method: RequestMethod.POST })
      .forRoutes("*")
  }
}
