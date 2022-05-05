import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './interface/msg.interface';

@Injectable()
export class MsgService {
  constructor(
    @InjectModel('message') private readonly msgModel: Model<Message>,
  ) {}

  async getAllMessage(): Promise<any> {
    const response = await this.msgModel.find({});
    if (response) {
      return response;
    }
    return new NotFoundException('no msg found');
  }

  async getMessage(id: string): Promise<any> {
    const response = await this.msgModel.find({
      conversation_id: id,
    });
    if (response) {
      return response;
    }
    return new NotFoundException('no msg found');
  }
  async createMessage(req: any, res: any): Promise<any> {
    const message = new this.msgModel({
      text: req.body.text,
      sender: req.user,
      conversation_id: req.body.conversation_id,

      receiver: req.body.receiver,
    });
    const response = await message.save();

    if (response) {
      res.status(200).json({
        response,
      });
    } else {
      res.status(500).json({
        errors: {
          msg: 'There was an error',
        },
      });
    }
  }
}
