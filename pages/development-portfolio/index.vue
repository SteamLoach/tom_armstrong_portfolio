<template>

  <main v-if="story.content"
        v-editable="story.content">

    <page-header-wrapper>
      <h1 class="development-portfolio--title">
         {{story.content.title}}.
      </h1>
    </page-header-wrapper>

    <content-panel-wrapper>
      <development-project-preview v-for="(project, i) in index"
                                  :index="i"
                                  :content="project.content"
                                  :fullSlug="project.full_slug"
                                  :tags="project.tag_list"
                                  :key="project._uid" />
    </content-panel-wrapper>

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
        logRef: 'Development Portfolio Page',
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
    font-size: $title-largest;
  }

</style>