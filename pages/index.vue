<template>

  <main v-if="story.content"
        v-editable="story.content">

    <component v-for="panel in story.content.body"
               :is="panel.component"
               :content="panel"
               :key="panel._uid"
               v-editable="panel" />

  </main>



</template>

<script>

import {storyblokBridge} from '@/mixins/storyblokBridge';

export default {

  transition: 'page',

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
