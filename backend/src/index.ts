import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/v1/test", async (req: Request, res: Response) => {
  res.json({ message: "its working..." });
});

app.listen("8000", () => {
  console.log("app is running on 8000");
});
