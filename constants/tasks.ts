import { ETaskStatus, type ITask } from "~/types/models/task.model"

export const tasks: ITask[] = [
  {
    id: 1,
    title: "Learn Japanese",
    subtasks: [
      {
        id: 1,
        title: "learn Kanji",
        status: ETaskStatus.TODO,
      },
      {
        id: 2,
        title: "learn Hiragana",
        status: ETaskStatus.TODO,
      },
      {
        id: 3,
        title: "learn Katakana",
        status: ETaskStatus.TODO,
      },
    ],
    status: ETaskStatus.TODO,
  },
  {
    id: 2,
    title: "Go shopping",
    subtasks: [
      {
        id: 1,
        title: "buy trousers",
        status: ETaskStatus.DONE,
      },
      {
        id: 2,
        title: "buy sneakers",
        status: ETaskStatus.DONE,
      },
    ],
    status: ETaskStatus.DONE,
  },
  {
    id: 3,
    title: "Clean house",
    subtasks: [
      {
        id: 1,
        title: "clean living room",
        status: ETaskStatus.TODO,
      },
      {
        id: 2,
        title: "wash clothes",
        status: ETaskStatus.DONE,
      },
    ],
    status: ETaskStatus.TODO,
  },
  {
    id: 4,
    title: "Make a dish",
    subtasks: [
      {
        id: 1,
        title: "buy rice",
        status: ETaskStatus.TODO,
      },
      {
        id: 2,
        title: "buy fish",
        status: ETaskStatus.DONE,
      },
      {
        id: 3,
        title: "make sushi",
        status: ETaskStatus.TODO,
      },
    ],
    status: ETaskStatus.TODO,
  },
]
