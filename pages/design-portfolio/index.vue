<template>

  <main v-if="story.content"
        v-editable="story.content">

    <component v-for="item in story.content.body"
          :is="item.component"
          :key="item._uid"
          :content="item"
          v-editable="item" />

    <section class="layout--content-panel x-pad-medium y-pad-medium">

      <article v-for="(project, i) in index"
                :class="[
                  'media-card',
                  `media-${mediaAlignment(i)}`,
                  'split-panel-layout',
                  'design-portfolio--project-preview'
                  ]"
              :key="project._uid">

        <component :is="`project-preview-${slotOrder(i)[0]}`"
                  :project="project" />

        <component :is="`project-preview-${slotOrder(i)[1]}`"
                  :project="project" />


      </article>

    </section>

  </main>

</template>


<script>

import {storyblokBridge} from '@/mixins/storyblokBridge';
import {featureImage} from '@/mixins/featureImage';
import {manualMediaCardAlignment} from '@/mixins/manualMediaCardAlignment'

export default {

  transition: 'page',

  mixins: [
    storyblokBridge,
    featureImage,
    manualMediaCardAlignment,
  ],

  data() {
    return {
      logRef: `<${this.$route.path}> [${new Date().getTime()}]`,
      storyblokBridgeMixin: {
        isIndex: true,
      }
    }
  },


}

</script>

<style lang="scss">

  .design-portfolio--title {
    @include y-pad($space-12);
  }

  .design-portfolio--project-preview {
    @include margin-scale(
      bottom,
      $default: $space-8,
      $on-laptop: $space-10,
    );
  }

</style>