<template>

  <div class="container-input">
    <input class="input"
           :value="props.value.value"></input>
    <label class="input_label"
           :for="props.value.label">{{props.value.label}}</label>
  </div>

</template>

<script setup lang="ts">

  const props = defineProps({
    value: {
      type: Object,
      required: true,
    }
  })

</script>