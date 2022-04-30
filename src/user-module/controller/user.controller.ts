/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { User } from '../interface/user.interface';
import { UserService } from '../service/user.service';
import { Request } from 'express';

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

  @Get('/:id')
  @UsePipes(new ValidationPipe())
  async getCustomer(@Param('id') id: string): Promise<User> {
    return this.userService.getUser(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async addUser(@Body() body: UserDto): Promise<User> {
    return this.userService.addUser(body);
  }
  @Delete('/:id')
  @UsePipes(new ValidationPipe())
  async deleteUSer(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser(id);
  }

  @Put('/:id')
  @UsePipes(new ValidationPipe())
  async UpdateUser(
    @Param('id') id: string,
    @Req() req: Request,
  ): Promise<User> {
    return this.userService.updateUser(req.body, id);
  }
}
