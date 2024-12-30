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
import { VisuallyHidden } from "radix-vue"

const props = defineProps<{
  title: string
  taskTitle?: string
}>()

const emit = defineEmits(["action"])

const inputModel = ref<string>("")

const isDialogOpen = ref<boolean>(false)

const disabledButton = computed(() => {
  if (props.taskTitle) {
    return inputModel.value.length < 1 || props.taskTitle === inputModel.value
  }
  return inputModel.value.length < 1
})

onMounted(() => {
  if (props.taskTitle) {
    inputModel.value = props.taskTitle
  }
})

const triggerAction = (): void => {
  emit("action", inputModel.value)
  isDialogOpen.value = false
}
</script>

<template>
  <Dialog v-model:open="isDialogOpen">
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent class="w-[420px]">
      <DialogTitle>{{ title }}</DialogTitle>

      <div class="flex w-full flex-col gap-5">
        <div class="grid w-full items-center gap-1.5">
          <Label for="title">Title</Label>
          <Input
            id="title"
            v-model="inputModel"
            placeholder="Enter title"
            type="text"
          />
        </div>

        <Button :disabled="disabledButton" @click.left="triggerAction"
          >{{ taskTitle ? "Edit task" : "Add task" }}
        </Button>
      </div>

      <VisuallyHidden>
        <DialogDescription />
      </VisuallyHidden>
    </DialogContent>
  </Dialog>
</template>
