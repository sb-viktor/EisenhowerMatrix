import { Table, Column, Model, HasMany, DataType } from "sequelize-typescript"
import { Todo } from "../todo/todo.model"

@Table({ tableName: "users" })
export class User extends Model<User> {
  @Column({ unique: true })
  login: string

  @Column
  password: string

  @HasMany(() => Todo)
  todos: Todo[]
}
