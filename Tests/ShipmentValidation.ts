import assert from 'assert';
import { ShipmentObject } from '../Contracts/Types/ShipmentObject';
import Fedex from '../Services/Fedex';
import UPS from '../Services/UPS';
import ValidationFactory from '../Factories/ValidationFactory';
import UPSValidator from '../Validations/UPSValidator';
import FedexValidator from '../Validations/FedexValidator';
import CorruptedObjectException from '../Exceptions/CorruptedObjectException';

describe('Shipment Validation', function () {

  const fedexMochObject: ShipmentObject = {
    carrierServiceId: "fedexAIR",
    width: "10 cm",
    height: "10 cm",
    length: "10 cm",
    weight: "10 gram"
  };


  const UPSMochObject: ShipmentObject = {
    shipmentServiceId: "UPSExpress",
    width: "10 inch",
    height: "10 inch",
    length: "10 inch",
    weight: "10 pound"
  };

  /**
   *  Testing shipment factory  
   */
  describe('Validation Factory', function () {
    const UPSV = ValidationFactory.getInstance((new UPS(UPSMochObject)));
    const FedexV = ValidationFactory.getInstance((new Fedex(fedexMochObject)));


    it('Should return instance of UPS Validator', function () {
      assert(UPSV instanceof UPSValidator);
    });

    it('Should return instance of Fedex Validator', function () {
      assert(FedexV instanceof FedexValidator);
    });

    it('Should return return void as object rules are not violated', function () {
      assert.doesNotThrow(() => FedexV.validate(), CorruptedObjectException);
      assert.doesNotThrow(() => UPSV.validate(), CorruptedObjectException);

    });
  });

  describe('Validation classes exceptions', function () {

    describe('Validate Fedex data object', function () {
      it('Should throw exception of type CorruptedObjectException', function () {
        fedexMochObject['carrierServiceId'] = "WrongType";
        assert.throws(() => ValidationFactory.getInstance((new Fedex(fedexMochObject))).validate(), CorruptedObjectException);
      });

      it('Should throw exception of type CorruptedObjectException', function () {
        fedexMochObject['height'] = "20 wrongUnit";
        assert.throws(() => ValidationFactory.getInstance((new Fedex(fedexMochObject))).validate(), CorruptedObjectException);
      });

      it('Should throw exception of type CorruptedObjectException', function () {
        fedexMochObject['weight'] = "25 WrongUnit";
        assert.throws(() => ValidationFactory.getInstance((new Fedex(fedexMochObject))).validate(), CorruptedObjectException);
      });
    });


    describe('Validate UPS data object', function () {
      it('Should throw exception of type CorruptedObjectException', function () {
        UPSMochObject['shipmentServiceId'] = "wrongType";
        assert.throws(() => ValidationFactory.getInstance((new UPS(UPSMochObject))).validate(), CorruptedObjectException);
      });

      it('Should throw exception of type CorruptedObjectException', function () {
        UPSMochObject['height'] = "20 wrongUnit";
        assert.throws(() => ValidationFactory.getInstance((new UPS(UPSMochObject))).validate(), CorruptedObjectException);
      });

      it('Should throw exception of type CorruptedObjectException ', function () {
        UPSMochObject['weight'] = "25 wrongUnit";
        assert.throws(() => ValidationFactory.getInstance((new UPS(UPSMochObject))).validate(), CorruptedObjectException);
      });
    });
  });
});
