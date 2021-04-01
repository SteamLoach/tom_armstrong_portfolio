<template>


    <div class="modal-wrapper"
        role="dialog"
        aria-modal="true"
        :title="clickAnywhereToClose ? 'Click anywhere to close': ''"
        @click="clickAnywhereClose">

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
    background: rgba($shade-white, 1);
    @include transition($duration: .01s);

    .dark-mode & {
      background: rgba($shade-black, 1);
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