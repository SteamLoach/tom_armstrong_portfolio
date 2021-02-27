<template>

  <div class="modal-wrapper"
       @click="clickAnywhereClose">

    <div class="modal-wrapper--control-row">
      <button class="modal-wrapper--close"
              @click="clickButtonClose">
        <svg-loader icon="close-icon" />
      </button>
    </div>

    <slot />

  </div>

</template>

<script>

export default {

  props: {
    clickAnywhereToClose: {
      type: Boolean,
      default: false,
    }
  },

  methods: {
    clickAnywhereClose: function() {
      if(this.clickAnywhereToClose) {
        this.$emit('closeModal');
      }
    },
    clickButtonClose: function() {
      this.$emit('closeModal');
    }
  }

}

</script>

<style lang="scss">

  .modal-wrapper {
    @include row(between, center, $direction: column, $no-wrap: true);
    z-index: 1001;
    height: 100%;
    width: 100%;
    position: fixed;
      top: 0;
      left: 0;
    background: rgba($shade-white, 0.9);

    .dark-mode & {
      background: rgba($shade-black, 0.9);
    }

  }

  .modal-wrapper--control-row {
    @include row(end, center);
  }

  .modal-wrapper--close {
    padding: $space-4;
    svg {
      @include size(45px);
    }
  }

</style>