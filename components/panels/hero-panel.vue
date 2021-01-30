<template>

  <content-panel-wrapper v-editable="content">
    <rich-text :raw="content.text" />
  </content-panel-wrapper>

</template>


<script>

export default {

  props: {
    content: Object,
  },

}

</script>