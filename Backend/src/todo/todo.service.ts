import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { Todo } from "./todo.model"
import { JwtService } from "@nestjs/jwt"
import { User } from "src/user/user.model"

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo)
    private todoModel: typeof Todo,
    private jwtService: JwtService,
    @InjectModel(User)
    private userModel: typeof User
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoModel.findAll()
  }

  async createOne(
    title: string,
    items: string[],
    date: Date,
    userId: number
  ): Promise<Todo> {
    const result = await this.todoModel.create({
      title,
      items,
      date,
      userId,
    })

    return result
  }
}
