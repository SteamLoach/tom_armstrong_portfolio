<template>

  <span class="sidebar-action-wrapper">
    <slot />
  </span>

</template>

<script>

export default {

}

</script>

<style lang="scss">

  .sidebar-action-wrapper {

    .sidebar-action-wrapper--inner {
      width: 225px;
      max-width: 100%;
      @include wrapper(between, center, $no-wrap: true);
      padding: $space-2 $space-3;
      margin-bottom: $space-6;
      font-size: $text-body;
      color: $dark-mode-text-color;
      background: $dark-mode-page-background;
      border-radius: $border-radius;

      .dark-mode & {
        color: $title-color;
        background: $page-background;
        svg {
          fill: $title-color;
        }
      }

      &.brand {
        background: $brand-base;
      }

      &.accent {
        background: $accent-base;
      }

      strong {
        line-height: 1.2;
      }

      svg {
        @include size($title-large);
        margin-left: $space-4;
        fill: $dark-mode-text-color;
      }
    }


  }

</style>