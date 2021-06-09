import BaseException from "./BaseException"

/**
 * Type not found exception
 * 
 * Type not found if it fails to locate that type from the shipment enum.
 */
export default class TypeNotFoundException extends BaseException {

    constructor(message: string = "Shipment type not found !") {
        super(404, message);
    }
}