<template>

  <figure class="media-asset"
         :class="[
            {'with-caption': content.show_caption},
            classExtensions
          ]">

    <lightbox-modal v-if="content.enable_lightbox"
                    :isActive="lightboxModalIsActive"
                    :asset="content"
                    :showCaption="content.show_caption"
                    @close="closeLightboxModal" />

    <img class="media-asset--image"
         :class="[{'can-lightbox': content.enable_lightbox}]"
         :src="content.media.filename"
         :alt="content.media.alt"
         @click="openLightboxModal" />

    <figcaption v-if="content.show_caption"
                class="media-asset--caption">
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
      },

      lightboxModalIsActive: false,

    }
  },

  methods: {
    openLightboxModal: function() {
      if(this.content.enable_lightbox) {
        this.lightboxModalIsActive = true;
      }
    },
    closeLightboxModal: function() {
      this.lightboxModalIsActive = false;
    }
  }

}
</script>

<style lang="scss">

  .media-asset {

    @include margin-scale(
      y,
      $default: $space-6,
      $on-laptop: $space-8,
    );

    .media-asset--image {
      max-height: 90vh;
    }

    .media-asset--image, .media-asset--caption {
      margin: 0 auto;
    }

    .media-asset--caption {
      @include x-pad($space-2);
      text-align: center;
    }

    &.with-caption {
      .media-asset--image {
        margin-bottom: $space-3;
      }
    }

    &.thumbnail-image {
      .media-asset--image {
        @include media-from($tablet, max-width, 25%);
      }
    }

    &.small-image {
      .media-asset--image {
        @include media-from($tablet, max-width, 50%);
      }
    }

    &.medium-image {
      .media-asset--image {max-height: 60vh;}
      .media-asset--image, .media-asset--caption {
        @include media-from($tablet, max-width, 75%);
      }
    }

    &.large-image {
      .media-asset--image {max-height: 75vh;}
      .media-asset--image, .media-asset--caption {
        @include media-from($tablet, max-width, 90%);
      }
    }

    &.styled-image {
      .media-asset--image {
        border-radius: $space-1;
        @include shadow($elevation-light);
      }
    }

    &.align-left {
      .media-asset--image, .media-asset--caption {
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

  .media-asset--image {
    &.can-lightbox {
      &:hover {
        cursor: zoom-in;
      }
    }
  }

</style>