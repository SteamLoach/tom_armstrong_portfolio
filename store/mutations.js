export default {

  //Toggle Boolean
  toggleState (state, target) {
    state[target] = !state[target]
  },

  //Set State Prop
  setState (state, action) {
    state[action.target] = action.payload
  }

}