import { Router } from 'express';
import PersonController from '../controllers/PersonController';

const personRouter = Router();
const personController = new PersonController();

personRouter.post("/search", personController.find);
personRouter.get("/:id", personController.findById);
personRouter.post("/", personController.create);
personRouter.delete("/:id", personController.delete);
personRouter.put("/:id", personController.update);

export default personRouter;


