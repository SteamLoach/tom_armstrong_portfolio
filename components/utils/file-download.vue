<template>

  <sidebar-action-wrapper>
    <a class="sidebar-action-wrapper--inner"
      :class="[classExtensions]"
      :href="content.file.filename"
      :download="content.file.title"
      target="_blank">

      <strong>
        {{content.title}}
      </strong>

      <svg-loader :content="{icon_name: content.icon_name}"
                  aria-hidden="true" />


    </a>
  </sidebar-action-wrapper>


</template>

<script>

import {classExtensions} from '@/mixins/classExtensions';

export default {

  mixins: [classExtensions],

  props: {
    content: {
      type: Object,
      default: () => {},
    },
    classExt: {
      type: Array,
      default: () => [],
    }
  },

  data() {
    return {
      classExtensionsMixin: {},
    }
  }

}

</script>

<style lang="scss">


</style>