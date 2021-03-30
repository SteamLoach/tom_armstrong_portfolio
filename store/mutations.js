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
  openLightboxModal (state, action) {
    state.lightboxModal.isActive = true;
    state.lightboxModal.content = action.payload;
    state.lastTabPosition = action.lastTabPosition
  },
  closeLightboxModal (state) {
    state.lightboxModal.isActive = false;
    state.lightboxModal.content = {};
  }

}