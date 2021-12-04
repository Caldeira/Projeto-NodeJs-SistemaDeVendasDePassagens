import * as express from "express";
import createUserRouter from "./userRouter";
import createCompanhiaRouter from "./companhiaRouter";
import createFuncionarioRouter from "./funcionarioRouter";
import createViagemRouter from "./viagemRouter";
import createPoltronaRouter from "./poltronaRouter";

const createRouters = (app: express.Express) => {
  app.use("/users", createUserRouter());
  app.use("/companhia", createCompanhiaRouter());
  app.use("/funcionario", createFuncionarioRouter());
  app.use("/viagem", createViagemRouter());
  app.use("/poltrona", createPoltronaRouter());
};

export default createRouters;
