<template>
  <div class="container">
    <div class="filter-container">
      <FilterItem></FilterItem>
    </div>
    <div class="container-order-unit">
      <OrderUnit></OrderUnit>
    </div>
  </div>
</template>

<script setup lang="ts">

  import FilterItem from "./FilterItem.vue"
  import OrderUnit from "~/components/content/OrderUnit.vue";

</script>

<style scoped lang="scss">

</style>