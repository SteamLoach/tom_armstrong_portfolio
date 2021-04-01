import numbers from '@/utils/numbers'

export default {

  isHandheld: (state) => {
    return state.windowWidth < numbers.laptopBreak;
  },

  isMobile: (state) => {
    return state.windowWidth < numbers.tabletBreak;
  },

  hasActiveModal: (state) => {
    return (
      state.showHandheldNav
      || state.lightboxModal.isActive
      || state.galleryModal.isActive
    )
  }

}