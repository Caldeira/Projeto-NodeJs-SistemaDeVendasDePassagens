import * as express from "express";
import createUserRouter from "./userRouter";
import createCompanhiaRouter from "./companhiaRouter";
import createFuncionarioRouter from "./funcionarioRouter";

const createRouters = (app: express.Express) => {
  app.use("/users", createUserRouter());
  app.use("/companhia", createCompanhiaRouter());
  app.use("/funcionario", createFuncionarioRouter());
};

export default createRouters;
