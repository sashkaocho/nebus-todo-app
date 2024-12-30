import { defaultTasks } from "~/constants/tasks"
import {
  ETaskStatus,
  type ISubtask,
  type ITask,
} from "~/types/models/task.model"
import { defineStore } from "pinia"
import type { ITaskState } from "~/types/pinia/task.types"
import { getData, setData } from "nuxt-storage/local-storage"

export const useTaskStore = defineStore("task", {
  state: (): ITaskState => ({
    tasks: [],
  }),
  actions: {
    saveTasksToLocalStorage(): void {
      setData("tasks", this.tasks)
    },
    fetchTasks(): void {
      if (!getData("tasks")) {
        setData("tasks", defaultTasks)
      }
      this.tasks = getData("tasks")
    },
    addTask(newTask: ITask): void {
      this.tasks.push(newTask)
      this.saveTasksToLocalStorage()
    },
    deleteTask(taskId: string): void {
      this.tasks = this.tasks.filter((task: ITask) => task.id !== taskId)
      this.saveTasksToLocalStorage()
    },
    editTask(taskId: string, newTitle: string): void {
      const task = this.tasks.find((task: ITask) => task.id === taskId)
      if (task) {
        task.title = newTitle
        this.saveTasksToLocalStorage()
      }
    },
    toggleTaskStatus(taskId: string): void {
      const task = this.tasks.find((task: ITask) => task.id === taskId)
      if (task) {
        task.status =
          task.status === ETaskStatus.DONE ? ETaskStatus.TODO : ETaskStatus.DONE
        this.saveTasksToLocalStorage()
      }
    },
    addSubtask(taskId: string, newSubtask: ISubtask): void {
      const task = this.tasks.find((task: ITask) => task.id === taskId)
      if (task) {
        task.subtasks.push(newSubtask)
        this.saveTasksToLocalStorage()
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
          this.saveTasksToLocalStorage()
        }
      }
    },
    deleteSubtask(taskId: string, subtask: ISubtask): void {
      const task = this.tasks.find((task: ITask) => task.id === taskId)
      if (task) {
        task.subtasks.splice(task.subtasks.indexOf(subtask), 1)
        this.saveTasksToLocalStorage()
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
          this.saveTasksToLocalStorage()
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
