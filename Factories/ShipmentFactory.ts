import { ShipmentObject } from "../Contracts/Types/ShipmentObject";
import { ShipmentType as ShipmentSelector } from "../Enums/ShipmentTypeEnum";
import TypeNotFoundException from "../Exceptions/TypeNotFoundException";
import Shipment from "../Services/Abstracts/Shipment";

/**
 * Shipment Factory 
 * 
 * Return a instance of shipment classes dynamically based on Shipment type 
 */
export default class ShipmentFactory {

    public static INSTANCE: Shipment;

    private constructor() { }

    public static getInstance(ShipmentType: string, ShipmentBody: ShipmentObject) {
        try {
            this.INSTANCE = ShipmentSelector[ShipmentType](ShipmentBody);
            return this.INSTANCE;
        } catch(e){
            throw new TypeNotFoundException();
        }
    }

}