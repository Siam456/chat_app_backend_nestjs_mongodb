/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const MsgSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
    },
    attachment: [
      {
        type: String,
      },
    ],
    sender: {
      _id: mongoose.Types.ObjectId,
      name: String,
      avater: String,
    },
    receiver: {
      _id: mongoose.Types.ObjectId,
      name: String,
      avater: String,
    },
    date_time: {
      type: Date,
      default: Date.now(),
    },
    conversation_id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
