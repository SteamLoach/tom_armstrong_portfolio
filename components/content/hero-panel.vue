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
    height: 80vh;
    @include row(start, start);
    @include row-from($tablet, end, center);
    max-width: $extra-wide-width;
    @include pad-scale(
      x,
      $on-laptop: $space-6,
      $on-desktop: $space-8,
    );
    margin: 0 auto;

  }

  .hero-panel--copy {
    @include position-from(
      $tablet,
      absolute,
      $top: $space-8,
      $left: 0
    );
    max-width: $narrow-width;
    @include margin-scale(
      left,
      $on-laptop: $space-6,
      $on-desktop: $space-8,
    );
    h1 {
      @include font-size-scale(
        $default: $title-large,
        $on-tablet: $title-larger,
        $on-laptop: $title-largest,
      );
    }
  }

  .hero-panel--media {
    @include column-scale(
      $default: 24,
      $on-tablet: 16,
      $on-desktop: 14,
    );
  }

  svg {
    width: 100%;
    height: auto;
    .highlight-fill {
      fill: $brand-base;
    }
  }

</style>