<script lang="ts" setup>
import BaseAlertDialog from "~/components/base/BaseAlertDialog.vue"
import BaseDialog from "~/components/base/BaseDialog.vue"
import { Button } from "~/components/ui/button"
import { Checkbox } from "~/components/ui/checkbox"
import {
  ETaskStatus,
  type ISubtask,
  type ITask,
} from "~/types/models/task.model"
import { useTaskStore } from "~/pinia/task.pinia"
import { v4 as uuidv4 } from "uuid"

const props = defineProps<{
  task: ITask
}>()

const taskStore = useTaskStore()

const taskStatusStyle = computed<string>(() => {
  return props.task.status === ETaskStatus.DONE
    ? "text-success"
    : "text-warning"
})

const subtaskStatusStyle = (subtask: ISubtask): string => {
  return subtask.status === ETaskStatus.DONE ? "text-success" : "text-warning"
}

const triggerAddSubtask = (newSubtaskTitle: string): void => {
  const newSubtask: ISubtask = {
    id: uuidv4(),
    title: newSubtaskTitle,
    status: ETaskStatus.TODO,
  }
  taskStore.addSubtask(props.task.id, newSubtask)
}
</script>

<template>
  <div class="flex flex-col gap-9">
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
            <BaseDialog
              :task-title="subtask.title"
              title="Edit Subtask"
              @action="
                (newTitle: string) =>
                  taskStore.editSubtask(task.id, subtask.id, newTitle)
              "
            >
              <Icon
                class="text-warning cursor-pointer text-lg"
                name="ic:baseline-edit"
              />
            </BaseDialog>

            <BaseAlertDialog
              :task="subtask"
              @action="taskStore.deleteSubtask(task.id, subtask)"
            >
              <Icon
                class="text-error cursor-pointer text-lg"
                name="ic:baseline-delete"
              />
            </BaseAlertDialog>

            <Checkbox
              :checked="subtask.status === ETaskStatus.DONE"
              class="h-4 w-4"
              @click.stop="taskStore.toggleSubtaskStatus(task.id, subtask.id)"
            />
          </section>
        </div>
      </li>
    </ul>

    <div class="flex items-center justify-between">
      <BaseDialog
        title="Add Subtask"
        @action="
          (newSubtaskTitle: string) => triggerAddSubtask(newSubtaskTitle)
        "
      >
        <Button>Add Subtask</Button>
      </BaseDialog>

      <div class="flex items-center gap-3">
        <BaseDialog
          :task-title="task.title"
          title="Edit Task"
          @action="(newTitle: string) => taskStore.editTask(task.id, newTitle)"
        >
          <Button class="bg-warning hover:bg-warning/80">Edit</Button>
        </BaseDialog>

        <BaseAlertDialog :task="task" @action="taskStore.deleteTask(task.id)">
          <Button class="bg-error hover:bg-error/80">Delete</Button>
        </BaseAlertDialog>
      </div>
    </div>
  </div>
</template>
