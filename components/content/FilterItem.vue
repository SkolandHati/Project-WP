<template>
  <div class="filter-item">
    <h2 class="title-head title_h2">Most Recent Orders</h2>

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

  let status = true

</script>

<style scoped lang="scss">

  @import "assets/saas/media/desktop";

  @include desktop;

  .filter-item{
    background-color: #313142;
    display: grid;
    min-width: 100%;
    margin: 20px -12px 0 -12px;
    padding-bottom: 15px;
    gap: 15px;
    color: #ffffff;

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

        span:first-child{
          background-color: #63b88d;
        }

        span{
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

          &:first-child:hover{
            cursor: pointer;
            transition: all 500ms ease;
            background-color: rgb(103, 85, 243);
            border: 1px solid #5e589c;
          }

          &:hover{
            cursor: pointer;
            transition: all 500ms ease;
            background-color: #1280d6;
            border: 1px solid #55a3ec;

            &::before{
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
        &::before{
          content: "";
          margin-top: 9px;
          float: right;
          width: 10px;
          height: 10px;
          color: #000000;
          border: 2px solid #000000;
          border-radius: 50%;
        }
      }
    }
  }
}

</style>