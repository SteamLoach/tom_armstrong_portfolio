<template>

  <div class="layout-column"
       :class="[classExtensions]">

    <component v-for="(item, index) in content.items"
               :is="item.component"
               :content="item"
               :key="item._uid"
               :index="index"
               v-editable="item" />

  </div>

</template>

<script>

import {classExtensions} from '@/mixins/classExtensions'

export default {

  mixins: [classExtensions],

  props: {
    content: {
      type: Object,
      required: true,
    },
    classExt: {
      type: Array,
      default: () => []
    }
  },

  data() {

    return {

      logRef: `<layout-column> [${new Date().getTime()}]`,

      classExtensionsMixin: {
        prop: 'class_extensions'
      }

    }

  },

}

</script>

<style lang="scss">

  .layout-column {

    &.half-width-fixed,
    &.third-width-fixed,
    &.quarter-width-fixed {
      @include margin-scale(
        bottom,
        $default: $space-8,
        $on-tablet: 0,
      );
    }

    &.half-width,
    &.third-width,
    &.quarter-width {
      @include margin-scale(
        bottom,
        $default: $space-8,
        $on-laptop: 0,
      );
    }

    &.half-width-fixed {
      @include column-scale(
        $default: 24,
        $on-tablet: 12,
      )
    }

    &.third-width-fixed {
      @include column-scale(
        $default: 24,
        $on-tablet: 8,
      );
    }

    &.quarter-width-fixed {
      @include column-scale(
        $default: 24,
        $on-tablet: 6,
      );
    }

    &.third-width {
      @include column-scale(
        $default: 24,
        $on-tablet: 12,
        $on-laptop: 8,
      )
    }

    &.available-width {
      flex: 1;
    }

    &.x-pad-light {
      @include pad-scale(
        x,
        $default: 0,
        $on-tablet: $space-2,
        $on-desktop: $space-4,
      );
    }

    &.x-pad-medium {
      @include pad-scale(
        x,
        $default: 0,
        $on-tablet: $space-4,
        $on-desktop: $space-6,
      );
    }

    &.margin-bottom-mediun {
      @include margin-scale(
        bottom,
        $default: $space-8,
      );
    }

    &.border-left {
      @include media-from($tablet, border-left, 1px solid $border-color);
    }
    &.border-right {
      @include media-from($tablet, border-right, 1px solid $border-color);
    }
    &.border-left, &.border-right {
      .dark-mode & {
        border-color: $dark-mode-border-color;
      }
    }

  }

</style>