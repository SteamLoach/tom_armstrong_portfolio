<template>

  <article class="media-card"
           :class="[
              classExtensions,
              `media-${alignMedia}`,
              `${layout}-layout`
            ]">

    <div class="media-card--inner">

      <div :class="[`media-card--${slotOrder[0]}`]">
        <slot :name="slotOrder[0]" />
      </div>

      <div :class="[`media-card--${slotOrder[1]}`]">
        <slot :name="slotOrder[1]" />
      </div>

    </div>

  </article>

</template>

<script>

import {classExtensions} from '@/mixins/classExtensions'

export default {

  mixins: [classExtensions],

  props: {
    layout: {
      type: String,
      default: 'row',
      validator: function(val) {
        return ['row', 'column', 'split-panel'].includes(val);
      }
    },
    alignMedia: {
      type: String,
      default: 'right',
      validator: function(val) {
        return ['left', 'right'].includes(val);
      }
    },
    classExt: {
      type: Array,
      default: () => ['wide'],
    }
  },

  data() {
    return {
      logRef: `<media-card> [${new Date().getTime()}]`,
      classExtensionsMixin: {
        prop: 'class_extensions'
      }
    }
  },

  computed: {
    slotOrder: function() {
      return this.alignMedia === 'right' ?
        ['copy', 'media'] : ['media', 'copy'];
    },
  }

}

</script>

<style lang="scss">


  //Classes
  .media-card {

    &.pad-light {
      @include x-pad($space-4);
    }
    &.pad-medium {
      @include x-pad($space-6);
    }
    &.pad-heavy {
      @include x-pad($space-8);
    }

    &.wide {
      max-width: $wide-width;
    }
    &.extra-wide {
      max-width: $extra-wide-width;
    }

    &.full-width {
      width: 100%;
    }

    //Column Layout
    &.three-column {
      @include column-scale(
        $default: 24,
        $on-tablet: 12,
        $on-laptop: 8,
      );
    }

    &.column-layout {

      .media-card--copy,
      .media-card--media {
        width: 100%;
      }
      &.media-left {
        .media-card--media {
          margin-bottom: $space-4;
        }
      }

    }

    //Row Layout
    &.row-layout {
      .media-card--copy {
        @include column-scale(
          $default: 24,
          $on-laptop: 14,
        );
      }

      .media-card--media {
        @include column-scale(
          $default: 24,
          $on-laptop: 10,
        );
      }

      &.media-right {
        .media-card--copy {
          @include pad-scale(
            right,
            $default: 0,
            $on-laptop: $space-6,
          );
        }
      }

      &.media-left {
        .media-card--copy {
          @include pad-scale(
            left,
            $default: 0,
            $on-laptop: $space-6,
          );
        }
      }
    }

  //Split Panel Layout
  &.split-panel-layout {
    .media-card--inner {
      @include row(center, center);
    }
    .media-card--copy,
    .media-card--media {
      height: 100%;
    }
    .media-card--copy {
      @include column-scale(
        $default: 24,
        $on-desktop: 9,
      );
      @include pad-scale(
        x,
        $on-desktop: $space-6,
      );
    }
    .media-card--media {
      @include column-scale(
        $default: 24,
        $on-desktop: 15,
      );
    }
    &.media-right {
      @include pad-scale(
        left,
        $on-desktop: $space-8,
      );
    }
    &.media-left {
      @include pad-scale(
        right,
        $on-desktop: $space-8,
      );
    }
  }

  }



  .media-card--inner {
    @include container(between, stretch);
  }

  .media-card--copy {
    @include margin-scale(
        bottom,
        $default: $space-4,
    );

  }

  .media-card--media {

    .thumbnail-image & {
      img {
        max-height: 175px;
      }
    }
    .small-image & {
      img {
        max-height: 250px;
      }
    }
    .medium-image & {
      img {
        max-height: 375px;
      }
    }

    img {
    @include max-height-scale(
      //$default: 325px,
    );
      margin: 0 auto;
    }

  }

</style>