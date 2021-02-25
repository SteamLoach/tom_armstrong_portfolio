<template>

  <section v-if="displayCondition"
           class="rich-text"
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
    displayCondition: {
      type: Boolean,
      default: true,
    }
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

    margin-bottom: $space-6;
    font-size: $text-large;

    h1 {
      font-size: $title-larger;
    }
    h2 {
      font-size: $title-large;
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

    a {
      color: $brand-dark;
      &:hover {
        text-decoration: underline;
      }
    }

    img {
      margin: $space-6 auto;
      border-radius: $border-radius;
      @include shadow($elevation-light);

    }

    &.plain-images {
      img {
        border-radius: 0;
        box-shadow: none;
      }

    }

    &.narrow-copy-width {
      max-width: $narrow-width;
    }
    &.medium-copy-width {
      max-width: $medium-width;
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



    &.with-border-bottom {
      padding-bottom: $space-2;
      //border-bottom: 1px solid $shade-darkest;
    }

    //Dark Mode
    .dark-mode & {

      a {
        color: $dark-mode-link-color;
      }

    }


  }




</style>