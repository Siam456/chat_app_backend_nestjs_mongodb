/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    phone: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
      emun: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true,
  },
);
