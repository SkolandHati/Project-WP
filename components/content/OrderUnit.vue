<template>
  <div class="order-unit">

    <div class="unit-image">

      <div class="container-image-product">
        <img class="image" src="../../assets/image/test/photo_2024-03-21_11-38-13.jpg" alt="image">
        <p class="status">wtb</p>
      </div>

      <div class="product-description">
        <h2 class="name-product">{{name_to_uppercase}}</h2>
        <p class="piece-product">{{props.product.piece}}</p>
        <p class="price-product">{{props.product.price_product}} Platinum each</p>
      </div>

    </div>

    <div class="order-button">
      <ui-order-button></ui-order-button>
    </div>

    <div class="info-user">
      <h3>Aresfwwq</h3>
      <h3>- IN GAME</h3>
    </div>

  </div>
</template>

<script setup lang="ts">

  import {computed} from "vue";
  import UiOrderButton from "~/components/kit/UiOrderButton.vue";

  const props = defineProps({
      product:{
        required: true,
        type: Object
      }
    })


  const name_to_uppercase = computed(() => {
    if (props.product.item_name) {
      let data = props.product.item_name[0].toUpperCase() + props.product.item_name.slice(1)
      return data
    }
    else {
      return "Not Name"
    }
  })

console.log(name_to_uppercase.value)

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

    .info-user{
      display: flex;
      grid-column: 1/-1;
      padding: 10px 0 0 0;
    }
  }

</style>