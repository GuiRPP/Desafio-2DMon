import { Account } from "./account";
import { Char } from "./char";
import { v4 as uuidv4 } from 'uuid';
import { findChar } from "../repository/char-repository";

export class LoginSession {
    account: Account;
    char: Char;
    token: string;

    constructor(account:Account) {
        this.token = uuidv4();
        this.account = account;
        this.char = findChar(account.char);
    }
}