<template>

  <div class="first-load-modal">
    <circle-spinner class="large"/>
  </div>

</template>

<script>

import circleSpinner from '@/components/local/utils/circle-spinner'

export default {

  components: {
    circleSpinner
  }

}

</script>

<style lang="scss">

  .first-load-modal {
    @include wrapper(center, center);
    z-index: 1001;
    height: 100%;
    width: 100%;
    position: fixed;
      top: 0;
      left: 0;
    background: rgba($shade-darkest, 1);
    @include transition($duration: .01s);
  }

</style>