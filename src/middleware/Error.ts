import { NextFunction, Request, Response } from 'express';
import HttpException from '@exception/HttpException';
import logging from "@lib/LogManager";

const logger = logging.getLogger("server.error");
 
export default (error: HttpException, request: Request, response: Response, next: NextFunction) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  logger.error(message);

  response.status(status).json({ status, message });
}
