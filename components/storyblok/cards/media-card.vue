<template>

  <article class="media-card"
           :class="[
              classExtensions,
              `media-${mediaAlignment}`,
              `${layout}-layout`
            ]">

      <div :class="[`media-card--${slotOrder[0]}`]">
        <component v-for="item in content[slotOrder[0]]"
                   :is="item.component"
                   :content="item"
                   :key="item._uid"
                   v-editable="item" />
      </div>

      <div :class="[`media-card--${slotOrder[1]}`]">
        <component v-for="item in content[slotOrder[1]]"
                   :is="item.component"
                   :content="item"
                   :key="item._uid"
                   v-editable="item" />
      </div>

  </article>

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
    index: {
      type: Number,
      default: 0,
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

    mediaAlignment: function() {
      if(this.content.align_media) {
        if(['left', 'right'].includes(this.content.align_media)) {
          return this.content.align_media
        } else if(this.content.align_media === 'alternate') {
          if(!this.$store.getters.isHandheld) {
            return this.$toolkit.isEven(this.index + 1) ? 'left' : 'right'
          } else {
            return 'right'
          }
        }
      }
    },

    slotOrder: function() {
      return this.mediaAlignment === 'right' ?
        ['copy', 'media'] : ['media', 'copy'];
    },

    layout:  function() {
      return this.content.layout ? this.content.layout : 'row'
    }

  }

}

</script>

<style lang="scss">


  //Classes
  .media-card {

    &.x-pad-light {
      @include x-pad($space-4);
    }

    &.x-pad-medium {
      @include pad-scale(
        x,
        $default: 0,
        $on-tablet: $space-4,
        $on-desktop: $space-6,
      );
    }

    &.x-pad-heavy {
      @include x-pad($space-8);
    }

    &.half-width {
      @include column-scale(
        $default: 24,
        $on-laptop: 12,
      );
    }

    &.third-width {
      @include column-scale(
        $default: 24,
        $on-tablet: 12,
        $on-laptop: 8,
      );
    }

    &.quarter-width {
      @include column-scale(
        $default: 24,
        $on-tablet: 12,
        $on-laptop: 6,
      );
    }

    &.full-width {
      width: 100%;
    }

    &.column-layout {

      height: 100%;
      @include container(center, start, $direction: column);

      .media-card--copy,
      .media-card--media {
        width: 100%;
      }

      .media-card--copy {
        flex: 1;
        @include wrapper(between, center, $direction: column);
      }

      &.media-left {
        .media-card--media {
          margin-bottom: $space-5;
        }
        .media-card--copy {
          margin-bottom: 0;
        }
      }

    }

    //Row Layout
    &.row-layout {

      @include container(between, stretch);

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

      @include row(center, start);

      .media-card--copy,
      .media-card--media {
        height: 100%;
      }
      .media-card--copy {
        @include column-scale(
          $default: 24,
          $on-lrg-mobile: 20,
          $on-tablet: 18,
          $on-laptop: 9,
        );
        @include pad-scale(
          x,
          $on-laptop: $space-6,
        );
        @include pad-scale(
          top,
          $on-desktop: $space-8,
        );
      }
      .media-card--media {
        @include column-scale(
          $default: 24,
          $on-laptop: 15,
        );
      }
      /*
      &.media-right {
        @include pad-scale(
          left,
          $on-laptop: $space-6,
          $on-desktop: $space-8,
        );
      }
      &.media-left {
        @include pad-scale(
          right,
          $on-laptop: $space-6,
          $on-desktop: $space-8,
        );
      }
      */
    }

    &.outlined {
      padding: $space-6;
      border: solid 2px $border-color;
      border-radius: $space-1;
      box-shadow: 3px 3px $border-color;
      @include transition();

      &:hover {
        border-color: $accent-base;
        box-shadow: 6px 6px $accent-base;
        .dark-mode & {
          border-color: $accent-base;
          box-shadow: 6px 6px $accent-base;
        }
      }

      .dark-mode & {
        border: solid 2px $dark-mode-border-color;
        box-shadow: 3px 3px $dark-mode-border-color;
      }
    }

  }


  .media-card--copy {
    @include margin-scale(
        bottom,
        $default: $space-4,
    );

  }

  .media-card--media {

    .thumbnail-image & {
      img, svg {
        max-height: 175px;
      }
    }
    .small-image & {
      img, svg {
        max-height: 250px;
      }
    }
    .medium-image & {
      img, svg {
        max-height: 375px;
      }
    }

  }

</style>