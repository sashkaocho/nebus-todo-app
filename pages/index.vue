<script lang="ts" setup>
import AddTaskDialog from "~/components/dialogs/AddTaskDialog.vue"
import { Button } from "~/components/ui/button"
import type { ITask } from "~/types/models/task.model"
import { useTaskStore } from "~/pinia/task.pinia"

const taskStore = useTaskStore()

const tasks = computed<ITask[]>(() => {
  return taskStore.getTasks
})
</script>

<template>
  <main class="flex flex-col gap-7 px-32 pt-16">
    <div class="flex items-center justify-between">
      <h2 class="text-primary-700 text-xl font-bold">Todo List</h2>
      <AddTaskDialog>
        <Button>Add Task</Button>
      </AddTaskDialog>
    </div>

    <div class="grid grid-cols-3 gap-7">
      <TaskContainer v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </main>
</template>
