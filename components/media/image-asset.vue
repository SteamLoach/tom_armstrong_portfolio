<template>

  <figure class="image-asset"
         :class="[
            {'with-caption': content.show_caption},
            classExtensions
          ]">

    <lightbox-modal v-if="content.enable_lightbox"
                    :isActive="lightboxModalIsActive"
                    :content="content"
                    :showCaption="content.show_caption"
                    @close="closeLightboxModal" />

    <picture>
      <source v-for="breakpoint in breakpoints"
              :media="`(max-width: ${breakpoint.media})`"
              :srcset="`${CDN}/fit-in/${breakpoint.dimensions}${src}`"
              :key="`${breakpoint.media}-breakpoint`" />
      <img class="image-asset--image"
          :title="content.enable_lightbox ? 'Click to enlarge' : ''"
          :class="[{'can-lightbox': content.enable_lightbox}]"
          :src="defaultSrc"
          :alt="content.media.alt"
          @click="openLightboxModal" />
    </picture>

    <figcaption v-if="content.show_caption"
                class="image-asset--caption">
      {{content.media.title}}
    </figcaption>

  </figure>

</template>

<script>

import {classExtensions} from '@/mixins/classExtensions'
import {storyblokImageService} from '@/mixins/storyblokImageService'

export default {

  mixins: [classExtensions, storyblokImageService],

  props: {
    content: {
      type: Object,
      default: () => {},
    },
    classExt: {
      type: Array,
      default: () => [],
    },
    defaultSize: {
      type: String,
    }
  },

  data() {

    return {

      logRef: `<image-asset> [${new Date().getTime()}]`,

      classExtensionsMixin: {
        prop: 'class_extensions'
      },

      storyblokImageServiceMixin: {
        filename: this.content.media.filename,
      },

      lightboxModalIsActive: false,

    }
  },

  computed: {
    defaultSrc: function() {
      return this.defaultSize ?
        `${this.CDN}/fit-in/${this.defaultSize}/${this.src}`
        : this.content.media.filename
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

  .image-asset {

    &.y-margin-medium {
      @include margin-scale(
        y,
        $default: $space-6,
        $on-laptop: $space-8,
      );
    }

    .image-asset--image {
      max-height: 90vh;
    }

    .image-asset--image, .image-asset--caption {
      margin: 0 auto;
    }

    .image-asset--caption {
      @include x-pad($space-2);
      text-align: center;
    }

    &.with-caption {
      .image-asset--image {
        margin-bottom: $space-3;
      }
    }

    &.thumbnail-image {
      .image-asset--image {
        @include media-from($tablet, max-width, 25%);
      }
    }

    &.small-image {
      .image-asset--image {
        @include media-from($tablet, max-width, 50%);
      }
    }

    &.medium-image {
      .image-asset--image {max-height: 60vh;}
      .image-asset--image, .image-asset--caption {
        @include media-from($tablet, max-width, 75%);
      }
    }

    &.large-image {
      .image-asset--image {max-height: 75vh;}
      .image-asset--image, .image-asset--caption {
        @include media-from($tablet, max-width, 90%);
      }
    }

    &.styled-image {
      .image-asset--image {
        border-radius: $space-1;
        @include shadow($elevation-light);
      }
    }

    &.align-left {
      .image-asset--image, .image-asset--caption {
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

  .image-asset--image {
    &.can-lightbox {
      &:hover {
        cursor: zoom-in;
      }
    }
  }

</style>