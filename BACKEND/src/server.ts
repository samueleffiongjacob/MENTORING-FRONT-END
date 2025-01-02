import express from "express";
import "dotenv/config";
import connectDB from "./libs/db";
import emailRoutes from "./routes/emailRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", emailRoutes);
app.use(errorHandler);

connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
