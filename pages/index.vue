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

import {metaData} from '@/mixins/metaData';
import {storyblokBridge} from '@/mixins/storyblokBridge';

export default {

  transition: 'page',

  mixins: [
    storyblokBridge,
    metaData,
  ],

  data() {

    return {

      logRef: `<${this.$route.path}> [${new Date().getTime()}]`,

      storyblokBridgeMixin: {}

    }

  },

}

</script>

<style lang="scss">

</style>
