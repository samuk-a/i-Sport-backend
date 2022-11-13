import express, { Application } from 'express';
import logging from "@lib/LogManager"

const logger = logging.getLogger("core.App");

export default class App {
  public app: Application;
  public port: number;

  constructor(appInit: { port: number, preMiddlewares: any, posMiddlewares: any, controllers: any }) {
    this.app = express();
    this.port = appInit.port

    this.middlewares(appInit.preMiddlewares);
    this.routes(appInit.controllers);
    this.middlewares(appInit.posMiddlewares);
  }

  private middlewares(middlewares: { forEach: (arg0: (middleware: any) => void) => void; }) {
    middlewares.forEach(middleware => this.app.use(middleware));
  }

  private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
    controllers.forEach(controller => this.app.use('/', controller.router));
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`App listening on http://localhost:${this.port}`);
    });
  }
}
