<template>

  <section class="rich-text"
           :class="[{'is-component' : isComponent}, classExtensions]"
           v-html="resolvedText" />

</template>

<script>

import {classExtensions} from '@/mixins/classExtensions'

export default {

  mixins: [classExtensions],

  props: {
    content: Object,
    classExt: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      logRef: `<rich-text> [${new Date().getTime()}]`,
      classExtensionsMixin: {
        prop: 'class_extensions',
      }
    }
  },

  computed: {

    isComponent: function() {
      return this.content ? this.content.component : false;
    },

    resolvedText: function() {
      if(this.content) {
        const raw = this.isComponent ? this.content.text : this.content;
        return this.$storyapi.richTextResolver.render(raw)
      } else {
        return ''
      }
    }
  }

}

</script>

<style lang="scss">

  $major-headers: 'h1', 'h2', 'h3';
  $minor-headers: 'h4', 'h5', 'h6';
  $copy-components: 'p', 'ul', 'ol';

  $major-copy-headers:
    "p + h1",
    "p + h2", "p + h3",
    "ul + h2", "ul + h3",
    "ol + h2", "ol + h3";

  $minor-copy-headers:
    "p + h4", "p + h5", "p + h6",
    "ul + h4", "ul + h5", "ul + h6",
    "ol + h4", "ol + h5", "ul + h6";

  .rich-text {
    max-width: $medium-width;
    @include font-size-scale(
      $default: $text-body,
    );

    .brand {
      color: $brand-dark;
      .dark-mode & {
        color: $brand-light;
      }
    }

    .accent {
      color: $accent-dark;
      .dark-mode & {
        color: $accent-base;
      }
    }

    h1 {
      @include font-size-scale(
        $default: $title-large,
        $on-tablet: title-larger,
      )
    }
    h2 {
      @include font-size-scale(
        $default: $title-medium,
        $on-tablet: $title-large,
      );
    }
    h3 {
      font-size: $title-small;
    }
    h4 {
      font-size: $title-smaller;
    }
    h5, h6 {
      font-size: $title-smallest;
    }

    &.in-hero {
      margin-bottom: 0;
      h1 {
        margin-bottom: 0;
        @include font-size-scale(
          $default: $title-large,
          $on-tablet: $title-larger,
          $on-laptop: $title-largest,
        );
      }
    }

    &.margin-bottom-light {
      margin-bottom: $space-4;
    }

    &.margin-bottom-medium {
      margin-bottom: $space-6;
    }

    &.margin-bottom-heavy {
      margin-bottom: $space-8;
    }


    #{$major-headers} {
      margin-bottom: $space-5;
    }
    #{$minor-headers} {
      margin-bottom: $space-2;
    }

    #{$major-copy-headers} {
      margin-top: $space-5;
    }
    #{$minor-copy-headers} {
      margin-top: $space-4;
    }

    #{$copy-components} {
      margin-bottom: $space-3;
    }

    ul {
      list-style-type: disc;
    }

    ul, ol {
      padding-left: $space-6;
      li {
        margin-bottom: $space-1;
        p {margin-bottom: 0;}
      }
    }

    blockquote {
      padding-left: $space-2;
      font-style: italic;
      font-family: $title-font;
      border-left: 3px solid $border-color;
      .dark-mode & {
        border-color: $dark-mode-border-color;
      }
    }

    a {
      color: $brand-dark;
      &:hover {
        text-decoration: underline;
      }
    }

    &.small-copy-size {
      font-size: $text-root;
      h3 {
        font-size: $title-smaller;
        margin-bottom: $space-3;
      }
      h4 {
        font-size: $title-smallest;
      }
      h5 {
        font-size: $text-body;
      }
      h6 {
        font-size: $text-root;
      }
      #{$minor-headers} {
        margin-bottom: $space-1;
      }
      #{$minor-copy-headers} {
        margin-top: $space-3;
      }
      #{$copy-components} {
        margin-bottom: $space-1;
      }
      ul, ol {
        padding-left: $space-5;
      }
    }

    img {
      max-height: 90vh;
      margin: $space-8 auto;
    }

    &.thumbnail-images {
      img {
        @include media-from($tablet, max-width, 25%);
      }
    }

    &.small-images {
      img {
        @include media-from($tablet, max-width, 50%);
      }
    }

    &.medium-images {
      img {
        @include media-from($tablet, max-width, 75%);
      }
    }

    &.large-images {
      img {
        @include media-from($tablet, max-width, 90%);
      }
    }

    &.styled-images {
      img {
        border-radius: $space-1;
        @include shadow($elevation-light);
      }
    }


    //Dark Mode
    .dark-mode & {

      a {
        color: $dark-mode-link-color;
      }

    }


  }




</style>