<script lang="ts" setup>
import TaskContainer from "~/components/task/TaskContainer.vue"
import { Button } from "~/components/ui/button"
import { tasks } from "~/constants/tasks"
</script>

<template>
  <main class="flex flex-col gap-7 px-32 pt-16">
    <div class="flex items-center justify-between">
      <h2 class="text-primary-700 text-xl font-bold">Todo List</h2>
      <Button>Add Task</Button>
    </div>

    <div class="grid grid-cols-3 gap-7">
      <TaskContainer v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </main>
</template>
