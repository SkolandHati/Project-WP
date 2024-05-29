<template>
  <div class="filter-item">
    <h2 class="title-head title_h2">Most Recent Orders</h2>

    <div class="user-status">
      <h3>Online Status</h3>

      <div class="container-buttons-one">
        <UiButtonsFilterOrder v-for="(item, index) in filter_status_user"
              :key="index"
              :is-active-right="item"
              @click="checked_button"></UiButtonsFilterOrder>
      </div>

    </div>

    <div class="type-order">
      <h3>Order Buy</h3>

      <div class="container-buttons-two">
        <UiButtonsFilterOrder v-for="(item, index) in filter_status_order"
              :key="index"
              :is-active-right="item"
              @click="checked_button_two"></UiButtonsFilterOrder>
      </div>

    </div>

  </div>

</template>

<script setup lang="ts">

  import UiButtonsFilterOrder from "~/components/kit/UiButtonsFilterOrder.vue";
  import {ref, reactive} from "vue"

  let filter_status_user = reactive([
    {
      status: true,
      label: "On Site"
    },
    {
      status: false,
      label: "In Game"
    },
  ])

  let filter_status_order = reactive([
    {
      status: true,
      label: "Order Buy"
    },
    {
      status: false,
      label: "Order Sell"
    }
  ])

  let checked_button = () => {
    if (filter_status_user[0].status === true) {
      filter_status_user[0].status = false
      filter_status_user[1].status = true
    }
    else {
      filter_status_user[0].status = true
      filter_status_user[1].status = false
    }
  }

  let checked_button_two = () => {
    if (filter_status_order[0].status === true) {
      filter_status_order[0].status = false
      filter_status_order[1].status = true
    }
    else {
      filter_status_order[0].status = true
      filter_status_order[1].status = false
    }
  }

</script>

<style scoped lang="scss">

  @import "../../assets/saas/media/desktop";

  @include desktop;

  .filter-item {
    background-color: #313142;
    display: grid;
    min-width: 100%;
    margin: 12px -12px 0 -12px;
    padding-bottom: 15px;
    gap: 15px;
    color: #ffffff;

    .title-head {
      text-align: center;
      padding-top: 5px;
    }

    .user-status, .type-order {
      h3 {
        text-align: center;
      }

      .container-buttons-one, .container-buttons-two {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 15px 20px;
        align-items: center;
        gap: 15px;
      }
    }
  }

</style>