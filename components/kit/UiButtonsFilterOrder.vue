<template>
  <span class="ui-buttons-filter"
        :class="{isActiveRight: isActiveRight.status}">{{props.isActiveRight.label}}</span>
</template>

<script setup lang="ts">

  const props = defineProps({
    isActiveRight: {
      required:true,
      type: Object
    }
  })

</script>

<style scoped lang="scss">

  @import "../../assets/saas/mixin/ui_mixin/ui_mixin";
  @import "../../assets/enum/conts";

  .span:first-child {
    background-color: #63b88d;
  }

  .ui-buttons-filter {
    position: relative;
    display: grid;
    grid-template-columns: 10px auto;
    justify-content: center;
    text-align: center;
    line-height: 30px;
    width: 80%;
    gap: 10px;
    margin: auto;
    margin-top: 10px;
    max-width: 200px;
    height: 35px;
    background-color: #75d6e6;
    color: black;
    transition: all 500ms ease;
    border: 1px solid transparent;
    border-radius: 2px;

    &:first-child:hover {
      cursor: pointer;
      transition: all 500ms ease;
      background-color: rgb(103, 85, 243);
      border: 1px solid #5e589c;
    }

    &:hover {
      cursor: pointer;
      transition: all 500ms ease;
      background-color: #1280d6;
      border: 1px solid #55a3ec;

      &::before {
        content: "";
        margin-top: 9px;
        float: right;
        width: 10px;
        height: 10px;
        color: #545497;
        border: 2px solid #545497;
        background-color: black;
        border-radius: 50%;
      }
    }
    &::before {
      content: "";
      margin-top: 9px;
      float: right;
      width: 10px;
      height: 10px;
      color: #000000;
      border: 2px solid #000000;
      border-radius: 50%;
    }

    &.isActiveRight{
      @include ui_buttons_active($bg_color__active_state,
                                 $border_ui__active_state,
                                 $before_element_color__active_state,
                                 $before_element_border__active_state,
                                 $before_element_background-color__active_state);
    }
  }

</style>