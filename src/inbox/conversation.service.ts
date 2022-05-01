/* eslint-disable prettier/prettier */
import { Injectable, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Conversation } from './interface/conversation.interface';
import { Model } from 'mongoose';

@Injectable()
export class ConversationService {
  constructor(
    @InjectModel('conversation')
    private readonly conversationModel: Model<Conversation>,
  ) {}

  async getConversation(): Promise<Conversation[]> {
    return await this.conversationModel.find({});
  }
  async createConversation(req: any): Promise<any> {
    const conversation = new this.conversationModel({
      creator: {
        id: req.user._id,
        name: req.user.name,
        avatar: req.user.avatar || null,
      },
      participator: {
        name: req.body.participant,
        id: req.body.id,
        avatar: req.body.avatar || null,
      },
    });
    return await conversation.save();
  }
}
