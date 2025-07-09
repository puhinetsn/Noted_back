import { TaskPriority } from "../generated/prisma";
export interface TaskFields {
  name: string;
  description: string;
  project_id: number;
  status_id: number;
  priority: TaskPriority;
}
