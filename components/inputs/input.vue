<template>

  <div class="container-input">
    <input class="input"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"></input>
    <label class="input_label"
           :for="label">{{label}}</label>
  </div>

</template>

<script setup>

  import {watch, watchEffect} from "vue";

  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    }
  })

  const updateModelValue = (e) => {
    emit('update:modelValue', e.target.value)
  }

  const emits = defineEmits(['update:modelValue'])

</script>