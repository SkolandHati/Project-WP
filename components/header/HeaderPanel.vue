<template>

  <nav class="header__menu">

    <div class="menu-logo">
      <h1>Logo</h1>
    </div>

    <menu class="menu-ui__desktop">
      <button></button>
      <button></button>
      <button></button>
      <button></button>
    </menu>

    <menu class="menu-ui__mobile"
         :class="{active: menu}"
         @click="openMenu">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </menu>

    <drop-menu class="drop-menu" :class="{open: menu}"></drop-menu>

  </nav>

</template>

<script setup lang="ts">

  import DropMenu from "~/components/header/DropMenu.vue";
  import {ref} from "vue"

  let menu = ref(false)

  let openMenu = () => {
    menu.value = !menu.value
  }

</script>

<style scoped lang="scss">

  @import "../../assets/saas/style_for_media/mobile/mobile";
  @import "../../assets/saas/mixin/ui_mixin/ui_mixin.scss";
  
  @include mobile;

  .header__menu {
    background-color: #313142;
    display: flex;
    position: relative;
    justify-content: space-between;

    .menu-ui {

      &__desktop {
        display: flex;
        gap: 20px;

        button {
          width: 25px;
          height: 25px;
        }
      }

      &__mobile {
        display: flex;
        position: relative;
        margin: 10px 0 0 0;
        width: 60px;
        height: 60px;
        background: #fff;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        .line {
          position: absolute;
          width: 40px;
          height: 4px;
          background-color: #454444;
          border-radius: 4px;
          transition: 0.5s;

          &:nth-child(1) {
            transform: translateY(-15px);
          }
          &:nth-child(2) {
            transform: translateY(15px);
          }
        }

        &.active {
          .line {
            &:nth-child(1) {
              transform: translateY(0) rotate(45deg);
              transition-delay: 0.125s;
            }
            &:nth-child(3) {
              transform: translateX(60px);
            }
            &:nth-child(2) {
              transform: translateY(0) rotate(315deg);
              transition-delay: 0.25s;
            }
          }
        }
      }
    }

    .drop-menu {
      width: 106%;
      height: auto;
      overflow: hidden;
      position: absolute;
      opacity: 0;
      bottom: -330%;
      right: -1px;
      z-index: 1;

      @include ui_dropMenu_animation(fadeInUp);
      @keyframes fadeInUp {
        from {
          transform: scaleY(1);
          opacity: 1;
        }
        to {
          transform: scaleY(0);
          opacity: 1;
        }
      }

      &.open {
        display: grid;
        opacity: 1;
        top: 115%;
        animation-name: fadeInDown;
        -webkit-animation-name: fadeInDown;
        animation-timing-function: ease-out;
        animation-duration: 300ms;
        transform-origin: 50% 0%;

        @include ui_dropMenu_animation(fadeInDown);
        @keyframes fadeInDown{
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }
      }
    }
  }

</style>