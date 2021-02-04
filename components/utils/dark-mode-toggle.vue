<template>

  <button class="dark-mode-toggle"
          :class="classObject"
          @click="setPreference('darkMode')">
           Dark Mode {{darkMode ? '(On)' : '(Off)'}}
  </button>

</template>


<script>

import {mapMutations} from 'vuex'
import {setPreferences} from '@/mixins/setPreferences.js'

export default {

  mixins: [setPreferences],

  computed: {

    darkMode: function() {
      return this.$store.state.darkMode
    },

    classObject: function() {
      return {
        'is-active': this.darkMode
      }
    }

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