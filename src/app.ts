import express from "express";
import cors from "cors";
import adminRouter from "./routes/adminRouter";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/admin", adminRouter);

export default app;