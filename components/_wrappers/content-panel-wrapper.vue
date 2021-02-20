<template>

  <section class="content-panel-wrapper"
           :class="classExt">

    <slot />

  </section>

</template>

<script>
export default {
  props: {
    classExt: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">

  .content-panel-wrapper {
    @include pad-scale(
      x,
      $default: $space-4,
      $on-lrg-mobile: $space-5,
      $on-tablet: $space-6,
      $on-laptop: $space-8,
    );
    @include pad-scale(
      y,
      $default: $space-6,
      $on-tablet: $space-8,
    );

  &.flex-row {
    @include row(center, center);
  }

  }

</style>