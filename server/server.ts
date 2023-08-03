import "reflect-metadata";
import express from "express";
import { container } from "tsyringe";
import cors from "cors";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import ExpenseController from "./src/expense/controllers/expenseController";
import * as db from "./database";
import ExpenseModel from "./src/expense/models/expenseModel";
import ExpenseService from "./src/expense/services/expenseService";
import { verifyToken } from "./src/expense/middlewares/verifyToken";
import { errorHandler } from "./src/expense/middlewares/errorHandler";

configDotenv();

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

container.register("ExpenseModel", { useClass: ExpenseModel });
container.register("ExpenseService", { useClass: ExpenseService });

const expenseController = container.resolve(ExpenseController);
app.use("/api/v1", verifyToken, expenseController.routes());

app.use(errorHandler);
// const token = jwt.sign(
//   { username: "aradgoller", id: "123123" },
//   process.env.SECRET_KEY as string
// );

// app.use("/api/v1", (req, res) => {
//   res.cookie("token", token);
//   res.send("token created!");
// });

const port = process.env.PORT || 3001;

db.connectt().then(() => {
  console.log("Connected to DB!");
  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
});
