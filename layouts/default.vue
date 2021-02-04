<template>

  <div v-if="initData"
       class="site-wrapper"
       :class="classObject">

    <top-nav />

    <Nuxt />

    <site-footer />

  </div>

</template>

<script>

import {mapMutations} from 'vuex'
import log from '@/utils/log'

const logger = log({
  type: 'store',
  ref: 'Init Preferences'
})

export default {

  mounted() {

    logger.group('Check Existing')

    if(window.localStorage.preferences) {

      logger.line('preferences found in localStorage', 'done')
      const preferences = JSON.parse(window.localStorage.preferences)
      logger.line(preferences, 'return')

      logger.line('set preferences in state')
      this.setState({
        target: 'darkMode',
        payload: preferences.darkMode
      })
      this.setState({
        target: 'withJargon',
        payload: preferences.withJargon
      })

    } else {
      logger.line('no preferences found in localStorage', 'issue')
      logger.line('setting defaults')
      window.localStorage.setItem('preferences', JSON.stringify({
        darkMode: this.darkMode,
        withJargon: this.withJargon
      }))
    }

    this.initData = true;

    logger.groupEnd('Check Existing')

  },

  data() {
    return {
      initData: false,
    }
  },

  computed: {

    darkMode: function() {
      return this.$store.state.darkMode
    },

    withJargon: function() {
      return this.$store.state.withJargon
    },

    classObject: function() {
      return {
        'dark-mode': this.darkMode
      }
    }
  },

  methods: {
    ...mapMutations(['setState'])
  }


}

</script>

<style lang="scss">

  :root {
    font-family: $text-font;
    font-size: $text-root;
    line-height: $line-height-root;

    h1, h2, h3,
    h4, h5, h6 {
       font-family: $title-font;
       color: $title-color;
     }

     h1, h2, h3 {
       line-height: 1.1;
     }

  }

  .site-wrapper {
    min-height: 100vh;
    @include row(between, none, $direction: column);
    max-width: 100%;

    color: $text-color;
    background: $shade-lightest;

    @include transition();

    h1, h2, h3,
    h4, h5, h6 {
      color: $title-color;
    }

     &.dark-mode {
      color: $shade-lightest;
      background: $shade-darkest;

      h1, h2, h3,
      h4, h5, h6 {
        color: $shade-lighter;
      }

     }

  }

  .page-view {
    width: 100%;
    flex: 1;
  }

</style>
