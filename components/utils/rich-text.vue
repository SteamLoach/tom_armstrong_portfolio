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
      const src = this.raw ? this.raw : {content: []}
      return this.$storyapi.richTextResolver.render(src);
    }
  }

}

</script>