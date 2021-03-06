import log from '@/utils/log'

/*
Mixin requires an [classExtensionsMixin] data object:
  {
    prop: prop in content containing class extension string
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
  ref: 'Class Extensions (Mixin)',
})



export const classExtensions = {

  computed: {

    classExtensions: function() {

      if(this.classExtensionsMixin) {

        if(this.classExt) {

          const classProp = this.classExtensionsMixin.prop ?
            this.classExtensionsMixin.prop : 'class_extensions'

          const classObject = {};
          this.classExt.forEach(ext =>
            classObject[this.$toolkit.kebabCase(ext)] = true
          );
          if(this.content && this.content[classProp]) {
            const classExtensions = this.content[classProp].split(',');
            classExtensions.forEach(ext =>
              classObject[this.$toolkit.kebabCase(ext)] = true
            );
          }
          return classObject;

        } else {
          logger.group(this.logRef);
          logger.warn('define a [classExt] Array prop with an empty array as default')
          logger.groupEnd(this.logRef);
        }

      } else {
        logger.group(this.logRef);
        logger.warn('define a [classExtensionsMixin] config object')
        logger.groupEnd(this.logRef);
      }



    },

  }

}