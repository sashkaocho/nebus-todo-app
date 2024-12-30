import {
  ETaskStatus,
  type ISubtask,
  type ITask,
} from "~/types/models/task.model"
import { defineStore } from "pinia"
import type { ITaskState } from "~/types/pinia/task.types"

export const useTaskStore = defineStore("task", {
  state: (): ITaskState => ({
    tasks: [
      {
        id: "asdfasdfasdf",
        title: "Learn Japanese",
        subtasks: [
          {
            id: "asdfasdf",
            title: "learn Kanji",
            status: ETaskStatus.TODO,
          },
          {
            id: "werwer",
            title: "learn Hiragana",
            status: ETaskStatus.TODO,
          },
          {
            id: "rqwerwe",
            title: "learn Katakana",
            status: ETaskStatus.TODO,
          },
        ],
        status: ETaskStatus.TODO,
      },
      {
        id: "qwerqwer",
        title: "Go shopping",
        subtasks: [
          {
            id: "qwerqwersdf",
            title: "buy trousers",
            status: ETaskStatus.DONE,
          },
          {
            id: "lkasdf",
            title: "buy sneakers",
            status: ETaskStatus.DONE,
          },
        ],
        status: ETaskStatus.DONE,
      },
      {
        id: "urotoewtirwer",
        title: "Clean house",
        subtasks: [
          {
            id: "pqwpeomnccv",
            title: "clean living room",
            status: ETaskStatus.TODO,
          },
          {
            id: "hsdbf",
            title: "wash clothes",
            status: ETaskStatus.DONE,
          },
        ],
        status: ETaskStatus.TODO,
      },
      {
        id: "asdkjfbasdkfbnakjsdf",
        title: "Make a dish",
        subtasks: [
          {
            id: "asdfjansdfxasd",
            title: "buy rice",
            status: ETaskStatus.TODO,
          },
          {
            id: "kjhg",
            title: "buy fish",
            status: ETaskStatus.DONE,
          },
          {
            id: "mnbv",
            title: "make sushi",
            status: ETaskStatus.TODO,
          },
        ],
        status: ETaskStatus.TODO,
      },
    ],
  }),
  actions: {
    addTask(newTask: ITask): void {
      this.tasks.push(newTask)
    },
    deleteTask(taskId: string): void {
      this.tasks = this.tasks.filter((task: ITask) => task.id !== taskId)
    },
    editTask(taskId: string, newTitle: string): void {
      const task = this.tasks.find((task: ITask) => task.id === taskId)
      if (task) {
        task.title = newTitle
      }
    },
    toggleTaskStatus(taskId: string): void {
      const task = this.tasks.find((task: ITask) => task.id === taskId)
      if (task) {
        task.status =
          task.status === ETaskStatus.DONE ? ETaskStatus.TODO : ETaskStatus.DONE
      }
    },
    addSubtask(taskId: string, newSubtask: ISubtask): void {
      const task = this.tasks.find((task: ITask) => task.id === taskId)
      if (task) {
        task.subtasks.push(newSubtask)
      }
    },
    editSubtask(taskId: string, subtaskId: string, newTitle: string): void {
      const task = this.tasks.find((task: ITask) => task.id === taskId)
      if (task) {
        const subtask = task.subtasks.find(
          (subtask: ISubtask) => subtask.id === subtaskId,
        )
        if (subtask) {
          subtask.title = newTitle
        }
      }
    },
    deleteSubtask(taskId: string, subtask: ISubtask): void {
      const task = this.tasks.find((task: ITask) => task.id === taskId)
      if (task) {
        task.subtasks.splice(task.subtasks.indexOf(subtask), 1)
      }
    },
    toggleSubtaskStatus(taskId: string, subtaskId: string): void {
      const task = this.tasks.find((task: ITask) => task.id === taskId)
      if (task) {
        const subtask = task.subtasks.find(
          (subtask: ISubtask) => subtask.id === subtaskId,
        )
        if (subtask) {
          subtask.status =
            subtask.status === ETaskStatus.DONE
              ? ETaskStatus.TODO
              : ETaskStatus.DONE
        }
      }
    },
  },
  getters: {
    getTasks(state): ITaskState["tasks"] {
      return state.tasks
    },
  },
})
