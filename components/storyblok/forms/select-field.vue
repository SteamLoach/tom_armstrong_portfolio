<template>

  <div class="form--field">

    <field-label :content="content"
                 :fieldErrors="fieldErrors" />

    <select :name="$toolkit.snakeCase(content.name)"
            :id="$toolkit.kebabCase(content.name)"
            :value="value"
            @input="sendInput">
      <option v-for="(option, index) in options"
              :key="`${content.name}-option-${index}`">
        {{option}}
      </option>

    </select>




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

  computed: {
    options: function() {
      return this.content.options.split(',');
    }
  },

  methods: {
    sendInput: function(e) {
      this.$emit('input', e.target.value)
    }
  }

}

</script>