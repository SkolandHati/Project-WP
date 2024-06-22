<template>

  <div class="register-container">

    <h1 class="register-head">Регистрация</h1>
    <form class="form-example"
          method="post">

      <div class="form-group">
        <inputs-input v-for="(item, index) in user_data"
                      :key="index"
                      :value="item"></inputs-input>
      </div>

    </form>

  </div>

</template>

<script setup lang="ts">

  import {ref, reactive} from "vue"

  const user_data = reactive([
    {
      label: "Emali",
      placeholder: "emali",
      value: ""
    },
    {
      label: "Password",
      placeholder: "password",
      value: ""
    },
    {
      label: "Nickname",
      placeholder: "nickname",
      value: ""
    }
  ])

</script>

<style scoped lang="scss">

  .register-container {
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .register-head {
      text-align: center;
    }

    .form-example {
      
      .form-group {
        display: grid;
        grid-template-columns: 1fr;
      }
    }
  }

</style>