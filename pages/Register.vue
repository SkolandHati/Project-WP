<template>

  <div class="register-container">

    <h1 class="register-head">Регистрация</h1>
    <form class="form-example"
          method="post">

      <div class="form-group">
        <inputs-input v-for="(item, index) in form_data"
                      :key="index"
                      :label="item.label"
                      :placeholder="item.placeholder"
                      v-model="user_data[item.placeholder]"></inputs-input>
      </div>

    </form>

    <button class="btn" style="width: 80px; height: 40px;">REG</button>

  </div>

</template>

<script setup>

  import { reactive, ref, watch } from "vue"
  import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators';
  import { useVuelidate } from '@vuelidate/core';

  const form_data = reactive([
    {
      label: "Email",
      placeholder: "email",
    },
    {
      label: "Password",
      placeholder: "password",
    },
    {
      label: "Nickname",
      placeholder: "nickname",
    }
  ])

  const user_data = reactive({
    email: "",
    password: "",
    nickname: ""
  })

  const rules = computed(() => {
    return {
      email: { required, email },
      password: { required, minLength: minLength(6) },
      nickname: { required, minLength: minLength(3) },
    }
  })
  
</script>

<style scoped lang="scss">

  .register-container {
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin: 20px 0 15px 0;

    .register-head {
      text-align: center;
    }

    .form-example {
      .form-group {
        display: grid;
        grid-template-columns: 1fr;
        gap: 40px;

        :deep(.container-input) {
          width: 100%;
          display: grid;
          position: relative;
        }

        &:deep(.input) {
          width: 270px;
          height: 35px;
          border-radius: 5px;
          border: 1px solid transparent;
          transition: all 250ms ease-in-out;
          background: #e1e1e1;
          text-align: center;
          font-size: 16px;

          &:focus {
            outline: none;
            border: 1px solid #ffde00;
          }

          &::placeholder {
            opacity: 0;
          }

          &:not(:placeholder-shown) ~ .input_label {
            top: 0;
            left: 0;
            color: rgba(225, 225, 225, 0.8);
            transform: translateY(-30px)
          }
        }

        &:deep(.input_label) {
          position: absolute;
          top:50%;
          left:50%;
          transform:translate(-50%, -50%);
          transition: all 250ms ease-in-out;
        }

        &:deep(input:focus+.input_label) {
          top: 0;
          left: 0;
          color: rgba(225, 225, 225, 0.8);
          transform: translateY(-30px);
        }
      }
    }
  }

</style>