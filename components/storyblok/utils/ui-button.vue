<template>

  <component :is="tag"
             :type="content.type"
             class="ui-button"
             :class="classExtensions"
             :to="content.to"
             :disabled="disabled"
             @click="onClick">
    {{content.name}}
  </component>

</template>

<script>

import {classExtensions} from '@/mixins/classExtensions'

export default {

  mixins: [classExtensions],

  props: {
    content: {
      type: Object,
      required: true,
    },
    action: {
      type: Function,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    classExt: {
      type: Array,
      default: () => [],
    }
  },

  data() {
    return {
      logRef: `<netflify-form> [${new Date().getTime()}]`,
      classExtensionsMixin: {
        prop: 'class_extensions',
      }
    }
  },

  methods: {
    onClick: function(e) {
      this.$emit('handleClick')
    }
  },

  computed: {
    tag: function() {
      if(this.content.type === 'link') {
        return 'nuxt-link';
      } else {
        return 'button';
      }
    }
  }

}
</script>

<style lang="scss">

  @mixin button(
    $fill: $dark-mode-title-color,
    $color: $page-background,
    $dark-mode-fill: $title-color,
    $dark-mode-color: $dark-mode-page-background,
  ) {


    color: $color;
    background: $fill;
    border: 2px solid $fill;
    @include transition($duration: 0.1s);


    .dark-mode & {
      color: $dark-mode-color;
      background: $dark-mode-fill;
      border-color: $dark-mode-fill;
    }

    &:hover:not(:disabled) {
      cursor: pointer;
    }


    &.hover-state {

      color: $fill;
      border-color: $fill;
      background: transparent;

      .dark-mode & {

        color: $dark-mode-fill;
        border-color: $dark-mode-fill;

      }

      &:hover:not(:disabled) {

        color: $color;
        background: $fill;

        .dark-mode & {
          color: $dark-mode-color;
          background: $dark-mode-fill;
        }

      }

    }

    &:disabled {
      cursor: not-allowed;
      color: $shade-light;
      background: transparent;
      border-color: $shade-light;
      .dark-mode & {
        color: $shade-darker;
        border-color: $shade-darker;
      }
    }

  }

  .ui-button {

    padding: $space-2 $space-3;
    text-align: center;
    font-weight: 600;

    &:not(:first-of-type) {
      margin-left: $space-4;
    }

    &.with-icon-right {
      @include wrapper(center, center, $no-wrap: true);
    }

    &.full-width {
       width: 100%;
    }

    &.rounded {
      border-radius: $border-radius;
    }

    &.neutral {
      @include button(
        $fill: $title-color,
        $dark-mode-fill: $dark-mode-title-color,
      );
    }

    &.brand {
      @include button(
        $fill: $brand-dark,
        $dark-mode-fill: $brand-light,
      );
    }

    &.accent {
      @include button(
        $fill: $accent-dark,
        $dark-mode-fill: $accent-base,
      )
    }

  }

</style>