import { Schema, model, Document } from "mongoose";

export interface IEmail extends Document {
  name: string;
  email: string;
  message: string;
  sentAt: Date;
}

const emailSchema = new Schema<IEmail>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  sentAt: { type: Date, default: Date.now },
});

export const Email = model<IEmail>("Email", emailSchema);
