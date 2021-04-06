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

  beforeDestroy() {
    logger.group(this.logRef);
    logger.line('remove event listener');
    window.removeEventListener('resize', this.setWindowWidth);
    logger.groupEnd(this.logRef);
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