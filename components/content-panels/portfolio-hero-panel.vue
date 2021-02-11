<template>

  <header class="portfolio-hero-panel">

    <div class="portfolio-hero-panel-inner">

      <h1 class="portfolio-hero-panel-title"> {{title}} </h1>

      <div class="portfolio-hero-panel-icon">
        <svg-loader :icon="icon" />
      </div>

    </div>


  </header>

</template>


<script>

export default {

  props: {
    title: String,
    icon: String,
  }

}

</script>

<style lang="scss">

  .portfolio-hero-panel {
    @include margin-scale(
      top,
      $default: $space-6,
      $on-tablet: $space-8,
      $on-laptop: $space-10,
    );
    @include margin-scale(
      bottom,
      $default: $space-10,
      $on-tablet: $space-8,
      $on-laptop: $space-12,
    );
  }

  .portfolio-hero-panel-inner {
    @include row(start, between);
    max-width: $extra-wide-width;
    margin: 0 auto;
    border-bottom: 2px solid $border-color;
  }

  .portfolio-hero-panel-title {
    @include pad-scale(
      top,
      $default: $space-10,
    );
    @include font-size-scale(
      $default: $title-small,
      $on-laptop: $title-larger,
    );

  }

  .portfolio-hero-panel-icon {
    flex: 1;
    svg {
      @include size-from($desktop, $x: 450px, $y: auto);
      margin-left: auto;
    }
  }

</style>