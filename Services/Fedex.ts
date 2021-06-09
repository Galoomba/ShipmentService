import { ShipmentObject } from "../Contracts/Types/ShipmentObject";
import Shipment from "./Abstracts/Shipment";

/**
 * Fedex Class
 */
export default class Fedex extends Shipment {

    /**
     * Validation Rules
     */
    protected rules = {
        serviceID: ['fedexAIR', 'fedexGroud'],
        width: 'inch',
        height: 'inch',
        length: 'inch',
        weight: 'inch',
    };

    /**
     * Class constructor
     * @param {ShipmentObject} shipment 
     */
    constructor(shipment: ShipmentObject) {
        super(shipment);
    }


    /**
     * Save shipment logic
     */
    save(): void {
        console.log('Fedex saved!');
    };

}