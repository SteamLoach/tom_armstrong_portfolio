<template>

  <button class="jargon-toggle"
          :class="classObject"
          @click="setPreference('withJargon')">
           Jargon {{withJargon ? '(On)' : '(Off)'}}
  </button>

</template>


<script>

import {mapMutations} from 'vuex'
import {setPreferences} from '@/mixins/setPreferences.js'

export default {

  mixins: [setPreferences],

  computed: {

    withJargon: function() {
      return this.$store.state.withJargon
    },

    classObject: function() {
      return {
        'is-active': this.withJargon
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

  .jargon-toggle {
    &.is-active {
      //color: $shade-lightest;
    }
  }

</style>