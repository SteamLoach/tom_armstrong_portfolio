import log from '@/utils/log'

const logger = log({
  type: 'store',
  ref: 'Mutation',
})

export default {

  //Toggle Boolean
  toggleState (state, target) {
    logger.group('toggleState');
    state[target] = !state[target]
    logger.line(`toggle ${target} to ${state[target]}`)
    logger.groupEnd('toggleState');
  },

  //Set State Prop
  setState (state, action) {
    state[action.target] = action.payload
  },

  //Lightbox Modal
  openModal (state, action) {
    state[action.modal].isActive = true;
    state[action.modal].content = action.payload;
  },
  closeModal (state, action) {
    state[action.modal].isActive = false;
    state[action.modal].content = {};
  }

}