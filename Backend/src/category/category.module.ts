import { Module } from "@nestjs/common"
import { Category } from "./category.model"
import { SequelizeModule } from "@nestjs/sequelize"

@Module({
  imports: [SequelizeModule.forFeature([Category])],
  providers: [],
  controllers: [],
})
export class CategoryModule {}
