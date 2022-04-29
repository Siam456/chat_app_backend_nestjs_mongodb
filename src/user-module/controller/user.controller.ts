/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { User } from '../interface/user.interface';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('test/hello')
  getHello(): string {
    return this.userService.getHello();
  }

  @Get()
  async getAllUser(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
}
