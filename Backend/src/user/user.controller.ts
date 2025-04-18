// user.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':login')
  async getUserByLogin(@Param('login') login: string): Promise<User | null> {
    return this.userService.findByLogin(login);
  }
}
