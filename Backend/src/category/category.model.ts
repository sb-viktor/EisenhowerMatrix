import { Table, Column, Model, HasMany } from "sequelize-typescript"
import { Todo } from "../todo/todo.model"
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize"

@Table({ tableName: "category" })
export class Category extends Model<
  InferAttributes<Category>,
  InferCreationAttributes<Category>
> {
  @Column({ unique: true })
  declare nameOfCategory: string

  @HasMany(() => Todo)
  declare todos: CreationOptional<Todo[]>
}
