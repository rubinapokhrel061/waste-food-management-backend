import express, { Request, Response } from "express";
import dotenv from "dotenv";
import emailRouter from "./routes/emailRoutes.js";
import cors from "cors";
import cron from "node-cron";
dotenv.config();

const app = express();
const port = process.env.PORT || 8020;

app.use(
  cors({
    origin: "*",
  })
);
cron.schedule("*/10 * * * *", () => {
  console.log("Task running every 10 minutes");
});

app.use(express.json());

// Router
app.use("/api/email", emailRouter);

// Test route
app.get("/", (_req: Request, res: Response) => {
  res.send("Success");
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
