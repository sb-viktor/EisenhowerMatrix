// user.controller.ts
import {
  Body,
  Controller,
  Post,
  Res,
  UnauthorizedException,
  Header,
  Req,
} from "@nestjs/common"
import { UserService } from "./user.service"
import { User } from "./user.model"
import { AuthService } from "src/auth/auth.service"

@Controller("users")
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  @Post("login")
  @Header("Set-Cookie", "auth_token=...; HttpOnly; Path=/; Max-Age=3600")
  async login(
    @Body() body: { login: string; password: string },
    @Res({ passthrough: true }) res: Response
  ) {
    const token = await this.authService.validateUser(body.login, body.password)

    if (!token) {
      throw new UnauthorizedException("Invalid credentials")
    }

    return { message: "Logged in successfully", token }
  }

  @Post()
  async createUser(
    @Body() body: { login: string; password: string }
  ): Promise<User> {
    return this.userService.createUser(body.login, body.password)
  }
}
