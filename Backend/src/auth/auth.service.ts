// auth/auth.service.ts
import { Injectable, UnauthorizedException } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import * as bcrypt from "bcrypt"
import { InjectModel } from "@nestjs/sequelize"
import { User } from "../user/user.model"

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User)
    private userModel: typeof User
  ) {}

  async validateUser(login: string, password: string): Promise<string> {
    const user = await this.userModel.findOne({ where: { login } })

    if (!user) throw new UnauthorizedException("User not found")

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) throw new UnauthorizedException("Invalid password")

    return this.jwtService.sign({ userId: user.id, login: user.login })
  }

  getUserIdFromToken(token: string): number {
    try {
      const decoded = this.jwtService.verify(token)
      return decoded.userId
    } catch (err) {
      throw new UnauthorizedException("Invalid token")
    }
  }
}
