import * as express from "express";
import createUserRouter from "./userRouter";
import createCompanhiaRouter from "./companhiaRouter";

const createRouters = (app: express.Express) => {
  app.use("/users", createUserRouter());
  app.use("/companhia", createCompanhiaRouter());
};

export default createRouters;
