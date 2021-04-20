<template>

  <div class="sidebar-action-wrapper">
    <slot />
  </div>

</template>

<script>

export default {

}

</script>

<style lang="scss">

  .sidebar-action-wrapper {
    width: 100%;

    .sidebar-action-wrapper--inner {
      width: 225px;
      max-width: 100%;
      @include wrapper(between, center, $no-wrap: true);
      padding: $space-2 $space-3;
      margin-bottom: $space-6;
      font-size: $text-body;
      color: $dark-mode-text-color;
      background: $title-color;
      border-radius: $border-radius;

      .dark-mode & {
        color: $title-color;
        background: $dark-mode-title-color;
        svg {
          fill: $title-color;
        }
      }

      &.brand {
        background: $brand-dark;
        .dark-mode & {
          background: $brand-light;
        }
      }

      &.accent {
        background: $accent-dark;
        .dark-mode & {
          background: $accent-base;
        }
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