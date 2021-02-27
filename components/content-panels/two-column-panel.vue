<template>

  <content-panel-wrapper>

    <div class="two-column-panel"
         :class="classExtensions">

      <section  class="two-column-panel--left"
                :class="`two-column-panel--${favour[0]}`">
        <component v-for="item in content.left_column"
                  :is="item.component"
                  :content="item"
                  :key="item._uid"
                  v-editable="item" />
      </section>

      <section  class="two-column-panel--right"
               :class="`two-column-panel--${favour[1]}`">
        <component v-for="item in content.right_column"
                  :is="item.component"
                  :content="item"
                  :key="item._uid"
                  v-editable="item" />
      </section>

    </div>

  </content-panel-wrapper>

</template>

<script>

import {classExtensions} from '@/mixins/classExtensions'

export default {

  mixins: [classExtensions],

  props: {
    content: {
      type: Object,
      default: () => {},
    },
    classExt: {
      type: Array,
      default: () => [],
    }
  },

  data() {
    return {
      logRef: `<two-column-panel> [${new Date().getTime()}]`,
      classExtensionsMixin: {
        prop: 'class_extensions'
      }
    }
  },

  computed: {
    favour: function() {
      if(this.content.favour === 'left') {
        return ['primary', 'secondary']
      } else {
        return ['secondary', 'primary']
      }
    }
  }

}

</script>

<style lang="scss">

  .two-column-panel {
    @include row(center, start);

    &.half {
      .two-column-panel--primary,
      .two-column-panel--secondary {
        @include column-scale(
          $default: 24,
          $on-tablet: 12,
        );
      }
    }

    &.third {
      .two-column-panel--primary {
        @include column-scale(
          $on-tablet: 16,
        );
      }
      .two-column-panel--secondary {
        @include column-scale(
          $on-tablet: 8,
        )
      }
    }

    &.quarter {
      .two-column-panel--primary {
        @include column-scale(
          $on-tablet: 18,
        );
      }
      .two-column-panel--secondary {
        @include column-scale(
          $on-tablet: 6,
        )
      }
    }

    &.wide-width {
      margin: 0 auto;
      max-width: $wide-width;
    }

    &.extra-wide-width {
      margin: 0 auto;
      max-width: $extra-wide-width;
    }

    &.super-wide-width {
      margin: 0 auto;
      max-width: $super-wide-width;
    }

    &.border-left-between {
      .two-column-panel--left {
        @include border-from(
          $tablet,
          $dir: right,
          $style: 1px solid $border-color,
        );
        .dark-mode & {
          border-color: $dark-mode-border-color;
        }
      }
    }

    &.border-right-between {
      .two-column-panel--right {
        @include border-from(
          $tablet,
          $dir: left,
          $style: 1px solid $border-color,
        );
        .dark-mode & {
          border-color: $dark-mode-border-color;
        }
      }
    }

  }

  .two-column-panel--left {
    @include pad-scale(
      right,
      $on-tablet: $space-4,
      $on-laptop: $space-6,
    );
  }

  .two-column-panel--right {
    @include pad-scale(
      left,
      $on-tablet: $space-4,
      $on-laptop: $space-6,
    );
  }


  .two-column-panel--secondary {
    margin-top: $space-2;
  }



</style>