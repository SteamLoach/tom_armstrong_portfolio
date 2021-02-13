<template>

  <article class="media-card"
           :class="[
              classExt,
              `media-${alignMedia}`]">

    <div class="media-card--inner"
        :class="{'column-layout' : isColumn, 'row-layout': !isColumn}">
      <div :class="[
              `media-card--${slotOrder[0]}`,
              {'column-layout' : isColumn, 'row-layout': !isColumn},
            ]">
        <slot :name="slotOrder[0]" />
      </div>

      <div :class="[
              `media-card--${slotOrder[1]}`,
              {'column-layout' : isColumn, 'row-layout': !isColumn}
              ]">
        <slot :name="slotOrder[1]" />
      </div>
    </div>

  </article>

</template>

<script>

export default {

  props: {
    layout: {
      type: String,
      default: 'row',
      validator: function(val) {
        return ['row', 'column'].includes(val);
      }
    },
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
    },
    isColumn: function() {
      return this.layout === 'row' ? false : true;
    }
  }

}

</script>

<style lang="scss">


  //Classes
  .media-card {

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

  .media-card--inner {
    @include container(between, start);
    &.column-layout {
      @include x-pad($space-2);
    }
  }

  .media-card--copy {

    &.row-layout {
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

    &.column-layout {
      width: 100%;
    }



  }

  .media-card--media {

    &.row-layout {
      @include column-scale(
        $default: 24,
        $on-laptop: 10,
      );
    }

    &.column-layout {

    }

    img {
    @include max-height-scale(
      $default: 325px,
    );
      margin: 0 auto;
    }

  }

</style>