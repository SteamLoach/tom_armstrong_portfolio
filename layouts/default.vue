<template>

  <div v-if="initPreferencesMixin.isComplete"
       id="site-wrapper"
       class="site-wrapper"
       :class="{'dark-mode': this.darkMode}">

    <top-nav :routes="routes"/>
    <slide-x-right-transition>
      <handheld-nav v-if="showHandheldNav"
                    :routes="routes" />
    </slide-x-right-transition>

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

      logRef: `<default-layout> [${new Date().getTime()}]`,

      routes: [
        {
          name: 'Home',
          to: '/'
        },
        {
          name: 'Development',
          to: '/development-portfolio',
          isFolder: true,
        },
        {
          name: 'Design',
          to: '/design-portfolio',
          isFolder: true,
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
       font-weight: 800;
       color: $title-color;
     }

     h1, h2, h3 {
       font-family: $title-font;
       line-height: 1.1;
     }

  }

  .site-wrapper {
    min-height: 100vh;
    @include row(between, none, $direction: column);
    max-width: 100%;

    color: $text-color;
    background: $page-background;

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

  //Content Panels
  .content-panel {

    &.x-pad-medium {
      @include pad-scale(
        x,
        $default: $space-4,
        $on-lrg-mobile: $space-5,
        $on-tablet: $space-6,
        $on-laptop: $space-8,
      );
    }

    &.y-pad-medium {
      @include pad-scale(
        y,
        $default: $space-6,
        $on-tablet: $space-8,
      );
    }

  }

  //Max Widths
  .extra-narrow {
    max-width: $extra-narrow-width;
  }

  .narrow {
    max-width: $narrow-width;
  }

  .medium {
    max-width: $medium-width;
  }

  .wide {
    max-width: $wide-width;
  }

  .wider {
    max-width: $wide-width;
  }

  .extra-wide {
    max-width: $extra-wide-width;
  }

  .super-wide {
    max-width: $extra-wide-width;
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
