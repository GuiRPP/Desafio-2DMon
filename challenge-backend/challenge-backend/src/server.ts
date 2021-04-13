import express from "express";
import bodyParser from "body-parser";
import { validateJWT } from "./service/sercurity-service";
import authController from "./controller/auth-controller";
import charController from "./controller/char-controller";

const app = express();

// json parser
app.use(bodyParser.json());

//secure routes
app.use(["/chars"], validateJWT);

//controllers
app.use("/auth", authController);
app.use("/chars", charController);

// Start
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Challenge Server running on localhost listening on port: ${PORT}`);
});
