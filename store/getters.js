import numbers from '@/utils/numbers'

export default {

  isHandheld: (state) => {
    return state.windowWidth < numbers.laptopBreak;
  }

}