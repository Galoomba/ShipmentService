import BaseException from "./BaseException"

/**
 * Validation not found exception
 * 
 * Validation not found if it fails to locate that Validation Class for the shipment type.
 */
export default class ValidationNotFoundException extends BaseException {

    constructor(message:string = "No validation class for that model !") {
        super(500, message);
    }
}