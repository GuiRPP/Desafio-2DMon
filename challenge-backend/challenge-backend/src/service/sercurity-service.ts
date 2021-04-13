import { LoginSession } from './../model/login-session';
import { Request, Response } from "express";
import { assert } from "../util/util";
import { findSession } from '../repository/session-repository';


export function validateJWT(req: Request, res: Response, next) {
    let jwt: string = req.headers.jwt as string;
    try {
        assert(jwt != null, "Invalid Token");

        var session:LoginSession = findSession(jwt);

        assert(session != undefined, "Invalid Token");

        //Save the accountID in the request object
        (req as any).loginSession = session;

        next();
    } catch (error) {
        return res.status(400).send(error.message);
    }
}
