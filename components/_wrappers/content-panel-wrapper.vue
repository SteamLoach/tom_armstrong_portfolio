<template>

  <section class="content-panel">

    <slot />

  </section>

</template>

<script>
export default {

}
</script>

<style lang="scss">

  .content-panel {

    @include row(center, center);
    padding: $space-6 $space-4;

  }

</style>