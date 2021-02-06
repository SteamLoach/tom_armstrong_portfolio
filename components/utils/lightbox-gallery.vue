<template>

  <div class="lightbox-gallery">

    <button class="lightbox-close"
            @click="close">
      Close
    </button>

    <slide-y-up-transition mode="out-in">
      <div class="lightbox-gallery-inner"
          :key="$toolkit.kebabCase(images[currentIndex].alt)">
        <p class="caption"> {{images[currentIndex].title}} </p>
        <img :src="images[currentIndex].filename" />
      </div>
    </slide-y-up-transition>

    <div class="lightbox-gallery-controls">
      <button @click="setImage('previous')">
        Previous Image
      </button>
      <button @click="setImage('next')">
        Next Image
      </button>
    </div>

  </div>

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
    position: relative;
    z-index: 1001;
    height: 100%;
    max-height: 100%;
    width: 100%;
    position: fixed;
      top: 0;
      left: 0;
    background: rgba($shade-light, 0.8);
  }

  .lightbox-gallery-inner {
    height: 100%;
    @include container(
      center,
      center,
      $no-wrap: true,
      $direction: column
    );
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
      $on-tablet: $space-6,
      $on-laptop: $space-8,
      $on-desktop: $space-10,
    );

    .caption {
      max-width: $narrow-width;
      margin-bottom: $space-2;
      text-align: center;
    }

    img {
      border-radius: $space-2;
    }

  }

  .lightbox-close {
    z-index: 1001;
    position: absolute;
      top: 0;
      right: 0;
    padding: $space-4;
  }

  .lightbox-gallery-controls {
    position: absolute;
      bottom: 0;
    width: 100%;
    @include pad-scale(
      bottom,
      $default: $space-6,
    );
    text-align: center;
  }

  //Dark Mode
  .dark-mode {
    .lightbox-gallery {
      background: rgba($shade-black, 0.8);
    }
  }

</style>