/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface Conversation extends Document {
  readonly creator: {
    id: string;
    name: string;
    avater: string;
  };
  readonly participator: {
    id: string;
    name: string;
    avater: string;
  };
  readonly last_updated: Date;
}
