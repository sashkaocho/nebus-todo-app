export interface ITask {
  id: string
  title: string
  subtasks: ISubtask[]
  status: ETaskStatus
}

export interface ISubtask {
  id: string
  title: string
  status: ETaskStatus
}

export enum ETaskStatus {
  DONE = "done",
  TODO = "todo",
}
