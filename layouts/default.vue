<template>

  <div class="site-wrapper">

    <top-nav />

    <Nuxt />

    <site-footer />

  </div>

</template>

<style lang="scss">

  .site-wrapper {
    min-height: 100vh;
    @include row(between, none, $direction: column);
  }

  .page-view {
    width: 100%;
    flex: 1;
  }

</style>
