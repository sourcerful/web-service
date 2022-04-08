import express, { NextFunction} from "express"
import HttpException from "../exceptions/HttpException";

function errorHandler(error: HttpException, request: express.Request, response: express.Response, next: NextFunction){
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    response.status(status).json({status: status, message: message, stack: error.stack})
  }
export default errorHandler;