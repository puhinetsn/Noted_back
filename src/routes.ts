import { Express, Request, Response } from "express";
import validateResource from "./middleware/validateResource";
import {
  createProjectSchema,
  getProjectSchema,
  updateProjectSchema,
} from "./schema/project.schema";
import {
  createProjectHandler,
  getProjectHandler,
  updateProjectHandler,
} from "./controller/project.controller";

function routes(app: Express) {
  app.get("/main", (_req: Request, res: Response) => {
    res.sendStatus(200);
  });

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
}

export default routes;
