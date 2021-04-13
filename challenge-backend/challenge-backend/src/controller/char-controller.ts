import { LoginSession } from './../model/login-session';
import { Router, Request, Response } from "express";
var router = Router();

router.get("/", (req: Request, res: Response): void => {
    let session: LoginSession = (req as any).loginSession;

    res.status(200).send(session.char);
});

router.post("/location", (req: Request, res: Response): void => {
    let session: LoginSession = (req as any).loginSession;
    let { x, y } = req.body;

    try {
        session.char.location.x = x;
        session.char.location.y = x;
        res.status(200).send();
    } catch (e) {
        res.status(200).send("Error to update char location");
    }
});

export = router;