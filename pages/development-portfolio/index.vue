<template>

  <main>

    <h1 class="title">Development Portfolio</h1>

    <nuxt-link to="/">
      Home
    </nuxt-link>

    <nuxt-link to="/development-portfolio/inventory-manager">
      Inventory Manager
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
        logRef: 'Development Portfolio Page',
        isIndex: true,
      }

    }

  }

}

</script>