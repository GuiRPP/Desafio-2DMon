import { FAKE_CHAR_ID } from "./char";

export class Account {
    id: string;
    email: string;
    password: string;
    char: string;

    constructor() {
        this.id = "c93cb525-cb15-446b-82ea-213b6d99f124";
        this.email = "df@df.com";
        this.password = "desafio2021";
        this.char = FAKE_CHAR_ID;
    }
}