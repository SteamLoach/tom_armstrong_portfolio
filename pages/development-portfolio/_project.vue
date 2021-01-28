<template>

  <main>

    <h1 class="title">Development Project</h1>

    <nuxt-link to="/">
      Home
    </nuxt-link>

    <nuxt-link to="/development-portfolio">
      Development Portfolio
    </nuxt-link>

    <section>

      <rich-text :raw="story.content.solution" />

    </section>

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
        logRef: this.$route.path,
      }

    }

  }

}

</script>