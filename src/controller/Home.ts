import { Router, Request, Response } from "express";

import { IControllerBase } from "@interface/Base";

export default class HomeController implements IControllerBase {
  public path = '/';
  public router = Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get('/', this.index);
  }

  private index(req: Request, res: Response) {
    res.json({success: true});
  }
}
