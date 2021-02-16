import log from '@/utils/log'

const logger = log({
  type: 'app',
  ref: 'Init Window Width'
})

import {mapMutations} from 'vuex';

export const initWindowWidth = {

  mounted() {

    logger.group(this.logRef);

    logger.line('set event listener')
    window.addEventListener('resize', this.setWindowWidth);
    this.setWindowWidth();

    logger.groupEnd(this.logRef);

  },

  destroyed() {
    window.removeEventListener('resize', this.setWindowWidth);
  },

  methods: {

    setWindowWidth: function() {
      this.setState({
        target: 'windowWidth',
        payload: window.innerWidth
      })
    },

    ...mapMutations(['setState'])

  }


}