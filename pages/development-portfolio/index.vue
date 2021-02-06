<template>

  <page-wrapper v-if="story.content"
        v-editable="story.content">

    <component v-for="panel in story.content.body"
               :is="panel.component"
               :content="panel"
               :key="panel._uid" />

    <content-panel-wrapper>
      <project-preview-panel :projects="index"
                             :componentRef="'dev'"/>
    </content-panel-wrapper>

  </page-wrapper>



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
        logRef: 'Development Portfolio Page',
        isIndex: true,
      }

    }

  }

}

</script>