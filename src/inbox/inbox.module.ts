import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { InboxController } from './inbox.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConversationSchema } from './schema/conversation.schema';
import { MsgService } from './inbox.service';
import { MsgSchema } from './schema/message.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'conversation', schema: ConversationSchema },
    ]),
    MongooseModule.forFeature([{ name: 'message', schema: MsgSchema }]),
  ],
  providers: [ConversationService, MsgService],
  controllers: [InboxController],
})
export class InboxModule {}
