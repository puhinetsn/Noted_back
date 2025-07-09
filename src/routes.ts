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
import {
  createStatusSchema,
  getStatusSchema,
  updateStatusSchema,
} from "./schema/statuses.schema";
import {
  createStatusHandler,
  deleteStatusHandler,
  getStatusesHandler,
  getStatusHandler,
  updateStatusHandler,
} from "./controller/statuses.controller";
import {
  createTaskHandler,
  deleteTaskHandler,
  getTaskHandler,
  getTasksHandler,
  updateTaskHandler,
} from "./controller/task.controller";
import {
  createTaskSchema,
  getTaskSchema,
  updateTaskSchema,
} from "./schema/task.schema";

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

  app.post(
    "/api/status/create",
    validateResource(createStatusSchema),
    createStatusHandler
  );
  app.get(
    "/api/status/:id",
    validateResource(getStatusSchema),
    getStatusHandler
  );
  app.get(
    "/api/statuses/:id",
    validateResource(getStatusSchema),
    getStatusesHandler
  );
  app.put(
    "/api/status/:id",
    validateResource(updateStatusSchema),
    updateStatusHandler
  );
  app.delete(
    "/api/status/:id",
    validateResource(getStatusSchema),
    deleteStatusHandler
  );

  app.post(
    "/api/task/create",
    validateResource(createTaskSchema),
    createTaskHandler
  );
  app.get("/api/task/:id", validateResource(getTaskSchema), getTaskHandler);
  app.get("/api/tasks/:id", validateResource(getTaskSchema), getTasksHandler);
  app.put(
    "/api/task/:id",
    validateResource(updateTaskSchema),
    updateTaskHandler
  );
  app.delete(
    "/api/task/:id",
    validateResource(getTaskSchema),
    deleteTaskHandler
  );
}

export default routes;
