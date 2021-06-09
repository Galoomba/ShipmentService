import { Request, Response } from "express";
import Validator from "../Contracts/Validator";
import ShipmentFactory from "../Factories/ShipmentFactory";
import ValidationFactory from "../Factories/ValidationFactory";
import Shipment from "../Services/Abstracts/Shipment";

/**
 * Controller class.
 */
class Controller {
    constructor() {
        /**
         * Container Proxy.
         * Bind a shipment object based on shipment type for every controller function.
         */
        return new Proxy(this, {
            get(target: any, prop: any) {
                if (typeof target[prop] == 'function') {
                    return function (...args: any) {
                        /**
                         * Use the shipment factory to resolve a shipment object and bind it to every invoiced method.
                         */
                        return target[prop].apply(target, [ShipmentFactory.getInstance(args[0].params.shipmentType, args[0].body), ...args]);
                    }
                }
            }
        });
    }

    /**
     * Save object controller method.
     * @param {Shipment} shipment Shipment object UPS/Fedex.
     * @param {Request} req Request Object.
     * @param {Response} res Response Object. 
     */
    save(shipment: Shipment, req: Request, res: Response) {

        // Use the validator factory To validate shipment object based on it's type.
        const validator: Validator = ValidationFactory.getInstance(shipment);
        validator.validate();

        // Save the shipment.
        shipment.save();

        // Send response.
        res.sendStatus(200);
    }
}

export default new Controller;