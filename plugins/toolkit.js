import toolkit from '@/utils/toolkit.js'

export default ({app}, inject) => {
  inject('toolkit', toolkit);
}