import { ETaskStatus, type ITask } from "~/types/models/task.model"
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
    addTask(task: ITask): void {
      this.tasks.push(task)
    },
  },
  getters: {
    getTasks(state): ITaskState["tasks"] {
      return state.tasks
    },
  },
})
