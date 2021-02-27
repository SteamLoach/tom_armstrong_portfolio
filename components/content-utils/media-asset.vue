<template>

  <figure class="media-asset"
         :class="[
            {'with-caption': content.show_caption},
            classExtensions
          ]">

    <img :src="content.media.filename"
         :alt="content.media.alt" />

    <figcaption v-if="content.show_caption">
      {{content.media.title}}
    </figcaption>

  </figure>

</template>

<script>

import {classExtensions} from '@/mixins/classExtensions'

export default {

  mixins: [classExtensions],

  props: {
    content: {
      type: Object,
      default: () => {},
    },
    classExt: {
      type: Array,
      default: () => [],
    }
  },

  data() {
    return {
      logRef: `<media-asset> [${new Date().getTime()}]`,
      classExtensionsMixin: {
        prop: 'class_extensions'
      }
    }
  },

}
</script>

<style lang="scss">

  .media-asset {

    @include margin-scale(
      y,
      $default: $space-6,
      $on-laptop: $space-8,
    );

    img {
      max-height: 90vh;
    }

    img, figcaption {
      margin: 0 auto;
    }

    figcaption {
      @include x-pad($space-2);
      text-align: center;
    }

    &.with-caption {
      img {
        margin-bottom: $space-3;
      }
    }

    &.thumbnail-image {
      img {
        @include media-from($tablet, max-width, 25%);
      }
    }

    &.small-image {
      img {
        @include media-from($tablet, max-width, 50%);
      }
    }

    &.medium-image {
      img {max-height: 60vh;}
      img, figcaption {
        @include media-from($tablet, max-width, 75%);
      }
    }

    &.large-image {
      img {max-height: 75vh;}
      img, figcaption {
        @include media-from($tablet, max-width, 90%);
      }
    }

    &.styled-image {
      img {
        border-radius: $space-1;
        @include shadow($elevation-light);
      }
    }

    &.align-left {
      img, figcaption {
        margin-left: 0;
      }
    }

    &.narrow-width {
      max-width: $narrow-width;
    }
    &.medium-width {
      max-width: $medium-width;
    }
    &.wide-width {
      max-width: $wide-width;
    }
    &.extra-wide-width {
      max-width: $extra-wide-width;
    }

  }

</style>