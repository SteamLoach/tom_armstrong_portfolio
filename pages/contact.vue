<template>

  <main v-editable="story.content">

    <component v-for="panel in story.content.body"
               :is="panel.component"
               :content="panel"
               :key="panel._uid"
               v-editable="panel" />

  </main>



</template>

<script>

import {metaData} from '@/mixins/metaData';
import {storyblokBridge} from '@/mixins/storyblokBridge';

export default {

  transition: 'page',

  mixins: [
    metaData,
    storyblokBridge,
  ],

  data() {

    return {

      logRef: `<${this.$route.path}> [${new Date().getTime()}]`,

      storyblokBridgeMixin: {}

    }

  },

  computed: {
    formSchema: function() {
      return JSON.parse(this.story.content.body[2].schema)
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