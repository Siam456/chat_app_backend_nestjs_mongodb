/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const ConversationSchema = new mongoose.Schema(
  {
    creator: {
      id: mongoose.Types.ObjectId,
      name: String,
      avater: String,
    },
    participator: {
      id: mongoose.Types.ObjectId,
      name: String,
      avater: String,
    },
    last_updated: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  },
);
