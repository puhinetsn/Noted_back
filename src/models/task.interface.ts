import { TaskPriority } from "../generated/prisma";
export interface CreateTask {
  name: string;
  description: string;
  projectId: number;
  statusId: number;
  priority: TaskPriority;
}
