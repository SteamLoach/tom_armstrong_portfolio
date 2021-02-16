<template>

  <button class="jargon-toggle"
          :class="{'is-active': withJargon}"
          @click="setPreference('withJargon')">
           Jargon {{withJargon ? '(On)' : '(Off)'}}
  </button>

</template>


<script>

import {mapMutations, mapState} from 'vuex'
import {setPreferences} from '@/mixins/setPreferences.js'

export default {

  mixins: [setPreferences],

  data() {
    return {
      logRef: `<jargon-toggle> [${new Date().getTime()}]`
    }
  },

  computed: {

    ...mapState(['withJargon'])

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