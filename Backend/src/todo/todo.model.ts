import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript"
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize"
import { User } from "../user/user.model"
import { Category } from "src/category/category.model"

@Table({ tableName: "todos" })
export class Todo extends Model<
  InferAttributes<Todo>,
  InferCreationAttributes<Todo>
> {
  @Column
  declare title: string

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  declare items: string[]

  @Column({ type: DataType.DATE })
  declare date: Date

  @ForeignKey(() => User)
  @Column
  declare userId: number

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  declare categoryId: CreationOptional<number>

  @BelongsTo(() => User)
  declare user: CreationOptional<User>
}
