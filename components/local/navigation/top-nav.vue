<template>

  <nav class="top-nav">

    <ul class="top-nav--links">
      <li v-for="(route, index) in routes"
          :key="`route-${index}`">
        <nuxt-link :to="route.to"
                   :class="{'is-folder': route.isFolder}">
          {{route.name}}
        </nuxt-link>
      </li>
    </ul>

    <ul class="top-nav--controls">
      <li>
        <dark-mode-toggle />
      </li>
    </ul>

    <handheld-nav-toggle />

  </nav>

</template>

<script>

import handheldNavToggle from '@/components/local/utils/handheld-nav-toggle';
import darkModeToggle from '@/components/local/utils/dark-mode-toggle';

export default {

  props: {
    routes: Array,
    default: () => [],
  },

  components: {
    handheldNavToggle,
    darkModeToggle,
  },

}

</script>

<style lang="scss">

  .top-nav {
    z-index: 1000;
    @include row(end, center);
    @include row-from($tablet, between, center);
    @include pad-scale(
      y,
      $default: $space-4,
      $on-phablet: $space-4,
    );
    @include pad-scale(
      x,
      $default: $space-3,
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
    a {
      @include route-link();
    }
  }

  .top-nav--controls {
    li {
      display: inline-block;
    }
  }

</style>