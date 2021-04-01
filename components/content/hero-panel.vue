<template>

  <page-header-wrapper class="hero-panel"
                       :class="content.class_extensions">

    <section class="hero-panel--copy">
      <component v-for="item in content.copy"
                 :is="item.component"
                 :key="item._uid"
                 :content="item"
                 v-editable="item">
      </component>


    </section>

    <section class="hero-panel--media">
      <placeholder-image :width="1200" :height="1000" />
    </section>

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
    @include row(center, center, $yc: center);

    &.is-full-height {
      height: 90vh;
    }
  }

  .hero-panel--copy {
    max-width: $narrow-width;
    @include column-scale(
      $default: 24,
      $on-tablet: 14,
    );
    @include pad-scale(
      right,
      $on-tablet: $space-6,
      $on-laptop: $space-8,
    );
    @include pad-scale(
      bottom,
      $on-laptop: $space-10,
    );
  }

  .hero-panel--media {
    @include column-scale(
      $default: 24,
      $on-tablet: 10,
    )
  }

</style>