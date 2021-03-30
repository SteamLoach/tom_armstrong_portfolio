<template>

  <component :is="tag"
             ref="tabLock">

    <span class="tab-buffer first"
          :data-tab-buffer="`first-${lockId}`"
          aria-hidden="true"
          tabindex="0">
    </span>


    <slot />


    <span class="tab-buffer last"
          :data-tab-buffer="`last-${lockId}`"
          aria-hidden="true"
          tabindex="0">
    </span>

  </component>

</template>

<script>

import log from '@/utils/log'

const logger = log({
  type: 'component',
  ref: 'tabLock',
})

export default {

  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },

  mounted() {

    //set unique id for lock context
    this.lockId = this.$toolkit.randomInt();

    this.$nextTick(() => {

      logger.group(this.logRef);

      //get data from parent
      const firstValid = this.$parent.$refs['firstValidTab']
      const lastValid = this.$parent.$refs['lastValidTab']

      //warn if firstValid is missing or undefined
      if(!firstValid) {
        return logger.warn('$ref[firstValidTab] is missing or undefined')
      }

      //add refs to component data
      this.firstValidTab = firstValid.$el ?
        firstValid.$el : firstValid
      logger.line('First valid tab:', 'info')
      logger.line(this.firstValidTab, 'return')

      if(lastValid) {
        this.lastValidTab = lastValid.$el ?
          lastValid.$el : lastValid
      } else {
        this.lastValidTab = this.firstValidTab;
      }
      logger.line('Last valid tab:', 'info')
      logger.line(this.lastValidTab, 'return')

      //set initial focus
      this.firstValidTab.focus();

      //add tab event listener
      this.$refs['tabLock'].addEventListener('keyup', this.watchTab);

      logger.groupEnd(this.logRef);

    })

  },

  beforeDestroy() {
    this.$refs['tabLock'].removeEventListener('keyup', this.watchTab)
  },

  data() {
    return {
      logRef: `<tab-lock> [${new Date().getTime()}]`,
      lockId: '',
      firstValidTab: {},
      lastValidTab: {},
    }
  },

  methods: {
    watchTab: function(e) {
      const buffer = e.target.dataset['tabBuffer']
      if(e.key === 'Tab' && buffer) {
        if(buffer === `first-${this.lockId}`) {
          this.lastValidTab.focus();
        }
        if(buffer === `last-${this.lockId}`) {
          this.firstValidTab.focus();
        }
      }
    }
  }


}

</script>

<style lang="scss">

  .tab-buffer {
    position: fixed;
    @include size(45px);
    background: pink;

    &.first {
      top: -1000px
    }

    &.last {
      bottom: 1000px
    }

  }

</style>