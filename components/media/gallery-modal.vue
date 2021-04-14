<template>

  <tab-lock class="modal-wrapper">

    <modal-wrapper :clickAnywhereToClose="false"
                    @closeModal="close">

        <div class="modal-wrapper--control-row">
          <button class="modal-wrapper--close"
                  @click="close"
                  ref="firstValidTab">
            <svg-loader :content="{icon_name: 'close-icon'}"
                        aria-hidden="true" />
            <span>Close</span>
          </button>
        </div>

        <slide-y-up-transition mode="out-in">
          <figure class="lightbox-modal--inner gallery-modal"
              :key="$toolkit.kebabCase(content.images[currentIndex].alt)">
            <div class="lightbox-modal--image"
                :lazy-background="asBackground"
                role="img"
                aria-describedby="lightbox-gallery-caption">
            </div>
            <figcaption id="lightbox-gallery-caption"
                        class="lightbox-modal--caption">
              {{content.images[currentIndex].title}}
            </figcaption>
          </figure>
        </slide-y-up-transition>

        <div class="lightbox-gallery--controls">
          <button class="previous"
                  @click="setImage('previous')">
            <svg-loader :content="{icon_name: 'left-chevron'}" />
            <span>Previous</span>
          </button>
          <button class="next"
                  @click="setImage('next')"
                  ref="lastValidTab">
            <span>Next</span>
            <svg-loader :content="{icon_name: 'right-chevron'}" />
          </button>
        </div>

    </modal-wrapper>

  </tab-lock>

</template>


<script>

import {storyblokImageService} from '@/mixins/storyblokImageService'

export default {

  mixins: [storyblokImageService],

  mounted() {
    this.storyblokImageServiceMixin.filename = this.content.images[this.currentIndex].filename;
  },

  data() {
    return {

      logRef: `<gallery-modal> [${new Date().getTime()}]`,

      storyblokImageServiceMixin: {
        filename: ''
      },

      currentIndex: 0,
    }
  },

  computed: {

    content: function() {
      return this.$store.state.galleryModal.content;
    },

    indexLimit: function() {
      return this.content.images.length - 1;
    }

  },

  methods: {

    close: function() {
      this.$store.commit('closeModal', {modal: 'galleryModal'})
    },

    setImage: function(dir) {
      const isNext = dir === 'next';
      let nextIndex = this.currentIndex;

      if(isNext) {
        (nextIndex + 1) > this.indexLimit ?
          nextIndex = 0 : nextIndex = nextIndex + 1;
      } else {
        (nextIndex - 1) < 0 ?
          nextIndex = this.indexLimit : nextIndex -= 1;
      }

      this.currentIndex = nextIndex;
      this.storyblokImageServiceMixin.filename = this.content.images[nextIndex].filename;

    },
  }

}
</script>

<style lang="scss">

  .lightbox-gallery--controls {
    @include row(center, center);
    text-align: center;

    margin-bottom: $space-6;

    .previous,
    .next {
      @include wrapper(center, center);
      svg {
        left: 0;
      }
    }

    .previous {
      &:hover {
        svg {
          left: -5px;
        }
      }
    }
    .next {
      &:hover {
        svg {
          left: 5px;
        }
      }
    }

    svg {
      position: relative;
      @include size($text-larger);
      @include x-margin($space-2);
      @include transition();
    }

  }

  //Dark Mode
  .dark-mode {
    .lightbox-gallery {
      background: rgba($shade-black, 0.9);
      .caption {
        background: rgba($shade-black, 0.9);
      }
    }
  }

</style>