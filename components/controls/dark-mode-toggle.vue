<template>

  <button class="dark-mode-toggle"
          :class="{'is-active': darkMode}"
          @click="setPreference('darkMode')">
           Dark Mode {{darkMode ? '(On)' : '(Off)'}}
  </button>

</template>


<script>

import {mapMutations, mapState} from 'vuex'
import {setPreferences} from '@/mixins/setPreferences.js'

export default {

  mixins: [setPreferences],

  computed: {

    classObject: function() {
      return {
        'is-active': this.darkMode
      }
    },

    ...mapState(['darkMode'])

  },

  methods: {
    ...mapMutations([
      'toggleState',
    ])
  }

}

</script>

<style lang="scss">

  .dark-mode-toggle {
    &.is-active {
      //color: $shade-lightest;
    }
  }

</style>