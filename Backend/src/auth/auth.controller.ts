// auth/auth.controller.ts
import { Controller, Post, Body } from "@nestjs/common"
import { AuthService } from "./auth.service"

@Controller("users")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  async login(@Body() body: { login: string; password: string }) {
    const token = await this.authService.validateUser(body.login, body.password)
    return { access_token: token }
  }
}
