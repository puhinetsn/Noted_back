export interface Task {
  id: number;
  name: string;
  description: string;
  projectId: number;
  createdAt: Date;
  statusId: number;
  lastUpdate: Date;
  priority: TaskPriority;
