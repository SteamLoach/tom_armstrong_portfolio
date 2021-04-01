export default {

  //Toggle Boolean
  toggleState (state, target) {
    state[target] = !state[target]
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