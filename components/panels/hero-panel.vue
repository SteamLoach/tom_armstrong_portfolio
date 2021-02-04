<template>

  <content-panel-wrapper v-editable="content">
    <rich-text :content="content.text" />
  </content-panel-wrapper>

</template>


<script>

export default {

  props: {
    content: Object,
  },

}

</script>