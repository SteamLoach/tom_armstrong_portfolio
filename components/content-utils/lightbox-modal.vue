<template>

  <slide-x-right-transition>
    <modal-wrapper  v-if="isActive"
                    :clickAnywhereToClose="true"
                    @closeModal="close">

      <figure class="lightbox-modal--image"
              :style="$toolkit.setBackgroundImage(asset.media.filename)">

      </figure>

      <figcaption class="lightbox-modal--caption">
        {{showCaption ? asset.media.title : ''}}
      </figcaption>

    </modal-wrapper>
  </slide-x-right-transition>

</template>

<script>

export default {

  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    asset: {
      type: Object,
      default: () => {},
    },
    showCaption: {
      type: Boolean,
      default: false,
    }
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
    width: 100%;
    flex: 1;
    @include background-image(
      $position: center,
      $size: contain,
    );
    &:hover {
      cursor: zoom-out;
    }
  }

  .lightbox-modal--caption {
    @include pad-scale(
      y,
      $default: $space-4,
      $on-laptop: $space-6,
    );
    margin-bottom: $space-6;
  }

</style>