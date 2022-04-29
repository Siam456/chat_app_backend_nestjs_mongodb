/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../interface/user.interface';
import { Model } from 'mongoose';
import { UserDto } from '../dto/user.dto';

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
  //retrive a user
  async getUser(id: string): Promise<User> {
    const response = await this.userModel.findOne({ _id: id });
    try {
      if (response) {
        return Promise.resolve(response);
      }
      throw new NotFoundException('user not found');
    } catch (err) {
      throw err;
    }
  }

  //add a user
  async addUser(body: UserDto): Promise<User> {
    const user = new this.userModel(body);
    const response = await user.save();
    return Promise.resolve(response);
  }
  //delete a user
  async deleteUser(id: string): Promise<User> {
    const response = await this.userModel.findByIdAndDelete({ _id: id });
    return Promise.resolve(response);
  }

  //update a user
  async updateUser(body, id: string): Promise<User> {
    const response = await this.userModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: body,
      },
    );

    return Promise.resolve(response);
  }
}
