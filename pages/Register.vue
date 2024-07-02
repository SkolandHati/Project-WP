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
                      v-model="v$[item.placeholder].$model"
                      :errors="v$[item.placeholder].$errors"></inputs-input>
      </div>

    </form>

    <UiButtonRegister>
      <button class="go-register"
              @click="submit_form"
              :class="{active: active}">Зарегистрироваться</button>
    </UiButtonRegister>

  </div>

</template>

<script setup>

  import { reactive, ref } from "vue"
  import { required, email, minLength, maxLength, helpers, sameAs } from '@vuelidate/validators';
  import { useVuelidate } from '@vuelidate/core';
  import { create_client } from "~/store/modules/CreateClient.js";
  import { useStore } from "~/store/pinia/StoreUserData.js";
  import UiButtonRegister from "~/components/kit/UiButtonRegister.vue";

  const submit_form = () => {
    try {
      v$.value.$touch()
      if (v$.value.$error) return
      go_register()
    }
    catch (error) {
      return  errors.value = error.message
    }
  }

  const go_register = async function() {
    active.value = !active.value;
    await Promise.all([
      create_client(user_data.email, user_data.password, user_data.nickname),
      store.create_client(user_data),
    ])
    setTimeout(() => {active.value = false}, 250)
  }

  const active = ref(false)
  const errors = ref(false)
  const store = useStore()

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
      label: "Confirm Password",
      placeholder: "confirm_password",
    },
    {
      label: "Nickname",
      placeholder: "nickname",
    }
  ])

  const user_data = reactive({
    id: "1",
    email: "",
    password: "",
    confirm_password: "",
    nickname: "",
    token: 'ewfwefew',
    admin: false
  })

  const rules = computed(() => {
    return {
      email: { required : helpers.withMessage("Поле электронной почты обязательное", required),
               email:  helpers.withMessage("Неверный формат электронной почты", email),
               maxLength: helpers.withMessage("Слишком много символов", maxLength(50))},
      password: { required: helpers.withMessage("Поле пароля обязательное", required),
                  minLength: helpers.withMessage("Минимальная длина пароля шесть символов", minLength(6)),
                  maxLength: helpers.withMessage("Слишком много символов", maxLength(24))},
      confirm_password: {
                required: helpers.withMessage("Введите пароль повторно", required),
                someAsPassword: helpers.withMessage("Пароли должны совпадать", sameAs(user_data.password))
      },
      nickname: { required: helpers.withMessage("Поле никнейма обязательное", required),
                  minLength: helpers.withMessage("Минимальная длина никнейма три символа", minLength(3)),
                  maxLength: helpers.withMessage("Слишком много символов", maxLength(24)),},
    }
  })

  const v$ = useVuelidate(rules, user_data)

</script>

<style scoped lang="scss">

  @import "assets/enum/conts";

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
          max-width: 100%;
          display: grid;
          position: relative;
        }

        &:deep(.input) {
          width: 270px;
          min-width: 272px;
          height: 35px;
          border-radius: 5px;
          border: 1px solid transparent;
          transition: all 250ms ease-in-out;
          background: #e1e1e1;
          text-align: center;
          font-size: $fonts-size__md;

          &.invalid {
            width: 100%;
            border: 1px solid red;
          }

          &.valid:not(:placeholder-shown) {
            width: 100%;
            border: 1px solid green;
          }

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

        &:deep(.form-error) {
          position: absolute;
          transition: all 50ms ease-in-out;
          transform: translateY(-30px);
        }

        &:deep(.form-error+input+.input_label) {
          opacity: 0;
        }

        &:deep(.info-error) {
          color: red;
          text-align: center;
          white-space: nowrap;
          font-size: $fonts-size__md;
        }
      }
    }

    .go-register {
      width: 100%;
      height: 33px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      font-size: $fonts-size__md;
      background-color: #55a3ec;
      transition: all 400ms ease-in-out;

      &.active {
        background-color: #63b88d;
      }
    }
  }

</style>