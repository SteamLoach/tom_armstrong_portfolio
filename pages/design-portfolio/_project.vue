<template>

  <main v-editable="story.content">

    <header class="design-project--header">

      <div class="design-project--feature-image">
        <image-asset :content="{media: featureImage(story)}" />
      </div>

      <div class="design-project--title">
        <h1> {{story.content.title}} </h1>
        <project-summary :content="story.content.summary" />
        <tag-list :tags="story.tag_list" />
      </div>

    </header>

    <component v-for="item in story.content.body"
              :is="item.component"
              :content="item"
              :key="item._uid"
              v-editable="item" />


  </main>

</template>

<script>

import {metaData} from '@/mixins/metaData';
import {storyblokBridge} from '@/mixins/storyblokBridge';
import {featureImage} from '@/mixins/featureImage';

export default {

  mixins: [
    metaData,
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
    max-width: $super-wide-width;
    @include pad-scale(
      x,
      $default: $space-4,
      $on-tablet: $space-6,
    );
    @include pad-scale(
      y,
      $default: $space-6,
      $on-tablet: $space-8,
      $on-laptop: $space-10,
    );
    margin: 0 auto;
  }


  .design-project--feature-image {
    @include wrapper(center, center);
    @include column-scale(
      $default: 24,
      $on-laptop: 14,
    );
  }

  .design-project--title {
    @include column-scale(
      $default: 24,
      $on-laptop: 10,
    );
    @include pad-scale(
      x,
      $on-phablet: $space-4,
      $on-laptop: $space-6,
    );
    @include pad-scale(
      top,
      $default: $space-4,
      $on-laptop: $space-6,
      $on-desktop: $space-10,
    );
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
      $default: $space-4,
      $on-tablet: $space-6,
      $on-laptop: $space-6,
      $on-desktop: $space-8,
    );
  }

  .design-project--body {
    @include row(center, center, $direction: column);
  }

</style>