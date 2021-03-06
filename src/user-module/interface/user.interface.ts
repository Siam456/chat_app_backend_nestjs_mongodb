/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly password: string;
  readonly avatar: string;
  readonly role: Date;
}
