// todo.model.ts
import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DataType,
} from "sequelize-typescript"
import { User } from "../user/user.model"

@Table({ tableName: "todos" })
export class Todo extends Model<Todo> {
  @Column
  title: string

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  items: string[]

  @Column({ type: DataType.DATE })
  date: Date

  @ForeignKey(() => User)
  @Column
  userId: number

  @BelongsTo(() => User)
  user: User
}
