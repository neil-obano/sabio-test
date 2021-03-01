import express from "express";
import * as path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import SweetsRouter from "./routes/sweets-router";
import cors from "cors";

export default class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.setupRoutes();
  }

  middleware(): void {
    this.express.use(logger("dev"));
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(cookieParser());
    this.express.use(cors());
  }

  setupRoutes(): void {
    this.express.use("/sweets", new SweetsRouter().router);
    this.express.use(express.static(path.join(__dirname, "../public")));
  }
}
