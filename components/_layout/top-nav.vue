<template>

  <nav class="top-nav">

    <ul class="top-nav--links">
      <li v-for="(route, index) in routes"
          :key="`route-${index}`">
        <nuxt-link :to="route.to">
          {{route.name}}
        </nuxt-link>
      </li>
    </ul>

    <ul class="top-nav--controls">
      <li>
        <dark-mode-toggle />
      </li>
      <li>
        <jargon-toggle />
      </li>
    </ul>

    <handheld-nav-toggle />

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

  .top-nav {
    z-index: 1001;
    @include row(end, center);
    @include row-from($tablet, between, center);
    @include pad-scale(
      y,
      $default: $space-2,
      $on-phablet: $space-3,
    );
    @include pad-scale(
      x,
      $default: $space-2,
      $on-phablet: $space-3,
      $on-tablet: $space-4,
      $on-laptop: $space-6,
    )
  }

  .top-nav--links,
  .top-nav--controls {
    @include hidden-until($tablet);
  }

  .top-nav--links {
    li {
      display: inline-block;
      padding: $space-2 $space-4;
      font-size: $text-large;
      font-weight: 200;
    }
  }

  .top-nav--controls {
    li {
      display: inline-block;
    }
  }

</style>