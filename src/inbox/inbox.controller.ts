import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ConversationService } from './conversation.service';
import { Conversation } from './interface/conversation.interface';
import { Request, Response } from 'express';
import { MsgService } from './inbox.service';

@Controller('inbox')
export class InboxController {
  constructor(
    private readonly conversationServes: ConversationService,
    private readonly messageServices: MsgService,
  ) {}

  @Get('/converstaion')
  @UseGuards(JwtAuthGuard)
  async getConversation(): Promise<Conversation[]> {
    return this.conversationServes.getConversation();
  }

  @UseGuards(JwtAuthGuard)
  @Post('/converstaion')
  async createConversation(@Req() req: Request): Promise<any> {
    return this.conversationServes.createConversation(req);
  }

  //retrive a msg
  @Get('/:id')
  async getMsg(@Param('id') id: string): Promise<any> {
    return this.messageServices.getMessage(id);
  }
  //retrive all msg
  @Get()
  async getallMsgs(): Promise<any> {
    return this.messageServices.getAllMessage();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createMessage(@Req() req: Request, @Res() res: Response): Promise<any> {
    return this.messageServices.createMessage(req, res);
  }
}
