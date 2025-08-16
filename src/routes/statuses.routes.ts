import { Router } from "express";
import validateResource from "../middleware/validateResource";
import {
  createStatusSchema,
  getStatusSchema,
  updateStatusSchema,
} from "../schema/statuses.schema";
import {
  createStatusHandler,
  deleteStatusHandler,
  getStatusesHandler,
  getStatusHandler,
  updateStatusHandler,
} from "../controller/statuses.controller";

const statusesRouter: Router = Router();

statusesRouter.post(
  "/",
  validateResource(createStatusSchema),
  createStatusHandler
);
statusesRouter.get("/:id", validateResource(getStatusSchema), getStatusHandler);
statusesRouter.get(
  "/projects/:id",
  validateResource(getStatusSchema),
  getStatusesHandler
);
statusesRouter.put(
  "/:id",
  validateResource(updateStatusSchema),
  updateStatusHandler
);
statusesRouter.delete(
  "/:id",
  validateResource(getStatusSchema),
  deleteStatusHandler
);

export default statusesRouter;
