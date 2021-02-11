<template>

  <div v-if="initPreferencesMixin.isComplete"
       class="site-wrapper"
       :class="{'dark-mode': this.darkMode}">

    <top-nav :routes="routes"/>
    <zoom-y-transition>
      <handheld-nav v-if="showHandheldNav"
                    :routes="routes" />
    </zoom-y-transition>

    <Nuxt />

    <site-footer />

  </div>

</template>

<script>


import {mapMutations, mapState} from 'vuex'

import {initPreferences} from '@/mixins/initPreferences'
import {initWindowWidth} from '@/mixins/initWindowWidth'

export default {

  mixins: [
    initPreferences,
    initWindowWidth,
  ],


  data() {
    return {

      routes: [
        {
          name: 'Home',
          to: '/'
        },
        {
          name: 'Development',
          to: '/development-portfolio'
        },
        {
          name: 'Design',
          to: '/design-portfolio'
        },
        {
          name: 'Contact',
          to: '/contact'
        }
      ],

      initPreferencesMixin: {
        isComplete: false,
        preferences: ['darkMode', 'withJargon']
      }

    }
  },

  computed: {

    ...mapState([
      'showHandheldNav',
      'darkMode',
      'withJargon'
    ])

  },

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
       font-weight: 800;
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


    svg {
      fill: $title-color;
    }

     &.dark-mode {
      color: $dark-mode-text-color;
      background: $dark-mode-page-background;

      h1, h2, h3,
      h4, h5, h6 {
        color: $dark-mode-title-color;
      }

      svg {
        fill: $dark-mode-text-color;
      }

     }

  }

  .page-view {
    width: 100%;
    flex: 1;
  }

  //Transition
  .page-enter-active,
  .page-leave-active {
    transition: opacity .1s;
  }

  .page-enter,
  .page-leave-active {
    opacity: 0;
  }

</style>
