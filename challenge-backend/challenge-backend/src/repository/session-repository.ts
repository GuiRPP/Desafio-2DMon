import { LoginSession } from '../model/login-session';
import { getAccountByEmailAndPassword } from './account-repository';

var sessions: LoginSession[] = [];

export function findSession(token: string) {
    return sessions.find(s => s.token === token);
}

export function login(email: string, password: string): LoginSession {

    let account = getAccountByEmailAndPassword(email, password);

    if (account) {
        invalidatePreviousSessions(email);
        let session = new LoginSession(account);
        sessions.push(session);
        return session;
    }
    throw new Error("Invalid username or password");
}

function invalidatePreviousSessions(email: string) {
    sessions = sessions.filter(l => l.account.email !== email);
}
