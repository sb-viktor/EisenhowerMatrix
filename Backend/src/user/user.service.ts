// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findByLogin(login: string): Promise<User | null> {
    return this.userModel.findOne({
      where: { login },
      include: ['todos'],
    });
  }
}
