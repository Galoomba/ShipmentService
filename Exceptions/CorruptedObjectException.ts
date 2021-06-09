import BaseException from "./BaseException"

/**
 * Corrupted Object exception
 * 
 * Object is corrupted when one or more of it's attributes violates the class rules.
 */
export default class CorruptedObjectException extends BaseException {

    constructor(errors: Array<Object>) {
        super(422, "Object Corrupted", errors);
    }
}