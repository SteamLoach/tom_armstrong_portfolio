<template>

  <page-wrapper v-if="story.content"
        v-editable="story.content">

    <header class="development-project-header">
      <div class="development-project-title-wrapper">
        <h1 class="development-project-title">
          {{story.content.title}}.
        </h1>
        <p class="development-project-summary">
          {{story.content.summary}}
        </p>
        <ul class="development-project-tags">
          <li v-for="tag in story.tag_list"
              :key="`${tag}-tag`">
            {{tag}}
          </li>
        </ul>
      </div>
    </header>

    <transition name="lightbox-gallery">
      <lightbox-gallery v-if="lightboxGalleryMixin.isActive"
                        :images="story.content.images"
                        :currentIndex="lightboxGalleryMixin.currentIndex"
                        @setImage="setLightboxGalleryIndex"
                        @closeLightboxGallery="closeLightboxGallery" />
    </transition>

    <article class="development-project-body">

      <section class="development-project-copy">
        <component v-for="item in story.content.body"
                  :is="item.component"
                  :content="item"
                  :displayCondition="displayCondition(item)"
                  v-editable="item"
                  :key="item._uid" />
      </section>

      <aside class="development-project-media">
        <ul>
          <li v-for="(item, index) in story.content.images"
              class="captioned-media"
              :key="item.id">
            <img :src="item.filename"
                 :alt="item.alt"
                 @click="openLightboxGallery(index)" />
            <p class="caption">
              {{item.title}}
            </p>
          </li>
        </ul>
      </aside>


    </article>

  </page-wrapper>

</template>

<script>

import {storyblokBridge} from '@/mixins/storyblokBridge';
import {lightboxGallery} from '@/mixins/lightboxGallery';

export default {

  mixins: [
    storyblokBridge,
    lightboxGallery
  ],

  data() {

    return {

      storyblokBridgeMixin: {
        logRef: this.$route.path,
      },

      lightboxGalleryMixin: {
        logRef: '<development-project>',
        isActive: false,
        currentIndex: 0,
      },

      jargonConfig: {
        noJargonComponentRefs: ['solution'],
        withJargonComponentRefs: ['solutionWithJargon']
      }

    }

  },

  computed: {
    withJargon: function() {
      return this.$store.state.withJargon
    }
  },

  methods: {
    //determines jargon/noJargon content
    displayCondition(item) {
      const itemRef = this.$toolkit.camelCase(item.reference);
      const noJargonComponents = this.jargonConfig.noJargonComponentRefs;
      const jargonComponents = this.jargonConfig.withJargonComponentRefs;
      if(noJargonComponents.includes(itemRef)) {
        return !this.withJargon;
      } else if (jargonComponents.includes(itemRef)) {
        return this.withJargon;
      } else {
        return true;
      }
    },

  }



}

</script>

<style lang="scss">

  .development-project-header {

  }

  .development-project-title-wrapper {
    max-width: $medium-width;
    @include pad-scale(
      top,
      $default: $space-9,
      $on-tablet: $space-11,
      $on-laptop: $space-11,
    );
    @include pad-scale(
      bottom,
      $default: $space-10,
      $on-tablet: $space-12,
      $on-laptop: $space-13,
    )
  }

  .development-project-title {
    width: 100%;
    margin-bottom: $space-2;
    font-size: $title-larger;
  }

  .development-project-summary {
    @include single-margin-until($tablet, right, $space-6);
    padding-bottom: $space-1;
    margin-bottom: $space-2;
    font-size: $text-body;
    border-bottom: 1px solid $shade-darker;
  }

  .development-project-tags {
    width: 100%;
    padding: 0 $space-2 $space-2 $space-2;
    li {
      display: inline-block;
      font-size: $text-smaller;

      &:not(:first-child) {
        padding-left: $space-2;
        margin-left: $space-2;
        border-left: 1px solid $shade-light;
      }

    }
  }

  .development-project-body {
    @include row(start, start);
    max-width: $extra-wide-width;
    margin: 0 auto;
  }

  .development-project-copy {
    @include custom-scale(
      $default: 100%,
      $on-tablet: $narrow-width,
      $on-desktop: $medium-width,
    );
  }

  .development-project-media {
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
      $style: 1px solid $shade-darkest
    );
    background: $shade-lightest;

    .captioned-media {
      @include margin-scale(
        bottom,
        $default: $space-8,
        $on-laptop: $space-8,
      );
      img {
        margin-bottom: $space-2;
        border-radius: $space-2;
        border: 1px solid transparent;
        @include shadow($elevation-medium);
        @include transition();
        &:hover {
          cursor: pointer;
          @include shadow($elevation-heavy);
        }
      }
      p {
        @include x-pad($space-2);
        margin-left: $space-2;
        font-size: $text-smaller;
      }
    }

  }


  //Dark Mode
  .dark-mode {
    .development-project-media {
      border-color: $shade-lighter;
      background: $shade-darkest;
      .captioned-media {
        img {
          @include shadow($elevation-medium, $shade: $shade-black);
          &:hover {
            @include shadow($elevation-heavy, $shade: $shade-black);
          }
        }
      }
    }
  }

</style>