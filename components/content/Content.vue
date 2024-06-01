<template>
  <div class="container">
    <div class="filter-container">
      <FilterItem></FilterItem>
    </div>

    <h2 class="orders-category">Want To Pay</h2>

    <div class="container-order-unit">
      <OrderUnit class="orders"
                 v-for="(item, index) in state.products"
                 :key="index"
                 :product="item"></OrderUnit>
    </div>
  </div>
</template>

<script setup lang="ts">

  import FilterItem from "./FilterItem.vue"
  import OrderUnit from "~/components/content/OrderUnit.vue";
  import {useStore} from "~/store/pinia/store"

  const state = useStore().$state

</script>

<style scoped lang="scss">

  .container-order-unit {
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    margin: 0 -12px 0 -10px;
    background-color: #313142;
    background-position: top;
    overflow-y: hidden;

    .orders:nth-child(odd) {
      background-color: rgba(97, 97, 175, 0.25);
    }

    .orders-category {
      font-size: 14px;
      padding: 5px 0 0 3%;
    }
  }

</style>