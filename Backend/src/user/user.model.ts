import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  BeforeCreate,
  BeforeUpdate,
} from "sequelize-typescript"
import { Todo } from "../todo/todo.model"
import * as bcrypt from "bcrypt"
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize"

@Table({ tableName: "users" })
export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  @Column({ unique: true })
  declare login: string

  @Column
  declare password: string

  @HasMany(() => Todo)
  declare todos: CreationOptional<Todo[]>

  @BeforeCreate
  @BeforeUpdate
  static async hashPassword(instance: User) {
    if (instance.changed("password")) {
      instance.password = await bcrypt.hash(instance.password, 10)
    }
  }
}
