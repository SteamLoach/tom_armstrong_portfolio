import log from '@/utils/log'

import * as Validators from 'vuelidate/lib/validators'
const isEmpty = (val) => val === '';
const isTrue = (val) => val === true;

const logger = log({
  type: 'script',
  ref: 'formHandler (Mixin)',
  mute: !process.client,
})


import {validationMixin} from 'vuelidate'

export const formHandler = {

  mixins: [validationMixin],

  mounted() {

    this.resetForm();

  },

  data() {
    return {
      form: {},
      isSubmitting: false,
      hasSubmitted: false,
    }
  },

  validations () {
    return {form: this.setValidations()}
  },

  computed: {

    canSubmit: function() {
      return (
        !this.$v.form.$invalid
        && !this.isSubmitting
        && !this.hasSubmitted
        );
    },


    fieldErrors: function() {
      const errorObj = {};
      this.content.fields.forEach(field => {
        const fieldRef = this.$toolkit.snakeCase(field.name)
        errorObj[fieldRef] = [];
        field.validations.forEach(item => {
          if(
              !this.$v.form[fieldRef][item.rule] &&
              this.$v.form[fieldRef].$dirty
            ) {
            errorObj[fieldRef].push(
              item.message ? item.message : 'Error in field'
            );
          }
        })
      })
      return errorObj;
    }

  },

  methods: {

    setValidations: function() {
      const validationObj = {};
      if(this.content.require_consent) {
        validationObj.user_consent = {
          isTrue,
        }
      }
      if(this.formHandlerMixin.netlify) {
        validationObj.honeypot = {
          isEmpty,
        };
      }
      this.content.fields.forEach(field => {
        if(!this.$toolkit.isEmpty(field.validations)) {
          let fieldRules = {};
          field.validations.forEach(item => {
            if(item.params) {
              fieldRules[item.rule] = Validators[item.rule](item.params)
            } else {
              fieldRules[item.rule] = Validators[item.rule]
            }
          })
          validationObj[this.$toolkit.snakeCase(field.name)] = fieldRules;
        } else {
          validationObj[this.$toolkit.snakeCase(field.name)] = {};
        }
      })
      return validationObj
    },

    postForm: function() {
      this.isSubmitting = true;
      setTimeout(() => {
        this.isSubmitting = false;
        this.hasSubmitted = true;
        this.resetForm();
      }, 2500);
      setTimeout(() => {
        this.hasSubmitted = false;
      }, 10000)
    },

    resetForm: function() {
      this.content.fields.forEach(field => {
        this.$set(
          this.form,
          this.$toolkit.snakeCase(field.name),
          field.default_value ? field.default_value : ''
        );
      })
      if(this.content.show_privacy_statement) {
        this.$set(this.form, 'user_consent', false);
      }
      if(this.formHandlerMixin.netlify) {
        this.$set(this.form, 'honeypot', '');
      }
      this.$v.$reset();
    },

    fieldHasErrors: function(field) {
      if(
        !this.$toolkit.isEmpty(this.fieldErrors[field.name])
        && this.$v.form[field.name].$dirty
      ) {
        return true;
      } else {
        return false;
      }
    },

  }

}


