import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './interface/msg.interface';

@Injectable()
export class InboxService {
  constructor(
    @InjectModel('message') private readonly msgModel: Model<Message>,
  ) {}

  
}
