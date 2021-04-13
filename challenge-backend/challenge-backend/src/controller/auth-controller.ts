import { Router, Request, Response } from "express";
import { login } from "../repository/session-repository";

var router = Router();

router.post("/", (req: Request, res: Response): void => {
    let { email, password } = req.body;

    try {
        let session = login(email, password);
        res.status(200).send(session.token);
    } catch (e) {
        res.status(500).send("Error to login");
    }

});

export = router;