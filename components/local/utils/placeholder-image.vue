<template>

  <img :src="imageSource" />

</template>

<script>

export default {

  props: {
    width: {
      type: Number,
      default: 1500,
    },
    height: {
      type: Number,
    }
  },

  computed: {
    imageSource: function() {
      const dimensions = this.height ?
        `${this.width}x${this.height}` : this.width
      return `https://via.placeholder.com/${dimensions}`
    }
  }

}

</script>