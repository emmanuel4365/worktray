import "express-async-errors";
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import { body, validationResult } from "express-validator";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

import * as dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

// routers
import jobRouter from "./routes/jobRouter.js";

app.get("/", (req, res) => {
  res.send("Hello world");
});

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/jobs", jobRouter);

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
