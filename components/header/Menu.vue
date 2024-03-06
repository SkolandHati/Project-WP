<template>

  <div class="header__menu">

    <div class="menu-logo">
      <h1>Logo</h1>
    </div>

    <div class="menu-ui__desktop">
      <button></button>
      <button></button>
      <button></button>
      <button></button>
    </div>

    <div class="menu-ui__mobile">

    </div>

  </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

  @import "assets/saas/media/mobile";
  
  @include mobile;

  .header__menu{
    display: flex;
    justify-content: space-between;

    .menu-ui{

      &__desktop{
        display: flex;
        gap: 20px;

        button{
          width: 25px;
          height: 25px;
        }
      }

      &__mobile{
        display: none;
      }
    }
  }

</style>