<template>

  <footer class="site-footer">

    <span class="site-footer--copyright">
      © Tom Armstrong {{new Date().getFullYear()}}
    </span>

    <ul class="site-footer--quick-links">
      <li>
        <a href="https://github.com/SteamLoach"
           target="_blank">
           Github
        </a>
      </li>
      <li>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
      <li>
        <button @click.prevent="toTop">Top</button>
      </li>
      <li>
        <dark-mode-toggle class="in-footer" />
      </li>


    </ul>

    <span class="site-footer--version">
      v{{buildVersion}}
    </span>


  </footer>

</template>

<script>
export default {

  computed: {
    buildVersion: function() {
      return process.env.BUILD_VERSION;
    }
  },

  methods: {
    toTop: function() {
      this.$toolkit.scrollPage({
        target: '#site-wrapper',
        smooth: true,
      })
    }
  }

}
</script>

<style lang="scss">

  .site-footer {
    @include row(between, center);
    @include y-pad($space-4);
    margin-top: $space-4;
    border-top: 1px solid $border-color;
    .dark-mode & {
      border-color: $dark-mode-border-color;
    }
  }

  .site-footer--version,
  .site-footer--quick-links,
  .site-footer--copyright {
    @include column-scale(
      $default: 24,
      $on-tablet: 8,
    );
    padding: $space-4;
    font-size: $text-smaller;
    text-align: center;
  }

  .site-footer--quick-links {
    @include wrapper(center, center);
    li {
      display: inline-block;
      &:not(:first-child) {
        padding-left: $space-2;
        margin-left: $space-2;
        border-left: 1px solid $border-color;
        .dark-mode & {
          border-color: $dark-mode-border-color;
        }
      }
    }
    button {
      padding: 0;
    }
  }

  .site-footer--copyright {
    @include media-from($tablet, text-align, left);
  }
  .site-footer--version {
    @include media-from($tablet, text-align, right);
  }

</style>