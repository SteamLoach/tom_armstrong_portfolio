<template>

  <section v-if="displayCondition"
           class="rich-text"
           :class="classObject"
           v-html="resolvedText" />

</template>

<script>

export default {

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

  computed: {

    isComponent: function() {
      return this.content ? this.content.component : false;
    },

    classObject: function() {
      const classObject = {
        'is-component': this.isComponent ? true : false,
      }
      this.classExt.forEach(ext =>
        classObject[this.$toolkit.kebabCase(ext)] = true
      );
      if(this.content && this.content.class_extensions) {
        const classExtensions = this.content.class_extensions.split(',');
        classExtensions.forEach(ext =>
          classObject[this.$toolkit.kebabCase(ext)] = true
        );
      }
      return classObject;
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

    h2, h3 {
      margin-bottom: $space-5;
    }
    h4, h5, h6 {
      margin-bottom: $space-2;
    }

    p + h2, p + h3,
    ul + h2, ul + h3,
    ol + h2, ol + h3 {
      margin-top: $space-5;
    }
    p + h4, p + h5, p + h6,
    ul + h4, ul + h5, ul + h6,
    ol + h4, ol + h5, ul + h6 {
      margin-top: $space-4;
    }

    p, ul, ol {
      margin-bottom: $space-3;
    }

    p,
    h3, h4, h5, h6 {
      padding-left: $space-2;
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

    &.is-component {}

    &.narrow-copy-width {
      max-width: $narrow-width;
    }
    &.medium-copy-width {
      max-width: $medium-width;
    }

    &.with-border-bottom {
      padding-bottom: $space-2;
      //border-bottom: 1px solid $shade-darkest;
    }

  }


  //Dark Mode
  .dark-mode {
    .rich-text {

      a {
        color: $brand-light;
      }

      &.with-border-bottom {
        border-color: $shade-lighter;
      }

    }
  }

</style>