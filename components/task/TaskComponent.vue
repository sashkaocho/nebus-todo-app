<script lang="ts" setup>
import { Button } from "~/components/ui/button"
import {
  ETaskStatus,
  type ISubtask,
  type ITask,
} from "~/types/models/task.model"

const props = defineProps<{
  task: ITask
}>()

const taskStatusStyle = computed<string>(() => {
  return props.task.status === ETaskStatus.DONE
    ? "text-success"
    : "text-warning"
})

const subtaskStatusStyle = (subtask: ISubtask): string => {
  return subtask.status === ETaskStatus.DONE ? "text-success" : "text-warning"
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex w-full items-center justify-between">
      <h2 class="text-2xl font-semibold">{{ task.title }}</h2>
      <p :class="taskStatusStyle">{{ task.status }}</p>
    </div>

    <ul class="flex list-disc flex-col items-start gap-3 pl-4">
      <li v-for="subtask in task.subtasks" :key="subtask.id" class="w-full">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <p class="text-lg">{{ subtask.title }}</p>
            <Icon
              :class="subtaskStatusStyle(subtask)"
              :name="
                subtask.status === ETaskStatus.DONE
                  ? 'ic:baseline-check'
                  : 'ic:baseline-timelapse'
              "
            />
          </div>

          <section class="flex items-center gap-4">
            <Icon
              class="text-warning cursor-pointer text-lg"
              name="ic:baseline-edit"
            />
            <Icon
              class="text-error cursor-pointer text-lg"
              name="ic:baseline-delete"
            />
          </section>
        </div>
      </li>
    </ul>

    <div class="flex items-center justify-between">
      <Button class="ring-0">Add Subtask</Button>
      <Button class="bg-error hover:bg-error/80">Delete Task</Button>
    </div>
  </div>
</template>
