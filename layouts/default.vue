<template>

  <div id="site-wrapper"
       class="site-wrapper"
       :class="{'dark-mode': this.darkMode}"
       ref="siteWrapper">

    <!--modals -->

    <fade-transition>
      <first-load-modal v-if="!initPreferencesMixin.isComplete"
                        aria-hidden="false" />
    </fade-transition>

    <slide-x-right-transition>
      <handheld-nav v-if="showHandheldNav"
                    aria-hidden="false"
                    :routes="routes" />
    </slide-x-right-transition>

    <slide-x-right-transition>
      <lightbox-modal v-if="lightboxModal.isActive"
                      aria-hidden="false" />
    </slide-x-right-transition>

    <slide-x-right-transition>
      <gallery-modal v-if="galleryModal.isActive"
                      aria-hidden="false" />
    </slide-x-right-transition>


    <!-- standard view -->
    <top-nav :aria-hidden="hasActiveModal"
             :routes="routes"/>
    <Nuxt :aria-hidden="hasActiveModal" />
    <site-footer :aria-hidden="hasActiveModal" />

  </div>

</template>

<script>


import {mapGetters, mapState} from 'vuex'

import {initPreferences} from '@/mixins/initPreferences'
import {initWindowWidth} from '@/mixins/initWindowWidth'

import handheldNav from '@/components/local/navigation/handheld-nav'
import topNav from '@/components/local/navigation/top-nav'
import siteFooter from '@/components/local/navigation/site-footer'
import firstLoadModal from '@/components/local/modals/first-load-modal'
import lightboxModal from '@/components/local/modals/lightbox-modal'
import galleryModal from '@/components/local/modals/gallery-modal'


export default {

  mixins: [
    initPreferences,
    initWindowWidth,
  ],

  components: {
    handheldNav,
    topNav,
    siteFooter,
    firstLoadModal,
    lightboxModal,
    galleryModal,
  },

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
        preferences: ['darkMode']
      },

    }
  },

  computed: {

    ...mapState([
      'showHandheldNav',
      'lightboxModal',
      'galleryModal',
      'darkMode',
    ]),

    ...mapGetters([
      'hasActiveModal',
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
  .layout--content-panel {

    margin: 0 auto;

    &.x-pad-medium {
      @include pad-scale(
        x,
        $default: $space-4,
        $on-tablet: $space-5,
        $on-desktop: $space-8,
      );
    }

    &.y-pad-medium {
      @include pad-scale(
        y,
        $default: $space-6,
        $on-tablet: $space-8,
      );
    }

    &.y-pad-heavy {
      @include pad-scale(
        y,
        $default: $space-8,
        $on-tablet: $space-10,
        $on-desktop: $space-11,
      );
    }

    &.margin-bottom-medium {
      @include margin-scale(
        bottom,
        $default: $space-6,
        $on-tablet: $space-8,
      );
    }

    &.margin-bottom-heavy {
      @include margin-scale(
        bottom,
        $default: $space-8,
        $on-tablet: $space-10,
        $on-desktop: $space-11,
      );
    }

  }

  //Max Widths
  .max-width-extra-narrow {
    max-width: $extra-narrow-width;
  }

  .max-width-narrow {
    max-width: $narrow-width;
  }

  .max-width-medium {
    max-width: $medium-width;
  }

  .max-width-wide {
    max-width: $wide-width;
  }

  .max-width-wider {
    max-width: $wide-width;
  }

  .max-width-extra-wide {
    max-width: $extra-wide-width;
  }

  .max-width-super-wide {
    max-width: $super-wide-width;
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
