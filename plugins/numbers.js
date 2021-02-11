import numbers from '@/utils/numbers.js'

export default ({app}, inject) => {
  inject('numbers', numbers);
}