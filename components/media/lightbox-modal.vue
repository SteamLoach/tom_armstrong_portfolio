<template>

  <slide-x-right-transition>
    <modal-wrapper  v-if="isActive"
                    :clickAnywhereToClose="true"
                    @closeModal="close">

      <figure class="lightbox-modal--image">
        <picture>
          <source v-for="breakpoint in breakpoints"
                  :media="`(max-width: ${breakpoint.media})`"
                  :srcset="`${CDN}/fit-in/${breakpoint.dimensions}${src}`"
                  :key="`${breakpoint.media}-lightbox-breakpoint`" />
          <img :title="content.enable_lightbox ? 'Click to close' : ''"
              :src="content.media.filename"
              :alt="content.media.alt" />
        </picture>
      </figure>

      <figcaption class="lightbox-modal--caption">
        <span>{{showCaption ? content.media.title : ''}}</span>
      </figcaption>

    </modal-wrapper>
  </slide-x-right-transition>

</template>


<script>

import {storyblokImageService} from '@/mixins/storyblokImageService'

export default {

  mixins: [storyblokImageService],

  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    content: {
      type: Object,
      default: () => {},
    },
    showCaption: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      logRef: `<lightbox-modal> [${new Date().getTime()}]`,
      storyblokImageServiceMixin: {
        filename: this.content.media.filename
      },
    }
  },

  computed: {
    imageSrc: function() {

    },
  },

  methods: {
    close: function() {
      this.$emit('close');
    }
  }

}

</script>

<style lang="scss">

  .lightbox-modal--image {
    @include wrapper(center, center);
    width: 100%;
    flex: 1;
    @include pad-scale(
      x,
      $default: $space-2,
      $on-laptop: $space-8,
    );

    img {
      max-height: 80vh;
      margin: 0 auto;
    }

    &:hover {
      cursor: zoom-out;
    }
  }

  .lightbox-modal--caption {
    width: 100%;
    @include x-pad($space-4);
    @include pad-scale(
      y,
      $default: $space-4,
      $on-laptop: $space-6,
    );
    margin-bottom: $space-6;
    text-align: center;
    background: rgba($shade-white, 0.9);
    span {
      display: inline-block;
      max-width: $narrow-width;
    }
  }

</style>