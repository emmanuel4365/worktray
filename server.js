import "express-async-errors";
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();

// routers
import jobRouter from "./routes/jobRouter.js";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ msg: "data received", data: req.body });
});

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

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
