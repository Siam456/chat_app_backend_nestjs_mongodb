import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ConversationService } from './conversation.service';
import { Conversation } from './interface/conversation.interface';
import { Request } from 'express';

@Controller('inbox')
export class InboxController {
  constructor(private readonly conversationServes: ConversationService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getConversation(): Promise<Conversation[]> {
    return this.conversationServes.getConversation();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createConversation(@Req() req: Request): Promise<any> {
    return this.conversationServes.createConversation(req);
  }
}
