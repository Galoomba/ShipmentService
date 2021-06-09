import Shipment from "../Services/Abstracts/Shipment";
import { ShipmentObject } from "./Types/ShipmentObject";
import Validator from "./Validator";

/**
 * Validator object key type.
 */
export interface ValidatorKeyTypes {
    [Name: string]: (shipment: Shipment) => Validator,
}

/**
 * Shipment object key type.
 */
export interface ShipmentKeyTypes {
    [Name: string]: (shipmentBody: ShipmentObject) => Shipment,
}