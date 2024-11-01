export enum ProgressTypes {
  CANCELED = "CANCELED",
  CLOSE = "CLOSE",
  IN_DEVELOPMENT = "IN_DEVELOPMENT",
  OPEN = "OPEN",
  READY_FOR_UI_TEST = "READY_FOR_UI_TEST",
  PAUSED = "PAUSED",
}

export interface TodoItemModel {
  title: string;
  create_date: Date;
  description: string;
  progress_type: ProgressTypes;
  id: string;
}
