import log from '@/utils/log'

import * as Validators from 'vuelidate/lib/validators'

const logger = log({
  type: 'script',
  ref: 'formBuilder (Mixin)',
})


/*
Mixin requires a [formBuilderMixin] config object:
    schema: array of field objects in the following format -
      {
        label,
        ref: ,
        field: (optional) {
          tag: (optional - defaults to 'input'),
          type: (optional - defaults to 'text'),
          options: (required if [tag] is 'select' or 'radio')
        }
        validations: (optional),
        defaultValue: (optional),
        break: (optional) - returns a break if true
      }
*/

import {validationMixin} from 'vuelidate'

export const formBuilder = {

  mixins: [validationMixin],

  created() {
    this.fields.forEach(field => {
      this.$set(this.form, field.ref, null)
    })
  },

  data() {
    return {
      form: {},
    }
  },

  validations () {
    return {form: this.setValidations()}
  },

  computed: {

    schema: function() {
      if(this.formBuilderMixin.format === 'JSON') {
        return JSON.parse(this.formBuilderMixin.schema).schema;
      } else {
        return this.formBuilderMixin.schema
      }
    },

    fields: function() {
      return this.setFields();
    }
  },

  methods: {

    setFields: function() {

      logger.group(this.logRef);
      let fieldArr = [];

      if(this.formBuilderMixin) {

        this.schema.forEach((item, index) => {

          //Skip empty / conditional items
          if(this.$toolkit.isEmpty(item)) {
            return;
          }

          //Early return if field break
          if(item.break) {
            fieldArr.push({
              break: true,
              ref: item.ref ? item.ref : 'break',
              name: item.ref ? item.ref : 'break',
              key: item.ref ?
                `${item.ref}-break-${index}` : `break=${index}`,

            })
          }

          //Warn and early return if item has no label
          if(!item.label) {
            logger.warn(`field [${index + 1}] has no [label]  and will be skipped`)
            return;
          }

          //Set defaults and define additional fields
          let fieldObj = {
            label: item.label,
            desc: item.desc,
            ref: item.ref ?
              item.ref : this.$toolkit.snakeCase(item.label),
            field: {},
            validations: item.validations ? item.validations : {}
          }
          fieldObj.key = `${this.$toolkit.kebabCase(fieldObj.ref)}-${index}`
          fieldObj.id = `${this.$toolkit.kebabCase(fieldObj.ref)}-${index}`
          fieldObj.name = fieldObj.ref;

          //Configure field if provided - defaults to <input type="text"/>
          if(item.hasOwnProperty('field')) {

            item.field.type ? fieldObj.field.type = item.field.type
            : fieldObj.field.type = 'text';

            fieldObj.field.placeholder = item.field.placeholder ?
            item.field.placeholder : '';

            if(item.field.tag === 'select') {
              if(!item.field.options) {
                logger.warn(`<select id="${fieldObj.id}"> has no [options] array and won't render as expected`);
              } else {
                fieldObj.field.options = item.field.options;
                //fieldObj.field.optionsRef = item.field.optionsRef;
                //fieldObj.field.optionsLabel = item.field.optionsLabel;
                //fieldObj.field.nullOption = item.field.nullOption;
                //fieldObj.field.noNullOption = item.field.noNullOption;
              }
            }

            if(item.field.type === 'radio') {
              if(!item.field.options) {
                logger.warn(`radio group [${fieldObj.name}] has no [options] array and won't render as expected`)
              } else {
                fieldObj.field.options = []
                item.field.options.forEach((opt, index) => {
                  //Skip if option is empty / conditional
                  if (toolkit.isEmpty(opt)) {
                    return;
                  }
                  if(opt.label && opt.val) {
                    fieldObj.field.options.push({
                      ...opt,
                      id: `${fieldObj.name}-option-${opt.val}`,
                      key: `${fieldObj.name}-option-${index}`,
                    })
                  } else {
                    logger.warn(`radio group [${fieldObj.label}] - option ${index + 1} has a missing [label] and/or [val] prop`)
                  }
                })
              }
            }

            fieldObj.field.defaultChecked = item.field.defaultChecked;

          } else {
            fieldObj.field = {
              tag: 'input',
              type: 'text',
            }
          }

          //Pass default value or define empty string
          if(item.hasOwnProperty('defaultValue')) {
            fieldObj.defaultValue = item.defaultValue
          } else {
            fieldObj.defaultValue = '';
          }

          fieldArr.push(fieldObj);

        })

      } else {
        logger.warn('define a [formBuilderMixin] config object')
      }

      logger.line(fieldArr, 'return');
      logger.groupEnd(this.logRef)
      return fieldArr;

    },

    setValidations: function() {
      const validationObj = {};
      this.fields.forEach(field => {
        if(field.validations) {
          let fieldRules = {};
          Object.keys(field.validations).forEach(rule => {
            const params = field.validations[rule].params;
            if(params) {
              fieldRules[rule] = Validators[rule](params)
            } else {
              fieldRules[rule] = Validators[rule]
            }
          })
          validationObj[field.ref] = fieldRules;
        } else {
          validationObj[field.ref] = {};
        }
      })
      return validationObj
    }

  }

}


