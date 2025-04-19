// user.service.ts
import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { User } from "./user.model"
import * as bcrypt from "bcrypt"
import { CreationAttributes } from "sequelize"

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User
  ) {}

  async createUser(login: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user: CreationAttributes<User> = { login, password: hashedPassword }
    return this.userModel.create({ login, password })
  }

  async findByLogin(login: string): Promise<User | null> {
    return this.userModel.findOne({
      where: { login },
      include: ["todos"],
    })
  }
}
