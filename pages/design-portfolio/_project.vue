<template>

  <main v-if="story.content"
        v-editable="story.content">



    <header class="design-project--header">

      <div class="design-project--feature-image"
            :style="$toolkit.setBackgroundImage(
              featureImage(story).filename
            )">
      </div>

      <div class="design-project--title">
        <div class="design-project--title--inner">
          <h1> {{story.content.title}} </h1>
          <project-summary :content="story.content.summary" />
          <tag-list :tags="story.tag_list" />
        </div>
      </div>

    </header>

    <content-panel-wrapper class="design-project--body">
      <component v-for="item in story.content.body"
                :is="item.component"
                :content="item"
                :key="item._uid"
                v-editable="item" />
    </content-panel-wrapper>


  </main>

</template>

<script>

import {storyblokBridge} from '@/mixins/storyblokBridge';
import {featureImage} from '@/mixins/featureImage';

export default {

  mixins: [
    storyblokBridge,
    featureImage,
  ],

  data() {
    return {
      logRef: `<${this.$route.path}> [${new Date().getTime()}]`,
      storyblokBridgeMixin: {}
    }
  }

}

</script>

<style lang="scss">

  .design-project--header {
    @include row(center, stretch);
    margin: 0 auto;
  }

  .design-project--feature-image,
  .design-project--title {
    height: 80vh;
    @include column-scale(
      $default: 24,
      $on-laptop: 12,
    );
    margin-bottom: $space-10;
  }

  .design-project--feature-image {
    @include background-image(
      $position: left,
    );
    background-color: pink;
  }

  .design-project--title {
    @include wrapper(center, center);
    h1 {
      margin-bottom: $space-4;
      @include font-size-scale(
        $default: $title-medium,
        $on-tablet: $title-large,
        $on-laptop: $title-larger,
      );
    }
  }

  .design-project--title--inner {
    max-width: $medium-width;
    @include pad-scale(
      x,
      $on-laptop: $space-6,
      $on-desktop: $space-8,
    );
  }

  .design-project--body {
    @include row(center, center, $direction: column);
  }

</style>