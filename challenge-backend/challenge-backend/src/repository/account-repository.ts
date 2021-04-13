import { Account } from './../model/account';

var accounts: Account[] = [new Account()];

export function getAccountByEmailAndPassword(email: string, password: string): Account {
    return accounts.find(a => a.email === email && a.password === password);
}
