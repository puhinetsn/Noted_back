import { Express, Request, Response } from "express";
import validateResource from "./middleware/validateResource";
import { createProjectSchema, getProjectSchema } from "./schema/project.schema";
import {
  createProjectHandler,
  getProjectHandler,
} from "./controller/project.controller";

function routes(app: Express) {
  app.get("/main", (_req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post(
    "/api/project",
    validateResource(createProjectSchema),
    createProjectHandler
  );
  app.get(
    "/api/project/:id",
    validateResource(getProjectSchema),
    getProjectHandler
  );
}

export default routes;
