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

    &.half-width {
      @include column-scale(
        $default: 24,
        $on-laptop: 12,
      )
    }

    &.third-width {
      @include column-scale(
        $default: 24,
        $on-tablet: 12,
        $on-laptop: 8,
      )
    }

    &.quarter-width {
      @include column-scale(
        $default: 24,
        $on-tablet: 12,
        $on-laptop: 6,
      )
    }

    &.available-width {
      flex: 1;
    }

    &.x-pad-medium {
      @include pad-scale(
        x,
        $default: 0,
        $on-tablet: $space-4,
        $on-desktop: $space-6,
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