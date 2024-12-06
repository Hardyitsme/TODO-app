export enum ProgressTypes {
  CLOSE = "CLOSE",
  IN_DEVELOPMENT = "IN_DEVELOPMENT",
  PAUSED = "PAUSED",
}

export interface TodoItemModel {
  title: string;
  create_date: Date;
  description: string;
  progress_type: ProgressTypes;
  id: string;
  critical_level: number;
}
