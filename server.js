import "express-async-errors";
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import authRouter from "./routes/authRouter.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
import jobRouter from "./routes/jobRouter.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter.js";

import * as dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cookieParser());
app.use(express.json());

// routers

app.get("/", (req, res) => {
  res.send("Hello world");
});

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not Found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is listening on PORT ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
