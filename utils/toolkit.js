import log from '../utils/log'
//import fastSort from 'fast-sort'
//import selectn from 'selectn'

const logger = log({
  type: 'script',
  ref: 'toolkit',
})

export default {

  //Dates

  ISODate: (val = false) => {
    if(val) {
      return new Date(val).toISOString().split('T')[0];
    } else {
      return ''
    }
  },

  shortDate: (val = false) => {
    let date = val ? new Date(val) : new Date();
    return `${date.getDate()}-${(date.getMonth() + 1)}-${date.getFullYear()}`
  },


  //Integers

  isEven: (num) => {
    return num%2 == 0 ? true : false;
  },

  randomInt: (min = 0, max = 10000) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  },


  //Sorting
  /*
  sort: ({
    arr,
    dir,
    ref,
  }) => {
   return fastSort(arr)[dir ? dir : 'asc'](i => selectn(ref, i));
  },
  */


  //Objects, Arrays, Values

  isEmpty: (val) => {
    return (
      val === null
      || val === undefined
      || val === ''
      || val.hasOwnProperty('length') && val.length === 0
      || val.constructor === Object && Object.keys(val).length === 0
    )
  },


  //Type Check
  isObject: (val) => {
    return typeof val === 'object' && val !== null;
  },

  isArray: (val) => {
    return Array.isArray(val);
  },

  isString: (val) => {
    return typeof val === 'string';
  },

  /*
  removeItem: ({
    array = [],
    ref,
    val,
  }) => {
    let refArray = array.map(i => selectn(ref, i))
    let index = refArray.indexOf(val);
    if(index < 0) {
      return logger.line(`{${ref}: ${val}} not found`)
    }
    array.splice(index, 1);
    return array
  },
  */

  //Case Converters

  camelCase: (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
      if (+match === 0) return "";
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  },
  kebabCase: (str) => {
      return str && str
          .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
          .map(x => x.toLowerCase())
          .join('-');
  },
  snakeCase: (str) => {
      return str && str
          .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
          .map(x => x.toLowerCase())
          .join('_');
  },
  titleCase: (str) => {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  },
  capitalizeFirstLetter: (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },


  //Scroll Page

  scrollPage: ({
    target,
    axis = 'top',
    offset = false,
    smooth = false,
  } = {}) => {

    const targetElement = document.querySelector(target);

    if(!targetElement) {
      return logger.warn(`scrollPage(${target}) failed because the [target] element does not exist`)
    }

    let targetOffset = 0
    if (offset) {
      if(offset.element) {
        offsetElement = document.querySelector(offset.element)
        if(!offsetElement) {
          return logger.warn(`scrollPage(${target}) failed because the specified [offset] element does not exist`)
        }
        targetOffset = document.querySelector(offset).clientHeight;
      } else if(offset.value) {
        targetOffset = offset.value
      }
    }

    let scrollOptions = {
      left: 0,
      top: (targetElement.getBoundingClientRect()
      [axis] + pageYOffset) - targetOffset,
    }

    if(smooth) {scrollOptions.behavior = 'smooth'}

    window.scrollTo(scrollOptions);

  },

  //Set background image (Vue only)
  setBackgroundImage: (url) => {
    return {backgroundImage: `url('${url}')`}
  },


}