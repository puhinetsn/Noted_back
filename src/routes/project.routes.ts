import { Router } from "express";
import {
  createProjectSchema,
  getProjectSchema,
  updateProjectSchema,
} from "../schema/project.schema";
import validateResource from "../middleware/validateResource";
import {
  createProjectHandler,
  deleteProjectHandler,
  getProjectHandler,
  updateProjectHandler,
} from "../controller/project.controller";

const projectsRouter: Router = Router();

projectsRouter.post(
  "/",
  validateResource(createProjectSchema),
  createProjectHandler
);
projectsRouter.get(
  "/:id",
  validateResource(getProjectSchema),
  getProjectHandler
);
projectsRouter.put(
  "/:id",
  validateResource(updateProjectSchema),
  updateProjectHandler
);
projectsRouter.delete(
  "/:id",
  validateResource(getProjectSchema),
  deleteProjectHandler
);

export default projectsRouter;
