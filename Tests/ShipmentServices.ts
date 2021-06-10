import assert from 'assert';
import { ShipmentObject } from '../Contracts/Types/ShipmentObject';
import TypeNotFoundException from '../Exceptions/TypeNotFoundException';
import ShipmentFactory from '../Factories/ShipmentFactory';
import Fedex from '../Services/Fedex';
import UPS from '../Services/UPS';
import { stub } from "sinon";

describe('Shipment', function () {

  const fedexMochObject: ShipmentObject = {
    carrierServiceId: "fedexGroud",
    width: "10 cm",
    height: "10 cm",
    length: "10 cm",
    weight: "10 gram"
  };

  const UPSMochObject: ShipmentObject = {
    carrierServiceId: "fedexGroud",
    width: "10 cm",
    height: "10 cm",
    length: "10 cm",
    weight: "10 gram"
  };
  /**
   *  Testing shipment factory  
   */
  describe('Shipment Factory', function () {
    const shipment = ShipmentFactory.getInstance("UPS", UPSMochObject);

    it('Should return instance of Shipment Class  according to shipment type ', function () {
      assert(shipment instanceof UPS);
      assert.strictEqual(shipment.getValidationName(), (new UPS(UPSMochObject)).getValidationName());
    });

    it('Should return instance of Shipment Class  according to shipment type x2', function () {
      assert(ShipmentFactory.getInstance("Fedex", fedexMochObject) instanceof Fedex);
      assert.strictEqual(ShipmentFactory.getInstance("Fedex", fedexMochObject).getValidationName(), (new Fedex(fedexMochObject)).getValidationName());
    });

    it('Should not return instance of other shipment type class', function () {
      assert.notStrictEqual(shipment.getValidationName(), (new Fedex(UPSMochObject)).getValidationName());
    });

    it('Should throw exception incase of  not found', function () {
      assert.throws(() => ShipmentFactory.getInstance("uPSss", UPSMochObject), TypeNotFoundException);
    });


    describe('Factory instance data Object', function () {
      it('Should has the same data object send to factory', function () {
        assert.strictEqual(ShipmentFactory.getInstance("UPS", UPSMochObject).getDataObject(), UPSMochObject);
        assert.strictEqual(ShipmentFactory.getInstance("Fedex", fedexMochObject).getDataObject(), fedexMochObject);
      });
    });
  });

  describe('Shipment Classes save logic', function () {

    it('Should console log UPS saved!', function () {
      let spy = stub(console, "log");
      (new UPS(UPSMochObject)).save();
      assert(spy.calledWith('UPS saved!'));
      spy.restore();
    });

    it('Should console log Fedex saved!', function () {
      let spy = stub(console, "log");
      (new Fedex(fedexMochObject)).save();
      assert(spy.calledWith('Fedex saved!'));
      spy.restore();
    });
  });

});
