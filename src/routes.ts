import { Express, Request, Response } from "express";
import validateResource from "./middleware/validateResource";
import {
  createProjectSchema,
  getProjectSchema,
  updateProjectSchema,
} from "./schema/project.schema";
import {
  createProjectHandler,
  deleteProjectHandler,
  getProjectHandler,
  updateProjectHandler,
} from "./controller/project.controller";

function routes(app: Express) {
  app.post(
    "/api/project/create",
    validateResource(createProjectSchema),
    createProjectHandler
  );
  app.get(
    "/api/project/:id",
    validateResource(getProjectSchema),
    getProjectHandler
  );
  app.put(
    "/api/project/:id",
    validateResource(updateProjectSchema),
    updateProjectHandler
  );
  app.delete(
    "/api/project/:id",
    validateResource(getProjectSchema),
    deleteProjectHandler
  );
}

export default routes;
