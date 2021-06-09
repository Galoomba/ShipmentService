import Controller from "../Controllers"

/**
 * App Routes
 */
export = (app:any) => {
    app.post('/:shipmentType', Controller.save);
}