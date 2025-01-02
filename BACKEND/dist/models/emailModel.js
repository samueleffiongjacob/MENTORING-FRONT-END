import { Schema, model } from "mongoose";
const emailSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    sentAt: { type: Date, default: Date.now },
});
export const Email = model("Email", emailSchema);
