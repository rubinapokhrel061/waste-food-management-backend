import express from "express";
import dotenv from "dotenv";
import emailRouter from "./routes/emailRoutes.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 8020;
app.use(express.json());
// Router
app.use("/api/email", emailRouter);
// Test route
app.get("/", (_req, res) => {
    res.send("Hello, TypeScript + SendGrid");
});
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
