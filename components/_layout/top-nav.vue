<template>

  <nav class="top-nav">

    <ul class="top-nav-links">
      <li>
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/development-portfolio">
          Development Portfolio
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/design-portfolio">
          Design Portfolio
        </nuxt-link>
      </li>
    </ul>

    <ul class="top-nav-controls">
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

}

</script>

<style lang="scss">

  .top-nav {
    @include media-until($tablet, display, none);
    @include row(between, center);
    @include pad-scale(
      x,
      $on-tablet: $space-4,
      $on-laptop: $space-6,
    )
  }

  .top-nav-links {
    li {
      display: inline-block;
      padding: $space-2 $space-4;
      font-size: $text-larger;
      font-weight: 200;
    }
  }

  .top-nav-controls {
    li {
      display: inline-block;
    }
  }

</style>