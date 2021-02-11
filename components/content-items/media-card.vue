<template>

  <article class="media-card"
           :class="[classExt, `media-${alignMedia}`]">

    <div :class="`media-card--${slotOrder[0]}`">
      <slot :name="slotOrder[0]" />
    </div>

    <div :class="`media-card--${slotOrder[1]}`">
      <slot :name="slotOrder[1]" />
    </div>

  </article>

</template>

<script>

export default {

  props: {
    alignMedia: {
      type: String,
      default: 'right',
      validator: function(val) {
        return ['left', 'right'].includes(val);
      }
    },
    classExt: {
      type: Array,
      default: () => ['wide'],
    }
  },

  computed: {
    slotOrder: function() {
      return this.alignMedia === 'right' ?
        ['copy', 'media'] : ['media', 'copy'];
    }
  }

}

</script>

<style lang="scss">


  //Classes
  .media-card {
    @include container(between, start);

    &.pad-light {
      padding: $space-4;
    }

    &.wide {
      max-width: $wide-width;
    }
    &.extra-wide {
      max-width: $extra-wide-width;
    }

  }

  .media-card--copy {
    @include column-scale(
      $default: 24,
      $on-laptop: 14,
    );
    @include margin-scale(
      bottom,
      $default: $space-4,
    );

    .media-right & {
      @include pad-scale(
        right,
        $default: 0,
        $on-laptop: $space-6,
      );
    }
    .media-left & {
      @include pad-scale(
        left,
        $default: 0,
        $on-laptop: $space-6,
      )
    }

  }

  .media-card--media {
    @include column-scale(
      $default: 24,
      $on-laptop: 10,
    );

    img {
    @include max-height-scale(
      $default: 325px,
    );
      margin: 0 auto;
    }

  }

</style>