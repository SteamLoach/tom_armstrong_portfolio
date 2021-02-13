<template>

  <page-header-wrapper class="hero-panel"
                       :class="content.class_extensions">
    <div class="hero-panel--copy">
      <rich-text :content="content.copy" />
      <span v-if="hasLinks">
        <ui-button v-for="link in content.call_to_action"
                    type="link"
                   :name="link.name"
                   :to="link.to"
                   :key="$toolkit.kebabCase(link.name)">
        </ui-button>
      </span>
    </div>
    <div class="hero-panel--media">
      <placeholder-image :width="1200" :height="1000" />
    </div>
  </page-header-wrapper>

</template>


<script>

export default {

  props: {
    content: Object,
  },

  computed: {
    hasLinks: function() {
      return !this.$toolkit.isEmpty(this.content.call_to_action);
    }
  }

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