<template>

  <main v-if="story.content"
        v-editable="story.content">

    <page-header-wrapper>
      <h1 class="design-portfolio--title">
        {{story.content.title}}
      </h1>
    </page-header-wrapper>

    <media-card v-for="(project, i) in index"
                layout="split-panel"
                class="design-portfolio--project-preview"
                :classExt="['full-width']"
                :key="project._uid">
      <template v-slot:copy>
        <div class="design-portfolio--project-preview--copy">
          <h2> {{project.content.title}} </h2>
          <project-summary :content="project.content.summary" />
          <tag-list :tags="project.tag_list" />
          <ui-button :content="{
                      name: 'View Project',
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

  .design-portfolio--project-preview--copy {
    max-width: $narrow-width;
    @include pad-scale(
      bottom,
      $on-desktop: $space-10,
    );
    margin: 0 auto;

    h2 {
      font-size: $title-medium;
      margin-bottom: $space-4;
    }

  }

</style>