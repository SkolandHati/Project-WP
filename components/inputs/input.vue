<template>

  <label class="input_label"
         :for="props.value.label"></label>
  <input class="input"
         :placeholder="props.value.placeholder"
         :value="props.value.value"></input>

</template>

<script setup lang="ts">

  const props = defineProps({
    value: {
      type: Object,
      required: true,
    }
  })

</script>

<style scoped lang="scss">

</style>