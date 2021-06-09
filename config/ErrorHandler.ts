import {Application, Request, Response} from "express";
import BaseException from "../Exceptions/BaseException";

/**
 * Error handling middleWare.
 *
 * @param {Application} app express object
 */
 export = (app:Application) => {
    app.use((err :BaseException, req :Request, res:Response, next) => {
        const statusCode = err.statusCode || 500;
        res.status(statusCode).json({message: err.message, errors: err.errors});
    });
  };
  