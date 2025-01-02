import { Schema, model, Document } from "mongoose";

export interface ISubscriber extends Document {
  email: string;
  subscribedAt: Date;
}

const subscriberSchema = new Schema<ISubscriber>({
  email: { type: String, unique: true, required: true },
  subscribedAt: { type: Date, default: Date.now },
});

export const Subscriber = model<ISubscriber>("Subscriber", subscriberSchema);
