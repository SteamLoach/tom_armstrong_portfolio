<template>

  <button class="dark-mode-toggle"
          :class="{'is-active': darkMode}"
          @click="setPreference('darkMode')"
          :title="`Switch to ${darkMode ? 'light' : 'dark'} theme`"
          :aria-label="`Switch to ${darkMode ? 'light' : 'dark'} theme`">
    <slide-y-down-transition mode="out-in">
      <svg-loader :content="{icon_name: iconName}"
                  :key="iconName" />
    </slide-y-down-transition>
  </button>

</template>


<script>

import {mapMutations, mapState} from 'vuex'
import {setPreferences} from '@/mixins/setPreferences.js'

export default {

  mixins: [setPreferences],

  data() {
    return {
      logRef: `<dark-mode-toggle> [${new Date().getTime()}]`
    }
  },

  computed: {

    iconName: function() {
      return this.darkMode ? 'moon-icon' : 'sun-icon';
    },

    ...mapState(['darkMode'])

  },

  methods: {
    ...mapMutations(['toggleState'])
  }

}

</script>

<style lang="scss">

  .dark-mode-toggle {
    //@include wrapper(center, center);
    padding: $space-1;
    svg {
      @include size($text-largest);
    }

    &.in-footer {
      @include size($text-large);
    }
  }

</style>