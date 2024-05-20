<template>
  <div class="order-unit">

    <div class="unit-image">

      <div class="container-image-product">
        <img class="image" src="../../assets/image/test/photo_2024-03-21_11-38-13.jpg" alt="image">
        <p class="status">wtb</p>
      </div>

      <div class="product-description">
        <h2 class="name-product">Arcana</h2>
        <p class="piece-product">1</p>
        <p class="price-product">25 Platinum each</p>
      </div>

    </div>

    <div class="order-button">
      <span class="sell-buy">ergreg</span>
    </div>

    <div class="info-user">
      <h3>Aresfwwq</h3>
      <h3>- IN GAME</h3>
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

  .order-unit{
    display: grid;
    grid-template-columns: 80% auto;
    max-width: 420px;
    padding: 3%;

    .unit-image{
      display: grid;
      grid-template-columns: 50px auto;
      padding-bottom: 10px;
      border-bottom: 1px solid gray;
      gap: 15px;

      .container-image-product{
        display: grid;
        justify-content: center;
        margin: auto;
        gap: 2px;

        .image{
          width: 40px;
          height: 40px;
          margin: auto;
          border-radius: 50%;
        }

        .status{
          text-align: center;
        }
      }
    }

    .order-button{
      width: 100%;
      height: 30px;
      margin: auto;
      margin-top: 50%;
      background-color: chartreuse;
    }

    .info-user{
      display: flex;
      grid-column: 1/-1;
      padding: 10px;
      padding-left: 0;
    }
  }

</style>