<template>

  <nav class="handheld-nav">
    <ul class="handheld-nav--links">
      <li v-for="(route, index) in routes"
          :key="`route-${index}`">
        <nuxt-link :to="route.to">
          {{route.name}}
        </nuxt-link>
      </li>
    </ul>
    <ul class="handheld-nav--controls">
      <li>
        <dark-mode-toggle />
      </li>
      <li>
        <jargon-toggle />
      </li>
    </ul>
  </nav>

</template>

<script>
export default {

  props: {
    routes: Array,
    default: () => [],
  }

}
</script>

<style lang="scss">

  .handheld-nav {
    z-index: 1000;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    position: fixed;
      top: 0;
      left: 0;
    background: $shade-lightest;
    @include pad-scale(
      y,
      $default: $space-6,
    );

    .dark-mode & {
      background: $shade-darkest;
    }

  }

</style>