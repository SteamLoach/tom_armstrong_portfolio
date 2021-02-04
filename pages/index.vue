<template>

  <page-wrapper v-if="story.content"
        v-editable="story.content">

    <component v-for="panel in story.content.body"
               :is="panel.component"
               :content="panel"
               :key="panel._uid" />

  </page-wrapper>



</template>

<script>

import {storyblokBridge} from '@/mixins/storyblokBridge';

export default {

  mixins: [
    storyblokBridge,
  ],

  data() {

    return {

      storyblokBridgeMixin: {
        logRef: 'Homepage'
      }

    }

  },

  methods: {
    updateStory: function(e) {
      this.story.content = e;
    }
  }

}

</script>

<style lang="scss">

</style>
