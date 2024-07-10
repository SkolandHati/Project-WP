<template>
  <nav class="menu">
    <ul v-if="user_data.session"
        class="list-items__authenticated">
      <UiButtonsItem v-for="(item, index) in route_authenticated"
                     :key="index"
                     :class_name="'item'"
                     :label="'fwe'"
                     :route_path="`/Auth`"
                     :metadata="''"></UiButtonsItem>
    </ul>

    <ul v-else class="list-items__guest">
      <UiButtonsItem v-for="(item, index) in route_guest"
                     :key="index"
                     :class_name="'item'"
                     :label="item.label"
                     :route_path="item.path"
                     :metadata="item.metadata">
      </UiButtonsItem>
    </ul>

  </nav>
</template>

<script setup>

  import { useStore } from "@/store/pinia/StoreUserData";
  import { useRouter } from "vue-router";
  import { route_guest, route_authenticated } from "@/store/enumJS/router/route.js"
  import UiButtonsItem from "~/components/slots/UiButtonsItem.vue";


  const user_data = useStore().$state.user;
  const state = useStore()
  console.log(route_guest)

</script>

<style scoped lang="scss">

  .menu {
    background-color: #3d3d5e;
    min-width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 10px 0 10px 0;
    margin: 0 -10px 0 -10px;

    .list-items__authenticated , .list-items__guest{
      display: grid;
      gap: 10px;

      .item {
        text-align: center;
        padding: 10px;
        min-width: 170px;
        height: 20px;
        list-style-type: none;
        background-color: white;
        border-radius: 3px;
        border: 1px solid transparent;
        font-weight: 300;
        background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
        transition: all 500ms ease;

        &:hover {
          cursor: pointer;
          color: white;
          border: 1px solid #043865;
        }
      }
    }
  }

</style>