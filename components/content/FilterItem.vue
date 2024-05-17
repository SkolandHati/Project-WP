<template>
  <div class="filter-item">
    <h2 class="title-head">Most Recent Orders</h2>

      <div class="user-status">
        <h3>Online Status</h3>

        <div class="container-buttons-one">
          <span class="on-site"><a>On Site</a></span>
          <span class="in-game">In Game</span>
        </div>

      </div>

      <div class="type-order">
        <h3>Order Buy</h3>

        <div class="container-buttons-two">
          <span class="sell">Sell</span>
          <span class="buy">Buy</span>
        </div>

      </div>

    </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

  .filter-item{
    background-color: #454444;
    display: grid;
    min-width: 100%;
    margin: 20px -10px 0 -10px;
    padding-bottom: 15px;
    gap: 15px;
    color: white;

    .title-head{
      text-align: center;
      padding-top: 5px;
    }

    .user-status,.type-order{
      h3{
        text-align: center;
      }

      .container-buttons-one,.container-buttons-two{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 15px 20px;
        align-items: center;
        gap: 15px;
        span{
          position: relative;
          display: grid;
          grid-template-columns: 10px auto;
          justify-content: center;
          text-align: center;
          width: 80%;
          margin: auto;
          margin-top: 10px;
          max-width: 200px;
          height: 35px;
          background-color: white;
          color: black;
          line-height: 30px;
          gap: 10px;

          &:hover{
            cursor: pointer;
          }

          &::before{
            margin-top: 8px;
            content: "";
            float: right;
            width: 10px;
            height: 10px;
            color: #ff0000;
            border: 2px solid red;
            border-radius: 50%;
          }
        }
      }
    }
  }

</style>