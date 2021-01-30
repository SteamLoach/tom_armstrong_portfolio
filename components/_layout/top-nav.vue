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

  </nav>

</template>

<script>
export default {

}
</script>

<style lang="scss">

  .top-nav {
    @include row(center, center);
  }

  .top-nav-links {
    li {
      display: inline-block;
      padding: $space-2 $space-4;
    }
  }

</style>