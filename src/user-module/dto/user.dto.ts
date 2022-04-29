/* eslint-disable prettier/prettier */
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsEnum,
} from 'class-validator';

export class UserDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  password: string;

  @IsEnum(['user', 'admin'])
  role: string;
}
