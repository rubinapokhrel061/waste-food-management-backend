import express, { Request, Response } from "express";
import dotenv from "dotenv";
import emailRouter from "./routes/emailRoutes.js";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 8020;

app.use(cors());
app.use(express.json());

// Router
app.use("/api/email", emailRouter);

// Test route
app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, TypeScript + SendGrid");
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
