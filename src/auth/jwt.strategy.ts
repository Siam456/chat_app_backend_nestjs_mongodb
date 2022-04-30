/* eslint-disable prettier/prettier */
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Res, Req } from '@nestjs/common';
import { jwtConstants } from './constants';
import { Request, Response } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          const cookies =
            Object.keys(req.signedCookies).length > 0
              ? req.signedCookies
              : null;

          if (!cookies) {
            return null;
          } else {
            const token = cookies['chat_app'];
            return token;
          }
        },
      ]),
    });
  }

  async validate(payload: any) {
    return {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      avater: payload.avatar,
      role: payload.role,
      _id: payload._id,
    };
  }
}
