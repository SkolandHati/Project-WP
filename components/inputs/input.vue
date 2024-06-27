<template>

  <div class="container-input">

    <TransitionGroup>
      <div class="form-error"
           v-for="element in errors"
           :key="element.$uid">
        <span class="info-error">* {{element.$message}}</span>
      </div>
    </TransitionGroup>

    <input class="input" :class="{invalid: !!errors.length, valid: !errors.length}"
           required
           :placeholder="placeholder"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"></input>
    <label class="input_label"
           :for="label">{{label}}</label>

  </div>

</template>

<script setup>

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
    },
    errors: {
      type: Array,
      default: false,
      required: true,
    }
  })

  const emits = defineEmits(['update:modelValue'])

</script>