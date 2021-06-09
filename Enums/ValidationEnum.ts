import { ValidatorKeyTypes } from "../Contracts/ObjectKeyType";
import Validator from "../Contracts/Validator";
import Shipment from "../Services/Abstracts/Shipment";
import FedexValidator from "../Validations/FedexValidator";
import UPSValidator from "../Validations/UPSValidator";

/**
 * Validation enum.
 * Contain Validation class for dynamic load.
 * Key must be equal to class name. 
 * 
 * If new validation type added it should be added here.
 */
export const ValidationEnum: ValidatorKeyTypes = {
    'UPS': (shipment: Shipment): Validator => new UPSValidator(shipment),
    'Fedex': (shipment: Shipment): Validator => new FedexValidator(shipment),
}