<script lang="ts" setup>
import { Button } from "~/components/ui/button"
import { ETaskStatus, type ITask } from "~/types/models/task.model"
import { useTaskStore } from "~/pinia/task.pinia"
import { v4 as uuidv4 } from "uuid"

const taskStore = useTaskStore()

const tasks = computed<ITask[]>(() => {
  return taskStore.getTasks
})

const triggerAddTask = (newTaskTitle: string): void => {
  const newTask: ITask = {
    id: uuidv4(),
    title: newTaskTitle,
    status: ETaskStatus.TODO,
    subtasks: [],
  }
  taskStore.addTask(newTask)
}

onMounted(() => {
  taskStore.fetchTasks()
})
</script>

<template>
  <main class="flex flex-col gap-7 px-32 pt-16">
    <div class="flex items-center justify-between">
      <h2 class="text-primary-700 text-xl font-bold">Todo List</h2>

      <BaseDialog
        title="Add Task"
        @action="(newTaskTitle: string) => triggerAddTask(newTaskTitle)"
      >
        <Button>Add Task</Button>
      </BaseDialog>
    </div>

    <div class="grid gap-7 sm:grid-cols-2 md:grid-cols-3">
      <TaskContainer v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </main>
</template>
