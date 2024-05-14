import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import connectToDB from "./db/connectToDB";
import userRoutes from "./routes/users.route";

// basic middlewares at app level
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// mongodb connection
connectToDB();

// user routes
app.use("/api/v1/users", userRoutes);

app.listen("8000", () => {
  console.log("app is running on 8000");
});
