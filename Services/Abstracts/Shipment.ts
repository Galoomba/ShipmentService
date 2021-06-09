import { ShipmentObject } from "../../Contracts/Types/ShipmentObject";
import { ShipmentValidationObject } from "../../Contracts/Types/shipmentValidationObject";

/**
 * Shipment abstract class
 */
export default abstract class Shipment {

    /**
     * Set of validation rule that would validate shipment object.
     */
    protected abstract rules:ShipmentValidationObject;

    /**
     * Shipment Object Data.
     */
    private shipment:ShipmentObject;

    /**
     * Class constructor
     * 
     * @param {ShipmentObject} shipment Set shipment object
     */
    constructor (shipment:ShipmentObject) {
        this.shipment = shipment;
    }


    /**
     * Save Object abstract method.
     * Each class should implement it's own logic.
     */
    abstract save():void;
    
    

    /**
     * Returns Shipment Object.
     * 
     * @returns {ShipmentObject} 
     */
    getDataObject(): ShipmentObject {
        return this.shipment;
    }

    /**
     * Returns class validation Object
     * 
     * @returns {ShipmentValidationObject}
     */
    getRulesObject(): ShipmentValidationObject {
        return this.rules;
    }

    /**
     * Returns validation class name
     * 
     * @returns string Validation class name
     */
     getValidationName(): string {
        return this.constructor.name;
    }
}