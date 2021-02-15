<template>

  <form class="netlify-form"
        data-netlify="true"
        name="Contact Form"
        data-netlify-honeypot="bot-field"
        method="post"
        target="hidden-iframe">

    <p> {{this.formFields.length}} </p>


  </form>

</template>

<script>

import {formBuilder} from '@/mixins/formBuilder';

export default {

  mixins: [formBuilder],

  data() {
    return {
      formBuilderMixin: {
        logRef: '<netlify-form>'
      }
    }
  },

  props: {
    content: {
      type: Object,
      default: () => {},
    }
  },

  computed: {
    schema: function() {
      return JSON.parse(this.content.schema).schema;
    }
  }

}

</script>

<style lang="scss">

</style>