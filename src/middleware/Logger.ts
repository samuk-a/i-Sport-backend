import { Request, Response } from 'express'
import logging from "@lib/LogManager"

const logger = logging.getLogger("middleware.request");

export default (req: Request, resp: Response, next: () => void) => {
  logger.info(`${req.method} ${req.path}`);
  next()
}
