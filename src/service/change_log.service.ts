import { Task } from "../generated/prisma";
import { TaskFields } from "../models/task.interface";
import prisma from "../utils/connect";

export async function createChange(task: Task, newValue: Partial<TaskFields>) {
  for (const [key, value] of Object.entries(newValue)) {
    await prisma.changeLog.create({
      data: {
        created_at: new Date(),
        task_id: task.id,
        old_field_value: String(task[key as keyof TaskFields]),
        new_field_value: String(value),
        changed_field: key,
      },
    });
  }
}
