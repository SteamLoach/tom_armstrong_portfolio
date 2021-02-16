<template>

  <form class="netlify-form"
        data-netlify="true"
        name="Contact Form"
        data-netlify-honeypot="bot-field"
        method="post"
        target="hidden-iframe">

    <p> {{this.fields.length}} </p>


  </form>

</template>

<script>

import {formBuilder} from '@/mixins/formBuilder';

export default {

  mixins: [formBuilder],

  props: {
    content: {
      type: Object,
      default: () => {},
    }
  },

  data() {
    return {

      logRef: `<netflify-form> [${new Date().getTime()}]`,

      formBuilderMixin: {
        schema: this.content.schema,
        format: 'JSON',
      },

    }
  },

}

</script>

<style lang="scss">

</style>