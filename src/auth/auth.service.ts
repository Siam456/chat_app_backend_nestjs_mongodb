/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user-module/service/user.service';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from 'src/user-module/interface/user.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password): Promise<any> {
    const user = await this.userModel.findOne({
      $or: [{ phone: username }, { email: username }, { name: username }],
    });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);

      if (checkPass) {
        const userObj = {
          name: user.name,
          email: user.email,
          phone: user.phone,
          avater: user.avatar,
          role: user.role,
          _id: user._id,
        };

        return userObj;
      }
      return null;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
