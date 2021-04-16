<template>

    <label :for="$toolkit.snakeCase(content.name)">
      <strong>
        {{content.label}}{{isRequired ? '*' : ''}}
      </strong>
      <fade-transition>
        <span v-if="!$toolkit.isEmpty(fieldErrors)"
              class="form--field--error">
          {{fieldErrors[0]}}
        </span>
      </fade-transition>
    </label>

</template>

<script>

export default {

  props: {
    content: {
      type: Object,
      required: true,
    },
    fieldErrors: {
      type: Array,
    },
  },

  computed: {
    isRequired: function() {
      return this.content.validations.find(
        v => v.rule === 'required'
      )
    }
  }

}

</script>