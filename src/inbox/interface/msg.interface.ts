/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface Message extends Document {
  text: string;
  attachment: [string];
  sender: {
    _id: string;
    name: string;
    avater: string;
  };
  receiver: {
    _id: string;
    name: string;
    avater: string;
  };
  date_time: Date;
  conversation_id: string;
}
