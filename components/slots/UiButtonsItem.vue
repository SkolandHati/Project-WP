<template v-slot="buttons">
  <li :class="props.class_name"
      @click="follow_path(props.route_path)">
    <a>{{props.label}}</a>
  </li>
</template>

<script setup>

  import { useRouter } from "vue-router";

  const props = defineProps({
      route_path: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      class_name: {
        type: String,
        required: true,
      },
      metadata: {
        type: String,
        default: false
      }
    })

  const route = useRouter();

  const follow_path = async (path) => {
    if (props.metadata) await route.push(path + "/" + props.metadata)
    await route.push(path)
  }

</script>