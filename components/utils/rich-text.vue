<template>

  <section v-html="richText" />

</template>

<script>

export default {

  props: {
    raw: Object,
  },

  computed: {
    richText: function() {
      return this.$storyapi.richTextResolver.render(this.raw);
    }
  }

}

</script>