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
                  'row-layout',
                  'wide',
                  'development-portfolio--project-preview'
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

import {metaData} from '@/mixins/metaData';
import {storyblokBridge} from '@/mixins/storyblokBridge';
import {featureImage} from '@/mixins/featureImage';
import {manualMediaCardAlignment} from '@/mixins/manualMediaCardAlignment'

export default {

  transition: 'page',

  mixins: [
    metaData,
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

  .development-portfolio--title {
    max-width: $narrow-width;
    @include pad-scale(
      top,
      $default: $space-9,
      $on-tablet: $space-11,
      $on-laptop: $space-11,
    );
    @include pad-scale(
      bottom,
      $default: $space-8,
      $on-tablet: $space-10,
      $on-laptop: $space-12,
    );
    @include font-size-scale(
      $default: $title-large,
      $on-tablet: $title-larger,
      $on-laptop: $title-largest,
    );
  }

  .development-portfolio--project-preview {
    @include x-margin(auto);
    @include margin-scale(
      bottom,
      $default: $space-10,
    );

  }

</style>