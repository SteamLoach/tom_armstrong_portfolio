<template>

   <tab-lock class="modal-wrapper">

    <modal-wrapper  :clickAnywhereToClose="true"
                    @closeModal="close">

      <div class="modal-wrapper--control-row">
        <button class="modal-wrapper--close"
                @click="close"
                ref="firstValidTab">
          <svg-loader :content="{icon_name: 'close-icon'}" />
          <span>Close</span>
        </button>
      </div>

      <figure class="lightbox-modal--inner">
        <div class="lightbox-modal--image"
              :lazy-background="asBackground"
              role="img"
              aria-describedby="lightbox-modal-caption">
        </div>
        <figcaption id="lightbox-modal-caption"
                    class="lightbox-modal--caption">
          <span>
            {{this.content.show_caption ? content.media.title : ''}}
          </span>
        </figcaption>
      </figure>

    </modal-wrapper>

  </tab-lock>

</template>


<script>

import {storyblokImageService} from '@/mixins/storyblokImageService'

export default {

  mixins: [storyblokImageService],

  mounted() {
    this.storyblokImageServiceMixin.filename = this.content.media.filename;
  },

  data() {
    return {

      logRef: `<lightbox-modal> [${new Date().getTime()}]`,

      storyblokImageServiceMixin: {
        filename: ''
      },

    }
  },

  computed: {

    content: function() {
      return this.$store.state.lightboxModal.content;
    },

  },

  methods: {
    close: function() {
      this.$store.commit('closeModal', {modal: 'lightboxModal'})
    },
  }

}

</script>

<style lang="scss">

  .lightbox-modal--inner {
    flex: 1;
    @include row(between, center, $direction: column, $no-wrap: true);
    @include pad-scale(
      x,
      $default: $space-2,
      $on-laptop: $space-8,
    );

    &:hover {
      cursor: zoom-out;
    }
  }

  .lightbox-modal--image {
    @include row(center, center);
    flex: 1;
    @include background-image($size: contain);
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
    span {
      display: inline-block;
      max-width: $narrow-width;
    }
  }

</style>