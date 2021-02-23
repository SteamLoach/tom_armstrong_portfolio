<template>

  <main v-if="story.content"
        v-editable="story.content">

    <page-header-wrapper>
      <h1 class="development-portfolio--title">
         {{story.content.title}}.
      </h1>
    </page-header-wrapper>

    <content-panel-wrapper>

      <media-card v-for="(project, i) in index"
                  class="development-portfolio--project-preview"
                  :alignMedia="mediaAlignment(i)"
                  :classExt="['wide']"
                  :key="project._uid">
        <template v-slot:copy>
          <div class="development-portfolio--project-preview--copy">
            <h2> {{project.content.title}} </h2>
            <project-summary :content="project.content.summary" />
            <tag-list :tags="project.tag_list" />
            <ui-button :content="{
                        name: 'Read More',
                        type: 'link',
                        to: project.full_slug,
                       }"
                       :classExt="['neutral', 'hover-state', 'full-width']" />
          </div>
        </template>
        <template v-slot:media>
          <img v-if="previewImage(project)"
                :src="previewImage(project).filename"
                :alt="previewImage(project).alt" />
        </template>
      </media-card>

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

      logRef: `<${this.$route.path}> [${new Date().getTime()}]`,

      storyblokBridgeMixin: {
        isIndex: true,
      }

    }

  },

  methods: {
    mediaAlignment: function(i) {
      if(!this.$store.getters.isHandheld) {
        return this.$toolkit.isEven(i) ? 'left' : 'right';
      }
    },
    previewImage: function(project) {
      if(project.content.feature_image) {
        return project.content.feature_image
      } else if(!this.$toolkit.isEmpty(project.content.images)) {
        return project.content.images[0]
      } else {
        return false;
      }
    }
  }



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
    @include row(center, start);
    margin: 0 auto;
    @include margin-scale(
      bottom,
      $default: $space-9,
      $on-laptop: $space-11,
    );
  }

  .development-portfolio--project-preview--copy {
    h2 {
      font-size: $title-medium;
      margin-bottom: $space-4;
    }
  }

</style>