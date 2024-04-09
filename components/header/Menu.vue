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

    <div class="menu-ui__mobile"
         :class="{active: menu}"
         @click="openMenu">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>

  </div>

</template>

<script setup lang="ts">

  import {ref} from "vue"

  let menu = ref(false)

  let openMenu = () => {
    menu.value = !menu.value
  }

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

        .line{
          position: absolute;
          width: 40px;
          height: 4px;
          background-color: #454444;
          border-radius: 4px;
          transition: 0.5s;

          &:nth-child(1){
            transform: translateY(-15px);
          }
          &:nth-child(2){
            transform: translateY(15px);
          }
        }

        &.active{
          .line{
            &:nth-child(1){
              transform: translateY(0) rotate(45deg);
              transition-delay: 0.125s;
            }
            &:nth-child(3){
              transform: translateX(60px);
            }
            &:nth-child(2){
              transform: translateY(0) rotate(315deg);
              transition-delay: 0.25s;
            }
          }
        }
      }
    }
  }

</style>