<script lang="ts" setup>
import BaseAlertDialog from "~/components/base/BaseAlertDialog.vue"
import TaskComponent from "~/components/task/TaskComponent.vue"
import { Button } from "~/components/ui/button"
import { Checkbox } from "~/components/ui/checkbox"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"
import {
  ETaskStatus,
  type ISubtask,
  type ITask,
} from "~/types/models/task.model"
import { useTaskStore } from "~/pinia/task.pinia"
import { VisuallyHidden } from "radix-vue"

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
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <div
        class="bg-primary-50 hover:border-primary-300 border-primary-50 relative flex h-40 cursor-pointer flex-col items-start gap-3 overflow-hidden rounded-xl border px-5 py-3 transition-all"
      >
        <div class="flex w-full items-center justify-between">
          <div class="flex items-center gap-4">
            <Checkbox
              :checked="task.status === ETaskStatus.DONE"
              @click.stop="taskStore.toggleTaskStatus(task.id)"
            />
            <h2 class="text-xl font-medium">{{ task.title }}</h2>
          </div>

          <h2 :class="taskStatusStyle">
            {{ task.status }}
          </h2>

          <BaseAlertDialog :task="task" @action="taskStore.deleteTask(task.id)">
            <Button
              class="border-error text-error hover:bg-error absolute bottom-3 right-5 border bg-blue-50 hover:text-white"
              >delete
            </Button>
          </BaseAlertDialog>
        </div>

        <ul class="flex list-disc flex-col items-start gap-1.5 pl-4">
          <li v-for="subtask in task.subtasks" :key="subtask.id">
            <div class="flex items-center gap-3">
              <p>{{ subtask.title }}</p>
              <Icon
                :class="subtaskStatusStyle(subtask)"
                :name="
                  subtask.status === ETaskStatus.DONE
                    ? 'ic:baseline-check'
                    : 'ic:baseline-timelapse'
                "
              />
            </div>
          </li>
        </ul>
      </div>
    </SheetTrigger>

    <SheetContent class="pt-16">
      <TaskComponent :task="task" />

      <VisuallyHidden>
        <SheetDescription />
        <SheetTitle />
      </VisuallyHidden>
    </SheetContent>
  </Sheet>
</template>
