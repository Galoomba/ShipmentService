import Validator from "../Contracts/Validator";
import Shipment from "../Services/Abstracts/Shipment";
import { ValidationEnum } from "../Enums/ValidationEnum";
import ValidationNotFoundException from "../Exceptions/ValidationNotFoundException";

/**
 * Validation Factory 
 * 
 * Return a instance of Validation classes dynamically based on Shipment class name. 
 */
export default class ValidationFactory {

    public static INSTANCE: Validator;

    private constructor() { }

    public static getInstance(shipment: Shipment) {
        try {
            this.INSTANCE = ValidationEnum[shipment.getValidationName()](shipment);
            return this.INSTANCE;
        } catch (e) {
            throw new ValidationNotFoundException();
        }
    }
}