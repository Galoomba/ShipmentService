
/**
 * Shipment data Object.
 * Used by shipment services.
 */
export type ShipmentObject = {
    width: string,
    height: string,
    length: string,
    weight: string,
    [serviceId: string]: string,
}