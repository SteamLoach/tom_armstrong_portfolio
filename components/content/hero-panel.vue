<template>

  <page-header-wrapper>

    <div class="hero-panel"
        :class="content.class_extensions">

      <section class="hero-panel--copy">
        <component v-for="item in content.copy"
                  :is="item.component"
                  :key="item._uid"
                  :content="item"
                  v-editable="item" />
      </section>

      <section class="hero-panel--media">
        <component v-for="item in content.media"
                  :is="item.component"
                  :key="item._uid"
                  :content="item" />
      </section>
    </div>

  </page-header-wrapper>

</template>


<script>

export default {

  props: {
    content: Object,
  },

}

</script>

<style lang="scss">

  .hero-panel {
    max-height: 650px;
    @include height-scale(
        $default: auto,
        $on-laptop: 50vh,
    );
    @include row(start, start);
    @include row-from($tablet, end, end);
    max-width: $extra-wide-width;
    @include pad-scale(
      x,
      $on-laptop: $space-6,
      $on-desktop: $space-8,
    );
    margin: 0 auto;

    &.portfolio-header {
      @include height-scale(
        $default: auto,
        $on-tablet: 50vh,
        $on-desktop: 70vh,
      );
    }

    &.homepage-header {
      min-height: 500px;
      @include height-scale(
        $default: auto,
        $on-tablet: 50vh,
        $on-laptop: 60vh,
      );
      @include max-height-scale(
        $on-tablet: 600px,
      );
    }


  }

  .hero-panel--copy {
    @include position-from(
      $tablet,
      absolute,
      $top: 0,
      $left: 0
    );
    max-width: $narrow-width;
    @include margin-scale(
      left,
      $on-laptop: $space-6,
      $on-desktop: $space-8,
    );
    @include margin-scale(
      top,
      $on-tablet: $space-6,
      $on-laptop: $space-8,
    );
    @include margin-until($tablet, $bottom: $space-6);
  }

  .hero-panel--media {
    height: 100%;
    @include wrapper(center, end);
    @include column-scale(
      $default: 24,
      $on-tablet: 16,
      //$on-desktop: 14,
    );
  }

  svg {
    width: 100%;
    height: auto;
    @include transition();
    .highlight-fill {
      fill: $accent-dark;
    }
    .background-fill {
      fill: $brand-base;
    }
  }



</style>