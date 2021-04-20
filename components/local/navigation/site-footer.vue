<template>

  <footer class="site-footer">

    <ul class="site-footer--bio">
      <li>
        <a href="https://github.com/SteamLoach"
           target="_blank"
           rel="noopener">
           <svg-loader :content="{icon_name: 'github-logo'}"
                       aria-hidden="true" />
           Github
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/its-tom-armstrong/"
           target="_blank"
           rel="noopener">
           <svg-loader :content="{icon_name: 'linkedin-logo'}"
                       aria-hidden="true" />
           LinkedIn
        </a>
      </li>
    </ul>


    <ul class="site-footer--quick-links">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
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

    <ul class="site-footer--version">
      <li>v{{$config.buildVersion}}</li>

      <li>
        © Tom Armstrong {{new Date().getFullYear()}}
      </li>
    </ul>


  </footer>

</template>

<script>

import darkModeToggle from '@/components/local/utils/dark-mode-toggle';

export default {

  components: {
    darkModeToggle,
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
    @include row(between, end);
    @include y-pad($space-4);
    margin-top: $space-4;
    border-top: 1px solid $border-color;
    .dark-mode & {
      border-color: $dark-mode-border-color;
    }
  }

  .site-footer--version,
  .site-footer--quick-links,
  .site-footer--bio {
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
      min-height: 30px;
      @include wrapper(center, center);
      &:not(:first-child) {
        padding-left: $space-2;
        margin-left: $space-2;
        border-left: 1px solid $shade-base;
        .dark-mode & {
          border-color: $dark-mode-border-color;
        }
      }
    }
    button {
      padding: 0;
    }
  }

  .site-footer--bio {
    @include media-from($tablet, text-align, left);
    li:not(:last-child) {
      margin-bottom: $space-4;
    }
    a {
      @include wrapper(center, center);
      @include wrapper-from($tablet, start, center);
    }
    svg {
      @include size($text-larger);
      margin-right: $space-1;
    }
  }
  .site-footer--version {
    @include media-from($tablet, text-align, right);
  }

</style>