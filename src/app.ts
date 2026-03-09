import express from "express";
import cors from "cors";
import adminRouter from "./routes/adminRouter";
import userRouter from "./routes/userRouter";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
export default app;