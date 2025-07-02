export interface ChangeLog {
  id: number;
  taskId: number;
  changeTime: Date;
  changedField: string;
  oldFieldValue: string;
}
