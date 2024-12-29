<script lang="ts" setup>
import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { ETaskStatus, type ITask } from "~/types/models/task.model"
import { useTaskStore } from "~/pinia/task.pinia"
import { VisuallyHidden } from "radix-vue"
import { v4 as uuidv4 } from "uuid"

const taskStore = useTaskStore()

const isDialogOpen = ref<boolean>(false)
const newTaskTitle = ref<string>("")

const triggerAddTask = (): void => {
  const newTask: ITask = {
    id: uuidv4(),
    title: newTaskTitle.value,
    status: ETaskStatus.TODO,
    subtasks: [],
  }
  taskStore.addTask(newTask)
  isDialogOpen.value = false
}
</script>

<template>
  <Dialog v-model:open="isDialogOpen">
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent class="w-[420px]">
      <DialogTitle>Add Task</DialogTitle>

      <div class="flex w-full flex-col gap-5">
        <div class="grid w-full items-center gap-1.5">
          <Label for="title">Title</Label>
          <Input
            id="title"
            v-model="newTaskTitle"
            placeholder="Enter title"
            type="title"
          />
        </div>

        <Button @click.left="triggerAddTask()">Add Task</Button>
      </div>

      <VisuallyHidden>
        <DialogDescription />
      </VisuallyHidden>
    </DialogContent>
  </Dialog>
</template>
