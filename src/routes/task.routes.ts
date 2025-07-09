import { Router } from "express";
import validateResource from "../middleware/validateResource";
import {
  createTaskHandler,
  getTaskHandler,
  getTasksHandler,
  updateTaskHandler,
  deleteTaskHandler,
} from "../controller/task.controller";
import {
  createTaskSchema,
  getTaskSchema,
  updateTaskSchema,
} from "../schema/task.schema";

const taskRouter: Router = Router();

taskRouter.post("/", validateResource(createTaskSchema), createTaskHandler);
taskRouter.get("/:id", validateResource(getTaskSchema), getTaskHandler);
taskRouter.get(
  "/projects/:id",
  validateResource(getTaskSchema),
  getTasksHandler
);
taskRouter.put("/:id", validateResource(updateTaskSchema), updateTaskHandler);
taskRouter.delete("/:id", validateResource(getTaskSchema), deleteTaskHandler);

export default taskRouter;
