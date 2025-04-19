import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common"
import { TodoService } from "./todo.service"
import { Todo } from "./todo.model"
import { AuthService } from "src/auth/auth.service"

@Controller("todos")
export class TodoController {
  constructor(
    private readonly todoService: TodoService,
    private readonly authService: AuthService
  ) {}

  @Get()
  getAllTodos(@Req() req): Promise<Todo[] | null> {
    const token = req.headers.authorization.split(" ")[1]

    const idOfUser = this.authService.getUserIdFromToken(token)

    return this.todoService.findAll({ idOfUser })
  }

  @Post("/create")
  createTodo(
    @Req() req,
    @Body()
    body: {
      title: string
      items: string[]
      date: Date
    }
  ): Promise<Todo> {
    const { title, items, date } = body

    const token = req.headers.authorization.split(" ")[1]

    const idOfUser = this.authService.getUserIdFromToken(token)

    return this.todoService.createOne(title, items, date, idOfUser)
  }
}
