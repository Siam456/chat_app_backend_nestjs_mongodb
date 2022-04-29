/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../interface/user.interface';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private readonly userModel: Model<User>) {}
  getHello(): string {
    return 'Hello World! from user';
  }
  //retrive all user
  async getAllUsers(): Promise<User[]> {
    const response = await this.userModel.find({});
    if (response) {
      return Promise.resolve(response);
    }
    throw new NotFoundException('data not found');
  }
}
