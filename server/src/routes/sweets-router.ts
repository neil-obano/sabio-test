import { Router } from "express";
import SweetService from "../services/sweet-service";

export default class SweetsRouter {
  public router: Router;
  private sweetService: SweetService;

  constructor() {
    this.router = Router();
    this.setupRoutes();
    this.sweetService = new SweetService();
  }

  setupRoutes(): void {
    // return a list of sweets
    this.router.get("/", (req, res) => {
      res.status(200).send(this.sweetService.getAll());
    });

    // return a single sweet
    // this.router.get("/sweets/:id", (req, res) => {
    //   res.status(200).send({ index: "reached index page" });
    // });

    // // create new sweet
    // this.router.post("/sweets/", (req, res) => {
    //   res.status(200).send({ index: "reached index page" });
    // });
  }
}
