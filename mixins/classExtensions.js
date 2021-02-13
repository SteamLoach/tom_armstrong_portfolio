import log from '@/utils/log'

/*
Mixin takes an optional [classExtensionsMixin] data object:
  {
    logRef: for logging output
  }
*/

/*
Mixin requires a [classExt] prop on parent component:
  classExt: {
    type: Array,
    default: () => [],
  }
*/

const logger = log({
  type: 'component',
  ref: 'Class Extensions'
})



export const classExtensions = {

  computed: {

    classExtensions: function() {

      if(this.classExtensionsMixin) {

        if(this.classExt) {

          const classObject = {};
          this.classExt.forEach(ext =>
            classObject[this.$toolkit.kebabCase(ext)] = true
          );
          if(this.content && this.content.class_extensions) {
            const classExtensions = this.content.class_extensions.split(',');
            classExtensions.forEach(ext =>
              classObject[this.$toolkit.kebabCase(ext)] = true
            );
          }
          return classObject;

        } else {
          logger.group(this.classExtensionsMixin.logRef)
          logger.warn('define a [classExt] Array prop with an empty array as default')
          logger.groupEnd(this.classExtensionsMixin.logRef);
        }

      } else {
        logger.warn('define a [classExtensionsMixin] config object')
      }


    },



  }

}