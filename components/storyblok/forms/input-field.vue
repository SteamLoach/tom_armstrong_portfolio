<template>

  <div class="form--field">

    <field-label :content="content"
                 :fieldErrors="fieldErrors" />


    <input :type="content.type"
           :name="$toolkit.snakeCase(content.name)"
           :id="$toolkit.kebabCase(content.name)"
           :placeholder="content.placeholder"
           :value="value"
           @input="sendInput" >


  </div>

</template>


<script>

import fieldLabel from '@/components/storyblok/forms/field-label';

export default {

  props: {
    content: {
      type: Object,
      required: true,
    },
    value: {
      type: [String, Number],
    },
    fieldErrors: {
      type: Array,
    },
  },

  components: {
    fieldLabel,
  },

  methods: {
    sendInput: function(e) {
      this.$emit('input', e.target.value)
    }
  }

}

</script>

<style lang="scss">



</style>