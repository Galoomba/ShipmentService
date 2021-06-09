import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import ErrorHandler from "./config/ErrorHandler";

/**
 * Registering app Object.
 */
const app = express();

/**
 * Register Body Parser middleware.
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Register App Routes.
 */
routes(app);

/**
 * Register App ErrorHandler.
 */
ErrorHandler(app);

/**
 * Starting app server.
 */
app.listen(3001, () => {
    console.log('Server started with port 3001');
})