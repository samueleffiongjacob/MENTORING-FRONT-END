import { Schema, model } from "mongoose";
const subscriberSchema = new Schema({
    email: { type: String, unique: true, required: true },
    subscribedAt: { type: Date, default: Date.now },
});
export const Subscriber = model("Subscriber", subscriberSchema);
