<template>

  <tab-lock class="lightbox-gallery">

    <button class="lightbox-close"
            ref="firstValidTab"
            @click="close">
      <svg-loader icon="close-icon" />
    </button>

    <slide-y-up-transition mode="out-in">
      <div class="lightbox-gallery-inner"
           :key="$toolkit.kebabCase(images[currentIndex].alt)">
        <div class="image-wrapper">
          <p class="caption"> {{images[currentIndex].title}} </p>
          <img :src="images[currentIndex].filename" />
        </div>
      </div>
    </slide-y-up-transition>

    <div class="lightbox-gallery-controls">
      <button class="previous"
              @click="setImage('previous')">
        <svg-loader icon="left-chevron" />
        <span>Previous</span>
      </button>
      <button class="next"
              @click="setImage('next')">
        <span>Next</span>
        <svg-loader icon="right-chevron" />
      </button>
    </div>

  </tab-lock>

</template>


<script>

export default {

  props: {
    images: {
      type: Array,
      default: () => [],
    },
    currentIndex: {
      type: Number,
      default: 0,
    }
  },

  computed: {
    indexLimit: function() {
      return this.images.length - 1;
    }
  },

  methods: {
    close: function() {
      this.$emit('closeLightboxGallery')
    },
    setImage: function(dir) {
      const isNext = dir === 'next';
      let newIndex = this.currentIndex;

      if(isNext) {
        newIndex = (this.currentIndex + 1) > this.indexLimit ?
          0 : (this.currentIndex + 1);
      } else {
        newIndex = (this.currentIndex - 1) < 0 ?
          this.indexLimit : this.currentIndex - 1;
      }

      this.$emit(
        'setImage',
        newIndex,
      )
    },
  }

}
</script>

<style lang="scss">

  .lightbox-gallery {
    z-index: 1001;
    height: 100%;
    max-height: 100%;
    width: 100%;
    position: fixed;
      top: 0;
      left: 0;
    background: rgba($shade-white, 0.9);
  }

  .lightbox-gallery-inner {
    height: 100%;
    @include pad-scale(
      x,
      $default: $space-2,
      $on-tablet: $space-6,
      $on-laptop: $space-8,
      //$on-desktop: $space-10,
    );
    @include pad-scale(
      y,
      $default: $space-2,
      $on-tablet: $space-10,
      $on-laptop: $space-10,
      $on-desktop: $space-10,
    );

    .image-wrapper {
      height: 100%;
      @include container(
        center,
        center,
        $no-wrap: true,
        $direction: column
      );
    }

    .caption {
      position: absolute;
        top: 0;
      max-width: $narrow-width;
      padding: $space-3 $space-6;
      text-align: center;
      background: rgba($shade-white, 0.9);
      border-bottom-left-radius: $space-2;
      border-bottom-right-radius: $space-2;
    }

    img {
      border-radius: $space-2;
      @include shadow($elevation-heavy);
    }

  }

  .lightbox-close {
    z-index: 1001;
    position: absolute;
      top: 0;
      right: 0;
    padding: $space-4;
    @include transition();
    &:hover {
      transform: rotate(90deg);
    }

    svg {
      @include size(45px);
    }

  }

  .lightbox-gallery-controls {
    @include row(center, center);
    position: absolute;
      bottom: 0;
    @include margin-scale(
      bottom,
      $default: $space-6,
      $on-desktop: $space-8,
    );
    text-align: center;

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