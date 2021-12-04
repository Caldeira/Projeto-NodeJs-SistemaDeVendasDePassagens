import { Router } from "express";
import Container from "typedi";
const router = Router();
import { ViagemController } from "../controllers/ViagemController";

const getController = (): ViagemController => {
  return Container.get<ViagemController>("ViagemController");
};

const createRouter = () => {
  router.get("", (req, res) => getController().list(req, res));
  router.post("", (req, res) => getController().create(req, res));
  router.get("/:id", (req, res) => getController().get(req, res));
  router.patch("/:id", (req, res) => getController().update(req, res));
  router.delete("/:id", (req, res) => getController().remove(req, res));

  return router;
};

export default createRouter;
