import numbers from '@/utils/numbers'

export default {

  isHandheld: (state) => {
    return state.windowWidth < numbers.laptopBreak;
  },

  hasActiveModal: (state) => {
    return (
      state.showHandheldNav
      || state.lightboxModal.isActive
    )
  }

}