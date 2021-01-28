<template>

  <main>

    <h1 class="title">Tom Armstrong</h1>

    <nuxt-link to="/development-portfolio">
      Development Porfolio
    </nuxt-link>

  </main>



</template>

<script>

import {storyblokBridge} from '@/mixins/storyblokBridge';

export default {

  mixins: [
    storyblokBridge,
  ],

  data() {

    return {

      storyblokBridgeMixin: {
        logRef: 'Homepage'
      }

    }

  }

}

</script>

<style lang="scss">

  .title {
    color: $brand-darker;
  }

  .content-panel {
    height: 250px;
    @include row(center, center);
    background: $accent-lighter;
    border-bottom: 1px solid $shade-dark;
  }

</style>
