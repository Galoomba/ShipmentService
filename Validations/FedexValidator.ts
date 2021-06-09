import Validator from "../Contracts/Validator";
import CorruptedObjectException from "../Exceptions/CorruptedObjectException";
import Shipment from "../Services/Abstracts/Shipment";

/**
 * Fedex Validation Class 
 */
export default class FedexValidator extends Validator {

    constructor(shipment: Shipment) {
        super(shipment);
    }

    /**
     * Implementation of validation logic.
     * 
     * Note: we could use joi/express validation, For implementing the validation logic 
     * but i found that there is no need for importing a hole lib for a simple validation.
     *   
     */
    validate(): void {

        /**
         * Fetch shipment Data Object.
         */
        const obj = this.Shipment.getDataObject();

        /**
         * Fetch shipment rules.
         */
        const rules = this.Shipment.getRulesObject();

        if (!(rules.serviceID.includes(obj.shipmentServiceId)))
            this.violations.push({ shipmentServiceId: "Wrong shipment service id !" });
        if (rules.width != this.getUnit(obj.width))
            this.violations.push({ width: "Wrong width unit !" });
        if (rules.height != this.getUnit(obj.height))
            this.violations.push({ height: "Wrong height unit !" });
        if (rules.length != this.getUnit(obj.length))
            this.violations.push({ length: "Wrong length unit !" });
        if (rules.weight != this.getUnit(obj.weight))
            this.violations.push({ weight: "Wrong weight unit !" });

        if (this.violations.length > 0)
            throw new CorruptedObjectException(this.violations);
    }

}