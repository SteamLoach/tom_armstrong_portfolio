<template>

  <main class="page-wrapper">
    <slot />
  </main>

</template>

<script>
export default {

}
</script>

<style lang="scss">

  .page-wrapper {
    @include pad-scale(
      x,
      $default: $space-4,
      $on-tablet: $space-4,
      $on-laptop: $space-6,
    );

    @include margin-scale(
      x,
      $default: 0,
      $on-tablet: $space-4,
      $on-laptop: $space-6,
    );
  }



</style>