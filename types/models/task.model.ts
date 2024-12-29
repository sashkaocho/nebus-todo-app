export interface ITask {
  id: number
  title: string
  subtasks: ISubtask[]
  status: ETaskStatus
}

export interface ISubtask {
  id: number
  title: string
  status: ETaskStatus
}

export enum ETaskStatus {
  DONE = "done",
  TODO = "todo",
}
