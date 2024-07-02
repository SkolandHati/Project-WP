<template>
  <div class="page">
    <header>
      <Menu></Menu>
    </header>

    <main>
      <section>
        <Content></Content>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">

  import Menu from "~/components/header/HeaderPanel.vue";
  import Content from "~/components/content/Content.vue";

  useHead({
    meta: [
      { name: 'description', content: 'https://www.warfpay.com/' }
    ],
  })

  useSeoMeta({
    title: "WarfPay",
    ogTitle: 'WarfPay',
    description: "WarfPay",
    ogUrl: "https://www.warfpay.com/"
  })

</script>

<style scoped lang="scss">

  @import "assets/saas/style_for_media/mobile/mobile";
  @import "assets/saas/style_for_media/desktop/desktop";

  @include mobile;
  @include desktop;

</style>