import Shipment from "../Services/Abstracts/Shipment";

/**
 * Base validator class
 * Contain abstract validate method.
 * Contain all basic validations method.
 */
export default abstract class Validator {

    /**
     * Shipment object that will be validated.
     */
    protected Shipment: Shipment;

    /**
     * List of the attribs violations.
     */
    protected violations: Array<Object> = [];

    /**
     * Validator Constructor. 
     * @param {Shipment} shipmentObject  
     */
    constructor(shipmentObject: Shipment) {
        this.Shipment = shipmentObject;
    }

    /**
     * Validate method.
     * Validate method.
     * Used by child class to implement the validation logic.
     * @returns {void}
     */
    abstract validate(): void;

    /** 
     * Get Unit from shipment attrib.
     * Made from the consumption that there will be space between the number and it's unit.
     * 
     * @param {string} input shipment attrib.
     * @returns {string} attribute unit.
     */
    getUnit(input: string): string {
        return input.split(' ')[1];
    }
}