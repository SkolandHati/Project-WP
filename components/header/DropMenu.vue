<template>
  <nav class="menu">
    <ul v-if="user_data.session" class="list-items__authenticated">
      <li class="item">
        <a>Профиль</a>
      </li>
      <li class="item">
        <a>Ордера</a>
      </li>
      <li class="item"
          @click="logout_account">
        <a>Выход</a>
      </li>
    </ul>

    <ul v-else class="list-items__guest">
      <li class="item"
          @click="user_profile">
        <a>Войти</a>
      </li>
      <li class="item"
          @click="go_register">
        <a>Зарегистрироваться</a>
      </li>
    </ul>

  </nav>
</template>

<script setup>

  import { useStore } from "~/store/pinia/StoreUserData";
  import { useRouter } from "vue-router";

  const user_data = useStore().$state.user;
  const state = useStore()

  const route = useRouter();

  const user_profile = async () => {
    await route.push(`/${user_data.nickname}`);
  }

  const go_register = async () => {
    await route.push(`/Auth`);
  }

  const logout_account = async () => {
    await state.logout_account
    await window.location.reload()
  }

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