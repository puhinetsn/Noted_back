import { Request, Response } from "express";
import { GetIdByParam } from "../models/shared/idSharedParams.interface";
import { TaskFields } from "../models/task.interface";
import {
  createTask,
  deleteTask,
  findAndUpdateTask,
  findTask,
  findTasks,
} from "../service/task.service";

export async function createTaskHandler(
  req: Request<{}, {}, TaskFields>,
  res: Response
) {
  const body = req.body;
  const task = await createTask(body);
  res.status(201).json(task);
}

export async function getTasksHandler(
  req: Request<GetIdByParam>,
  res: Response
) {
  const projectId = parseInt(req.params.id, 10);
  const tasks = await findTasks(projectId);

  if (!tasks) {
    res.status(404).json({ message: "Tasks not found" });
    return;
  }

  res.json(tasks);
}

export async function getTaskHandler(
  req: Request<GetIdByParam>,
  res: Response
) {
  const taskId = parseInt(req.params.id, 10);
  const task = await findTask(taskId);

  if (!task) {
    res.status(404).json({ message: "Task not found" });
    return;
  }

  res.json(task);
}

export async function updateTaskHandler(
  req: Request<GetIdByParam, {}, TaskFields>,
  res: Response
) {
  const taskId = parseInt(req.params.id, 10);
  const task = await findTask(taskId);

  if (!task) {
    res.status(400).json({ message: "Invalid task ID" });
    return;
  }

  const updatedStatus = await findAndUpdateTask(taskId, req.body);

  res.json(updatedStatus);
}

export async function deleteTaskHandler(
  req: Request<GetIdByParam>,
  res: Response
) {
  const taskId = parseInt(req.params.id, 10);
  const task = await findTask(taskId);

  if (!task) {
    res.status(400).json({ message: "Invalid task ID" });
    return;
  }

  await deleteTask(taskId);
  res.status(200).json({ message: "Task deleted successfully" });
}
