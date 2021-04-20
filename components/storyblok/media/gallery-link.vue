<template>

  <sidebar-action-wrapper>
    <button class="sidebar-action-wrapper--inner"
            @click.prevent="openGallery"
            :class="[classExtensions]">
      <strong> {{content.title}} </strong>
      <svg-loader :content="{icon_name: 'picture-icon'}" />
    </button>
  </sidebar-action-wrapper>

</template>

<script>

import {classExtensions} from '@/mixins/classExtensions'

import sidebarActionWrapper from '@/components/local/_wrappers/sidebar-action-wrapper'

export default {

  mixins: [classExtensions],

  props: {
    content: {
      type: Object,
      default: () => {},
    },
    classExt: {
      type: Array,
      default: () => []
    }
  },

  components: {
    sidebarActionWrapper,
  },

  data() {
    return {
      classExtensionsMixin: {
        prop: 'class_extensions',
      }
    }
  },

  methods: {
    openGallery: function() {
      this.$store.commit('openModal', {
        modal: 'galleryModal',
        payload: this.content,
      })
    }
  }

}

</script>

<style lang="scss">


</style>