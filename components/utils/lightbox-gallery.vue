<template>

  <div class="lightbox-gallery">
    <button class="lightbox-close"
            @click="close">
      Close
    </button>
    <button class="lightbox-close"
            @click="setImage('next')">
      Next Image
    </button>
        <button class="lightbox-close"
            @click="setImage('previous')">
      Previous Image
    </button>

    <transition name="lightbox-gallery" mode="out-in">
      <img :src="images[currentIndex].filename"
            :key="$toolkit.kebabCase(images[currentIndex].alt)"/>
    </transition>


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
      let newIndex = isNext ?
        this.currentIndex + 1 : this.currentIndex - 1;
      if(isNext && newIndex > this.indexLimit) {
        newIndex = 0;
      } else if(!isNext && newIndex < 0) {
        newIndex = this.indexLimit
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

    overflow-y: auto;
    z-index: 1001;
    height: 100%;
    @include row(center, center);
    position: fixed;
      top: 0;
      left: 0;
    padding: $space-4;
    background: rgba($shade-black, 0.8);

  }

  .lightbox-gallery-enter-active,
  .lightbox-gallery-leave-active {
    @include transition();
  }

  .lightbox-gallery-enter,
  .lightbox-gallery-leave-to {
    opacity: 0;
  }

</style>