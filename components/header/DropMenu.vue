<template>
  <nav class="menu">
    <ul class="list-items">
      <li class="item">
        <a>Первая кнопка</a>
      </li>
      <li class="item">
        <a>Вторая кнопка</a>
      </li>
      <li class="item">
        <a>Третья кнопка
        </a></li>
      <li class="item">
        <a>Четвёртая кнопка</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

  .menu {
    background-color: #55a3ec;
    min-width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 10px 0 10px 0;
    margin: 0 -10px 0 -10px;

    .list-items {
      display: grid;
      gap: 10px;

      .item {
        text-align: center;
        padding: 10px;
        min-width: 100px;
        height: 20px;
        list-style-type: none;
        background-color: white;
        border-radius: 3px;
        border: 1px solid transparent;
        font-weight: 300;

        &:hover {
          cursor: pointer;
          border: 1px solid #043865;
        }
      }
    }
  }

</style>