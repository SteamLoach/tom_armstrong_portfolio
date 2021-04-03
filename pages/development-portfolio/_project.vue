<template>

  <main v-if="story.content"
        v-editable="story.content">

    <page-header-wrapper>
      <div class="development-project--header">
        <div class="development-project--title">
          <h1>
            {{story.content.title}}.
          </h1>
          <project-summary :content="story.content.summary" />
          <tag-list :tags="story.tag_list" />
        </div>
        <div v-if="featureImage(story)"
            class="development-project--feature-image">
            <image-asset :content="{media: featureImage(story)}" />
        </div>
      </div>
    </page-header-wrapper>


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

  transition: 'page',

  mixins: [
    metaData,
    storyblokBridge,
    featureImage,
  ],

  data() {

    return {

      logRef: `<${this.$route.path}> [${new Date().getTime()}]`,

      storyblokBridgeMixin: {},

      lightboxGalleryMixin: {
        isActive: false,
        currentIndex: 0,
      },

    }

  },

}

</script>

<style lang="scss">

  .development-project--header {
    max-width: $super-wide-width;
    @include row(start, start);
    @include pad-scale(
      x,
      $default: $space-3,
      $on-lrg-mobile: $space-4,
      $on-tablet: $space-6,
      $on-laptop: $space-8,
    );
    @include pad-scale(
      top,
      $default: $space-6,
      $on-tablet: $space-10,
    );
    @include pad-scale(
      bottom,
      $default: $space-8,
      $on-phablet: $space-10,

    );
    margin: 0 auto;
  }

  .development-project--title {
    @include media-until($desktop, width, 100%);
    @include media-from($desktop, max-width, $narrow-width);
    @include pad-scale(
      top,
      $on-laptop: $space-6,
    );
    @include pad-scale(
      bottom,
      $default: $space-4,
      $on-laptop: $space-6,
      $on-desktop: $space-9,
    );
    @include margin-scale(
      right,
      $on-laptop: $space-6,
    );
    h1 {
      width: 100%;
      margin-bottom: $space-4;
      @include font-size-scale(
        $default: $title-medium,
        $on-tablet: $title-large,
        $on-laptop: $title-larger,
      );
    }
  }

  .development-project--feature-image {
    @include media-until($desktop, width, 100%);
    @include media-from($desktop, flex, 1);
    img {
      max-height: 625px;
      margin: 0 auto;
    }
  }


  .development-project--body {
    @include row(start, start);
    max-width: $extra-wide-width;
    @include pad-scale(
      x,
      $default: $space-4,
      $on-lrg-mobile: $space-5,
      $on-tablet: $space-7,
      $on-laptop: $space-8,
    );
    margin: 0 auto;
  }

  .development-project--copy {
    @include custom-scale(
      $default: 100%,
      $on-tablet: $narrow-width,
      $on-desktop: $medium-width,
    );
  }

  .development-project--media {
    @include media-until($laptop, width, 100%);
    @include media-from($laptop, flex, 1);
    @include y-margin($space-8);
    @include y-pad($space-4);
    @include pad-scale(
      left,
      $default: 0,
      $on-laptop: $space-6,
    );
    @include margin-scale(
      left,
      $default: 0,
      $on-laptop: $space-8,
    );

    @include border-from(
      $laptop,
      $dir: left,
      $style: 1px solid $border-color,
    );

    .dark-mode & {
      border-color: $dark-mode-border-color;
    }

  }

  .development-project--media--item {
    @include margin-scale(
      bottom,
      $default: $space-8,
      $on-laptop: $space-8,
    );
    img {
      margin-bottom: $space-2;
      @include transition();
      &:hover {
        cursor: pointer;
      }
    }
    p {
      @include x-pad($space-2);
      margin-left: $space-2;
      font-size: $text-smaller;
    }
  }

</style>