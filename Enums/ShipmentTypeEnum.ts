import UPS from "../Services/UPS";
import Fedex from "../Services/Fedex";
import { ShipmentKeyTypes } from "../Contracts/ObjectKeyType";
import { ShipmentObject } from "../Contracts/Types/ShipmentObject";

/**
 * Shipment type enum.
 * Contain Shipment type Ids and a instance of there class for dynamic calling.
 * 
 * If new Shipment type added it should be added here.
 */
export const ShipmentType: ShipmentKeyTypes = {
    'UPS': (shipmentBody: ShipmentObject) => new UPS(shipmentBody),
    'Fedex': (shipmentBody: ShipmentObject) => new Fedex(shipmentBody),
}