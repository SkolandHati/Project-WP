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

</script>

<style scoped lang="scss">

  @import "assets/saas/style_for_media/mobile/mobile";

  @include mobile;

</style>