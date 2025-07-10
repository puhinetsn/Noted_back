import { InvalidParamsError } from "../models/shared/errors/invalidParamsError.class";
import { TaskFields } from "../models/task.interface";
import prisma from "../utils/connect";
import { createChange } from "./change_log.service";

export async function createTask(input: TaskFields) {
  const task = await prisma.task.create({
    data: {
      ...input,
      created_at: new Date(),
      last_update: new Date(),
      begin_date: new Date(input.begin_date),
      end_date: new Date(input.end_date),
    },
    include: {
      ChangeLog: true,
    },
  });

  return task;
}

export async function findTask(taskId: number) {
  const task = await prisma.task.findFirst({
    where: { id: taskId },
    include: {
      ChangeLog: true,
    },
  });

  if (!task) {
    throw new InvalidParamsError("Can not find task");
  }
  return task;
}

export async function findTasks(projectId: number) {
  const tasks = await prisma.task.findMany({
    where: { project_id: projectId },
    include: {
      ChangeLog: true,
    },
  });
  return tasks;
}

export async function findAndUpdateTask(taskId: number, input: TaskFields) {
  const oldTask = await findTask(taskId);
  if (!oldTask) {
    throw new InvalidParamsError("Can not find task");
  }
  await createChange(oldTask, input);

  const task = await prisma.task.update({
    where: { id: taskId },
    data: {
      ...input,
      last_update: new Date(),
      begin_date: new Date(input.begin_date),
      end_date: new Date(input.end_date),
    },
    include: {
      ChangeLog: true,
    },
  });

  return task;
}

export async function deleteTask(taskId: number) {
  return await prisma.task.delete({
    where: { id: taskId },
  });
}
