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

  @import "assets/saas/media/mobile";

  @include mobile;

</style>