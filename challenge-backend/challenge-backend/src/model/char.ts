import { CharLocation } from "./char-location";

export var FAKE_CHAR_ID: string = "98f1e76a-96e5-11eb-a8b3-0242ac130003";

export class Char {
    id: string;
    location: CharLocation;

    constructor() {
        this.id = FAKE_CHAR_ID;
        this.location = new CharLocation(10, 10);
    }
}
