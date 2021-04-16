<template>
  <header class="page-header-wrapper">
    <slot />
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">

  .page-header-wrapper {
    @include pad-scale(
      x,
      $default: $space-3,
      $on-lrg-mobile: $space-4,
      $on-tablet: $space-6,
    );
    @include margin-scale(
      top,
      $default: $space-6,
      $on-tablet: $space-9,
    );
    @include margin-scale(
      bottom,
      $default: $space-10,
      $on-laptop: $space-10,
    );
  }

</style>