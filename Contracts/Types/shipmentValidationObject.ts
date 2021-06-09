
/**
 * Shipment Validation data Object.
 * Used by Validator Classes services in defining validation rules.
 */
export type ShipmentValidationObject = {
    serviceID: Array<string>,
    width: string,
    height: string,
    length: string,
    weight: string,
}