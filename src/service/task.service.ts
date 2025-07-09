import { TaskFields } from "../models/task.interface";
import prisma from "../utils/connect";

export async function createTask(input: TaskFields) {
  const task = await prisma.task.create({
    data: {
      ...input,
      created_at: new Date(),
      last_update: new Date(),
    },
  });
  return task;
}

export async function findTask(taskId: number) {
  const task = await prisma.task.findFirst({
    where: { id: taskId },
  });
  return task;
}

export async function findTasks(projectId: number) {
  const tasks = await prisma.task.findMany({
    where: { project_id: projectId },
  });
  return tasks;
}

export async function findAndUpdateTask(taskId: number, input: TaskFields) {
  const task = await prisma.task.update({
    where: { id: taskId },
    data: {
      ...input,
      last_update: new Date(),
    },
  });
  return task;
}

export async function deleteTask(taskId: number) {
  return await prisma.task.delete({
    where: { id: taskId },
  });
}
