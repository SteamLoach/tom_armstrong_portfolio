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
  }

</style>