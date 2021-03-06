import { ShipmentObject } from "../Contracts/Types/ShipmentObject";
import Shipment from "./Abstracts/Shipment";

export default class UPS extends Shipment {

    /**
     * Validation Rules
     */
    protected rules = {
        serviceID: ['UPSExpress', 'UPS2DAY'],
        width: 'inch',
        height: 'inch',
        length: 'inch',
        weight: 'pound',
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
        console.log('UPS saved!');
    };

}