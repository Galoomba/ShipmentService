/**
 * Base Exception Class 
 */
export default class BaseException extends Error {
    public statusCode:number ;
    public errors:Array<Object> = [];

    constructor(statusCode:number, message:string, errors:Array<object>= []) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
    }
}